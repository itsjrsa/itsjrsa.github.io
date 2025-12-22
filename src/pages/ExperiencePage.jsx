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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <i className="fas fa-user-tie" style={{ marginRight: '10px' }}></i>
          Experience
        </motion.h1>
        <h2>Skills & Expertise</h2>
        <SkillsSummary />

        <div className={styles.divider}></div>

        <h2>Work & Education</h2>
        <Timeline />
      </div>
    </PageTransition>
  )
}
