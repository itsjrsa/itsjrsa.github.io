import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, isExpanded, onToggle, onClose }) {
  const [copyStatus, setCopyStatus] = useState('')
  const resetTimer = useRef(null)
  const toggleRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const detailsId = `publication-${project.id}-details`

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const handleCopyCitation = async () => {
    clearTimeout(resetTimer.current)
    try {
      await navigator.clipboard.writeText(project.citation)
      setCopyStatus('Citation copied.')
    } catch {
      setCopyStatus('Could not copy. Select the citation below to copy it manually.')
    }
    resetTimer.current = setTimeout(() => setCopyStatus(''), 4000)
  }

  return (
    <motion.article
      layout={!reduceMotion}
      className={`${styles.card} ${styles[project.size] || styles.medium} ${isExpanded ? styles.expanded : ''}`}
      transition={{ layout: { duration: 0.3 } }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isExpanded) {
          onClose()
          toggleRef.current?.focus()
        }
      }}
    >
      <div className={styles.summary}>
        <div className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <h3 className={styles.title}>
          <button
            type="button"
            ref={toggleRef}
            className={styles.toggle}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            onClick={onToggle}
          >
            {project.title}
          </button>
        </h3>
        <p className={styles.venue}>{project.venue}</p>
        {project.image && (
          <img src={project.image} alt="" className={styles.image} loading="lazy" />
        )}
        <span className={styles.expandHint} aria-hidden="true">
          {isExpanded ? 'Close details' : `${project.abstractLabel || 'Abstract'} & citation`}
          <span>{isExpanded ? '−' : '+'}</span>
        </span>
      </div>

      <div id={detailsId} hidden={!isExpanded} className={styles.expandedContent}>
        <p className={styles.authors}>{project.authors}</p>
        {project.abstract && (
          <div className={styles.abstractBlock}>
            <h4>{project.abstractLabel || 'Abstract'}</h4>
            <p className={styles.abstract}>{project.abstract}</p>
          </div>
        )}
        <div className={styles.citationBlock}>
          <div className={styles.citationHeader}>
            <h4>Citation</h4>
            <button type="button" className={styles.copyButton} onClick={handleCopyCitation}>
              {copyStatus === 'Citation copied.' ? 'Copied' : 'Copy citation'}
            </button>
          </div>
          <p className={styles.copyStatus} role="status">{copyStatus}</p>
          <p className={styles.citation}>{project.citation}</p>
        </div>
        {project.tags?.length > 0 && (
          <ul className={styles.tags} aria-label="Research topics">
            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        )}
        {project.link?.trim() && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View publication <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
