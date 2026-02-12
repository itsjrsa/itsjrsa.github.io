import { motion } from 'framer-motion'
import { techStackData } from '../../data/techStack'
import styles from './TechStack.module.css'

const sizeClassMap = {
  large: styles.cardLarge,
  mediumTall: styles.cardMediumTall,
  mediumWide: styles.cardMediumWide,
  small: styles.cardSmall,
  fullWidth: styles.cardFullWidth
}

export default function TechStack() {
  return (
    <motion.div
      className={styles.bentoGrid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {techStackData.map((category) => (
        <div
          key={category.id}
          className={`${styles.bentoCard} ${sizeClassMap[category.gridSize] || styles.cardSmall}`}
        >
          <div
            className={styles.accentBar}
            style={{ backgroundColor: category.color }}
          />

          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <i
                className={category.icon}
                style={{ color: category.color }}
              />
              <h3>{category.category}</h3>
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
        </div>
      ))}
    </motion.div>
  )
}
