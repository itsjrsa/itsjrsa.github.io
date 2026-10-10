import Icon from '../components/common/Icon'
import { motion } from 'framer-motion'
import styles from './BusinessCardPage.module.css'

export default function BusinessCardPage() {
  return (
    <motion.div
      className={styles.container}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main id="main-content" tabIndex={-1} className={styles.card}>
        <img
          src="/images/portrait-jrsa.webp"
          alt="Portrait of Ricardo Andrade"
          className={styles.photo}
          width="120"
          height="120"
          loading="lazy"
        />
        <div className={styles.content}>
          <p className={styles.company}>INESC TEC</p>
          <h1 className={styles.name}>José Ricardo Andrade</h1>
          <p className={styles.email}>jose.r.andrade@inesctec.pt</p>
        </div>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/itsjrsa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href="https://github.com/itsjrsa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon name="github" />
          </a>
          <a href="https://orcid.org/0000-0001-8170-8235" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
            <Icon name="orcid" />
          </a>
          <a href="https://www.itsjrsa.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <Icon name="globe" />
          </a>
        </div>
      </main>
    </motion.div>
  )
}
