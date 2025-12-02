import { motion } from 'framer-motion'
import { experienceData } from '../../data/experience'
import styles from './Timeline.module.css'

export default function Timeline() {
  return (
    <motion.div
      className={styles.timeline}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {experienceData.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.date}>{item.date}</span>
            <span className={`${styles.badge} ${styles[item.type]}`}>
              {item.type === 'work' ? 'Work' : 'Education'}
            </span>
          </div>
          <h3 className={styles.role}>{item.role}</h3>
          <p className={styles.org}>{item.organization}</p>
          {item.description && (
            <p className={styles.description}>{item.description}</p>
          )}
        </div>
      ))}
    </motion.div>
  )
}
