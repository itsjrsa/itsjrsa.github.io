import { useState, useEffect, useRef } from 'react'
import { motion, LayoutGroup, useReducedMotion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import ProjectCard from '../components/projects/ProjectCard'
import { researchData } from '../data/research'
import styles from './ResearchPage.module.css'

export default function ResearchPage() {
  const [expandedId, setExpandedId] = useState(null)
  const containerRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpandedId(null)
      }
    }
    if (expandedId !== null) document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [expandedId])

  return (
    <PageTransition className={styles.container}>
      <main id="main-content" tabIndex={-1} className={styles.content}>
        <ReturnButton />
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Research</p>
          <h1>Research & publications.</h1>
          <p className={styles.description}>
            Work on energy forecasting, machine learning, and power systems.
            Journal articles and conference papers, with abstracts and citations.
          </p>
        </header>

        <section aria-labelledby="publications-heading">
          <div className={styles.sectionHeader}>
            <h2 id="publications-heading">Selected publications</h2>
            <div className={styles.publicationLinks}>
              <span className={styles.count}>{researchData.length} publications</span>
              <a
                className={styles.scholarLink}
                href="https://scholar.google.com/citations?user=Q1Kye1AAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <LayoutGroup>
            <motion.div className={styles.grid} ref={containerRef} layout={!reduceMotion}>
              {researchData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedId === project.id}
                  onToggle={() => setExpandedId(current => current === project.id ? null : project.id)}
                  onClose={() => setExpandedId(null)}
                />
              ))}
            </motion.div>
          </LayoutGroup>
        </section>
      </main>
    </PageTransition>
  )
}
