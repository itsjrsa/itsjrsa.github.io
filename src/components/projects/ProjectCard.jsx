import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, isExpanded, onToggle }) {
  const sizeClass = styles[project.size] || styles.medium

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
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>
          {isExpanded ? project.abstract : project.shortDesc}
        </p>

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
                View Project →
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
