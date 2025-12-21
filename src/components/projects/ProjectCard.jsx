import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, isExpanded, onToggle }) {
  const [copied, setCopied] = useState(false)
  const sizeClass = styles[project.size] || styles.medium
  const categoryClass = styles[project.category] || ''

  const handleCopyCitation = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(project.citation)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      layout
      className={`${styles.card} ${sizeClass} ${isExpanded ? styles.expanded : ''}`}
      onClick={onToggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ layout: { duration: 0.3 } }}
    >
      <div className={styles.content}>
        <motion.div layout="position" className={styles.header}>
          <span className={`${styles.categoryBadge} ${categoryClass}`}>
            {project.category}
          </span>
          <span className={styles.year}>{project.year}</span>
        </motion.div>

        <motion.h3 layout="position" className={styles.title}>{project.title}</motion.h3>

        <motion.p layout="position" className={styles.venue}>{project.venue}</motion.p>

        {project.image && (
          <div className={styles.imageWrapper}>
            <img src={project.image} alt={project.title} className={styles.image} />
          </div>
        )}

        {isExpanded && (
          <motion.div
            className={styles.expandedContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {project.abstract && (
              <p className={styles.abstract}>{project.abstract}</p>
            )}

            <div className={styles.citationBlock}>
              <div className={styles.citationHeader}>
                <span className={styles.citationLabel}>Citation</span>
                <button
                  className={styles.copyButton}
                  onClick={handleCopyCitation}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className={styles.citation}>{project.citation}</p>
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
              >
                View Publication →
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
