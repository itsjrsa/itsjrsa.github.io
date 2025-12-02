import { motion } from 'framer-motion'
import styles from './BusinessCardPage.module.css'

export default function BusinessCardPage() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.card}>
        <img
          src="/images/portrait-jrsa.png"
          alt="Portrait of Ricardo Andrade"
          className={styles.photo}
        />
        <div className={styles.content}>
          <h2 className={styles.company}>INESC TEC</h2>
          <h1 className={styles.name}>José Ricardo Andrade</h1>
          <p className={styles.email}>jose.r.andrade@inesctec.pt</p>
        </div>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/itsjrsa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://github.com/itsjrsa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://orcid.org/0000-0001-8170-8235" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
            <i className="fab fa-orcid" />
          </a>
          <a href="https://www.itsjrsa.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <i className="fas fa-globe" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
