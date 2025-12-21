import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './NavLinks.module.css'

const links = [
  { to: '/experience', label: 'Experience' },
  { to: '/programming', label: 'Programming' },
  { to: '/research', label: 'Research' }
]

export default function NavLinks() {
  return (
    <motion.nav
      className={styles.options}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {links.map((link) => (
        <p key={link.label} className={styles.navLink}>
          <Link to={link.to}>{link.label}</Link>
        </p>
      ))}
    </motion.nav>
  )
}
