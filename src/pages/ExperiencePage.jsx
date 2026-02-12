import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import SkillsSummary from '../components/experience/SkillsSummary'
import Timeline from '../components/experience/Timeline'
import styles from './ExperiencePage.module.css'

export default function ExperiencePage() {
  return (
    <PageTransition className={styles.container}>
      <div className={styles.content}>
        <ReturnButton />
        
        <h1>
          <i className="fas fa-user-tie" style={{ marginRight: '10px' }}></i>
          Experience
        </h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Skills & Expertise
        </motion.h2>

        <SkillsSummary />

        <motion.div
          className={styles.divider}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          Work & Education
        </motion.h2>

        <Timeline />
      </div>
    </PageTransition>
  )
}
