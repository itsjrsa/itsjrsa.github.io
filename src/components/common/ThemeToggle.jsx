import { useState, useEffect } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      className={styles.toggle}
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      data-hint={isDark ? 'lights on?' : 'lights off?'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}
