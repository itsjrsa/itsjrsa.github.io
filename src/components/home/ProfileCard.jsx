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
      <div className={styles.portrait}>
        <img
          src="/images/portrait-jrsa-light.webp"
          alt="Ricardo Andrade"
          className={`${styles.photo} ${styles.lightPhoto}`}
          width="150"
          height="150"
        />
        <img
          src="/images/portrait-jrsa-dark.webp"
          alt="Ricardo Andrade"
          className={`${styles.photo} ${styles.darkPhoto}`}
          width="150"
          height="150"
        />
      </div>
      <div className={styles.info}>
        <h1>Ricardo Andrade</h1>
        <p>
          <TypingEffect text="R&D engineer • AI explorer" speed={60} delay={400} />
        </p>
        <SocialIcons />
      </div>
    </motion.div>
  )
}
