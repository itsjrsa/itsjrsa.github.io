import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './ReturnButton.module.css'

export default function ReturnButton() {
  return (
    <motion.div
      className={styles.back}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" aria-label="Back to home">
        <span className={styles.arrow} aria-hidden="true">←</span> Back
      </Link>
    </motion.div>
  )
}
