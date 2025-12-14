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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function TechStack() {
  return (
    <motion.div
      className={styles.bentoGrid}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techStackData.map((category) => (
        <motion.div
          key={category.id}
          className={`${styles.bentoCard} ${sizeClassMap[category.gridSize] || styles.cardSmall}`}
          variants={cardVariants}
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
        </motion.div>
      ))}
    </motion.div>
  )
}
