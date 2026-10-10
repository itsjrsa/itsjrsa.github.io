import { useState, useEffect } from 'react'
import styles from './ThemeToggle.module.css'

function applyTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
    meta.content = dark ? '#1e1e1e' : '#ffffff'
  })
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const sync = () => {
      let saved
      try { saved = localStorage.getItem('theme') } catch {}
      const dark = saved === 'dark' || saved !== 'light' && media.matches
      applyTheme(dark)
      setIsDark(dark)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    applyTheme(next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
    setIsDark(next)
  }

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      data-hint={isDark ? 'lights on?' : 'lights off?'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}
