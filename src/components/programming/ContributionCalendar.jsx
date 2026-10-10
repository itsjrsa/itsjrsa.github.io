import { cloneElement, useCallback, useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import styles from './ContributionCalendar.module.css'

const theme = {
  light: ['#eeeeee', '#c6c6c6', '#939393', '#606060', '#252525'],
  dark: ['#303030', '#555555', '#858585', '#b5b5b5', '#e0e0e0']
}

const getColorScheme = () =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

export default function ContributionCalendar() {
  const [colorScheme, setColorScheme] = useState(getColorScheme)

  useEffect(() => {
    const observer = new MutationObserver(() => setColorScheme(getColorScheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
    return () => observer.disconnect()
  }, [])

  const prepareCalendar = useCallback((node) => {
    const scroller = node?.querySelector('.react-activity-calendar__scroll-container')
    if (scroller) {
      scroller.tabIndex = 0
      scroller.setAttribute('role', 'region')
      scroller.setAttribute('aria-label', 'Daily GitHub contributions. Scroll to explore the past year.')
      // Start with recent activity visible on narrow screens.
      scroller.scrollLeft = scroller.scrollWidth
    }
  }, [])

  return (
    <section className={styles.section} aria-labelledby="activity-heading">
      <div className={styles.header}>
        <div>
          <h2 id="activity-heading">On GitHub</h2>
          <p>A year of contributions, one day at a time.</p>
        </div>
        <a href="https://github.com/itsjrsa" target="_blank" rel="noopener noreferrer">
          @itsjrsa <span aria-hidden="true">↗</span>
        </a>
      </div>
      <GitHubCalendar
        ref={prepareCalendar}
        username="itsjrsa"
        year="last"
        theme={theme}
        colorScheme={colorScheme}
        blockSize={13}
        blockMargin={4}
        blockRadius={2}
        fontSize={11}
        style={{ width: '100%', color: 'var(--color-text-muted)' }}
        errorMessage="Contribution activity is unavailable right now. You can still view it on GitHub."
        renderBlock={(block, activity) => {
          const label = `${activity.count} ${activity.count === 1 ? 'contribution' : 'contributions'} on ${activity.date}`
          return cloneElement(block, { 'aria-label': label }, <title>{label}</title>)
        }}
      />
      <p className={styles.scrollHint}>Scroll to explore the full year <span aria-hidden="true">↔</span></p>
    </section>
  )
}
