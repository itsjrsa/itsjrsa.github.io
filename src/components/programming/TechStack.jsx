import { motion } from 'framer-motion'
import { techStackData } from '../../data/techStack'
import styles from './TechStack.module.css'

export default function TechStack() {
  return (
    <motion.div
      className={styles.grid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {techStackData.map((category) => (
        <div key={category.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <i
              className={category.icon}
              style={{ color: category.color }}
            />
            <h3>{category.category}</h3>
            <span className={styles.hint}>
              <i className="fas fa-chevron-down" />
            </span>
          </div>
          <div className={styles.skills}>
            {category.skills.map((skill) => (
              <span key={skill.name} className={styles.tag}>
                {skill.name}
                {skill.level && (
                  <span className={styles.level}>{skill.level}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}
