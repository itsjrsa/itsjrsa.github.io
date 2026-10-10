import { useTypewriter } from '../../hooks/useTypewriter'
import styles from './TypingEffect.module.css'

export default function TypingEffect({ text, speed = 80, delay = 800 }) {
  const { displayText, isComplete, showCursor } = useTypewriter(text, speed, delay)

  return (
    <span className={styles.typing}>
      <span className="sr-only">{text}</span>
      <span className={styles.measure} aria-hidden="true">{text}</span>
      <span className={styles.animated} aria-hidden="true">
        {displayText}
        <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
      </span>
    </span>
  )
}
