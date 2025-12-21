import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './ContributionCard.module.css'

export default function ContributionCard({ contribution }) {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsDark(theme === 'dark')
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <a
        href={contribution.orgLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.orgHeader}
      >
        {contribution.orgLogo && (
          <img
            src={contribution.orgLogo}
            alt={contribution.organization}
            className={styles.orgLogo}
          />
        )}
        <h3 className={styles.orgName}>{contribution.organization}</h3>
      </a>

      <div className={styles.projects}>
        {contribution.projects.map((project, index) => {
          const logo = isDark ? project.logo_dark : project.logo_white
          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.project}
            >
              {logo ? (
                <img
                  src={logo}
                  alt={project.name}
                  className={styles.projectLogo}
                />
              ) : (
                <span className={styles.fallbackIcon}>
                  <i className="fas fa-code-branch"></i>
                </span>
              )}
              <div className={styles.projectInfo}>
                <span className={styles.projectName}>
                  {project.name}
                  <span className={styles.linkArrow}>→</span>
                </span>
                <span className={styles.projectDesc}>{project.description}</span>
              </div>
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}
