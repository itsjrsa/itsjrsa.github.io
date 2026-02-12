import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className={styles.link}>
          <span aria-hidden="true">←</span> Back to Home
        </Link>
      </div>
    </motion.div>
  )
}
