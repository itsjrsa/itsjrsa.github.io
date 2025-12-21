import { motion } from 'framer-motion'
import styles from './PublicationList.module.css'

export default function PublicationList({ title, publications }) {
  return (
    <motion.div
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{title}</h3>
      <ol className={styles.list}>
        {publications.map((pub, index) => (
          <li key={index} className={styles.item}>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Link
              </a>
            )}
            <span>{pub.publication}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}
