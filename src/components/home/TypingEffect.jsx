import { useTypewriter } from '../../hooks/useTypewriter'
import styles from './TypingEffect.module.css'

export default function TypingEffect({ text, speed = 80, delay = 800 }) {
  const { displayText, isComplete, showCursor } = useTypewriter(text, speed, delay)

  return (
    <span className={styles.typing}>
      {displayText}
      <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
    </span>
  )
}
