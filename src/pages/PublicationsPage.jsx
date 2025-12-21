import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import PublicationList from '../components/publications/PublicationList'
import { journalsData, conferencesData } from '../data/publications'
import styles from './PublicationsPage.module.css'

export default function PublicationsPage() {
  return (
    <PageTransition className={styles.container}>
      <div className={styles.content}>
        <ReturnButton />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <i className="fas fa-book" style={{ marginRight: '10px' }}></i>
          Publications
        </motion.h1>

        <PublicationList
          title="Journals"
          publications={journalsData}
        />

        <PublicationList
          title="International Conferences"
          publications={conferencesData}
        />
      </div>
    </PageTransition>
  )
}
