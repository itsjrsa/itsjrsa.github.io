import { motion } from 'framer-motion'
import { skillsData } from '../../data/skills'
import styles from './SkillsSummary.module.css'

export default function SkillsSummary() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {skillsData.map((group, index) => (
        <div key={index} className={styles.group}>
          <h3 className={styles.category}>{group.category}</h3>
          <div className={styles.skills}>
            {group.skills.map((skill, i) => (
              <span key={i} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}
