import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import TechStack from '../components/programming/TechStack'
import ContributionCard from '../components/programming/ContributionCard'
import { contributionsData } from '../data/contributions'
import styles from './ProgrammingPage.module.css'

export default function ProgrammingPage() {
  const [colorScheme, setColorScheme] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme')
      setColorScheme(theme === 'dark' ? 'dark' : 'light')
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])
  return (
    <PageTransition className={styles.container}>
      <div className={styles.content}>
        <ReturnButton />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <i className="fas fa-laptop" style={{ marginRight: '10px' }}></i>
          Tech Stack
        </motion.h1>
        <motion.p
          className={styles.sectionDesc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Technologies and tools I work with regularly
        </motion.p>

        <TechStack />

        <div className={styles.divider}></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <i className="fas fa-code-branch" style={{ marginRight: '10px' }}></i>
          Open-source Contributions
        </motion.h1>
        <motion.p
          className={styles.sectionDesc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Projects I've contributed to on GitHub
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {contributionsData.map((contribution) => (
            <ContributionCard
              key={contribution.id}
              contribution={contribution}
            />
          ))}
        </motion.div>

        <motion.div
          className={styles.calendarWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <GitHubCalendar
            username="itsjrsa"
            colorScheme={colorScheme}
            fontSize={12}
          />
        </motion.div>
      </div>
    </PageTransition>
  )
}
