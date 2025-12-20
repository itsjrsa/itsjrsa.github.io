import { useState, useEffect, useRef } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import ProjectCard from '../components/projects/ProjectCard'
import { projectsData } from '../data/projects'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState(null)
  const containerRef = useRef(null)

  // Close expanded card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpandedId(null)
      }
    }

    if (expandedId !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [expandedId])

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <PageTransition className={styles.container}>
      <div className={styles.content}>
        <ReturnButton />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <i className="fas fa-flask" style={{ marginRight: '10px' }}></i>
          Projects
        </motion.h1>

        <LayoutGroup>
          <motion.div
            className={styles.grid}
            ref={containerRef}
            layout
          >
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </PageTransition>
  )
}
