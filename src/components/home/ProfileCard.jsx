import { motion } from 'framer-motion'
import SocialIcons from '../common/SocialIcons'
import TypingEffect from './TypingEffect'
import styles from './ProfileCard.module.css'

export default function ProfileCard() {
  return (
    <motion.div
      className={styles.profile}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src="/images/portrait-jrsa.png"
        alt="Ricardo Andrade"
        className={styles.photo}
      />
      <div className={styles.info}>
        <h1>Ricardo Andrade</h1>
        <p>
          <TypingEffect text="R&D Engineer • AI explorer" speed={60} delay={400} />
        </p>
        <SocialIcons />
      </div>
    </motion.div>
  )
}
