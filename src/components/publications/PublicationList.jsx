import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './PublicationList.module.css'

export default function PublicationList({ title, jsonPath }) {
  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        setPublications(data.items || [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching publications:', err)
        setError('Failed to load publications')
        setLoading(false)
      })
  }, [jsonPath])

  if (loading) {
    return (
      <div className={styles.section}>
        <h3>{title}</h3>
        <div className={styles.loading}>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.section}>
        <h3>{title}</h3>
        <div className={styles.error}>{error}</div>
      </div>
    )
  }

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
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              Link
            </a>
            <span>{pub.publication}</span>
            {pub.journal && <i className={styles.journal}>{pub.journal}</i>}
          </li>
        ))}
      </ol>
    </motion.div>
  )
}
