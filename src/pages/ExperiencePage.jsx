import { Link } from 'react-router-dom'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import SkillsSummary from '../components/experience/SkillsSummary'
import Timeline from '../components/experience/Timeline'
import { experienceData } from '../data/experience'
import styles from './ExperiencePage.module.css'

export default function ExperiencePage() {
  return (
    <PageTransition className={styles.container}>
      <main id="main-content" tabIndex={-1} className={styles.content}>
        <ReturnButton />

        <header className={styles.intro}>
          <p className={styles.eyebrow}>Experience</p>
          <h1>Research & engineering.</h1>
          <p className={styles.description}>
            10+ years working across software development, energy systems, and
            applied research. Turning forecasting methods and data into software
            for industry at INESC TEC.
          </p>
        </header>

        <section className={styles.section} aria-labelledby="work-heading">
          <div className={styles.sectionHeader}>
            <h2 id="work-heading">Work</h2>
            <span className={styles.period}>2016 — Present</span>
          </div>
          <Timeline items={experienceData.filter(item => item.type === 'work')} />
        </section>

        <section className={styles.section} aria-labelledby="expertise-heading">
          <div className={styles.sectionHeader}>
            <h2 id="expertise-heading">Areas of expertise</h2>
          </div>
          <SkillsSummary />
        </section>

        <section aria-labelledby="education-heading">
          <div className={styles.sectionHeader}>
            <h2 id="education-heading">Education</h2>
          </div>
          <Timeline items={experienceData.filter(item => item.type === 'education')} />
        </section>

        <nav className={styles.related} aria-label="Explore my work">
          <p>Explore my work</p>
          <div>
            <Link to="/programming">Software projects <span aria-hidden="true">→</span></Link>
            <Link to="/research">Research & publications <span aria-hidden="true">→</span></Link>
          </div>
        </nav>
      </main>
    </PageTransition>
  )
}
