import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <motion.div
      className={styles.container}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <main id="main-content" tabIndex={-1} className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className={styles.link}>
          <span aria-hidden="true">←</span> Back to Home
        </Link>
      </main>
    </motion.div>
  )
}
