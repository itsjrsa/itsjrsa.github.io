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
      <Link to="/">
        <span className={styles.arrow}>←</span> Back
      </Link>
    </motion.div>
  )
}
