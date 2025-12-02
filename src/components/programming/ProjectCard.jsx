import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      whileHover={{ y: -4, boxShadow: '4px 4px 12px #666' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.a>
  )
}
