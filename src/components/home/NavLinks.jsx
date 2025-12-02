import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './NavLinks.module.css'

const links = [
  { to: '/experience', label: 'Experience' },
  { to: '/programming', label: 'Programming' },
  { to: '/publications', label: 'Publications' },
  { href: 'https://raw.githubusercontent.com/itsjrsa/cv/master/cv.pdf', label: 'CV', external: true }
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
          {link.external ? (
            <a href={link.href} download>
              {link.label}
            </a>
          ) : (
            <Link to={link.to}>{link.label}</Link>
          )}
        </p>
      ))}
    </motion.nav>
  )
}
