import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import ProjectCard from '../components/programming/ProjectCard'
import ContributionCalendar from '../components/programming/ContributionCalendar'
import { projectsData } from '../data/projects'
import styles from './ProgrammingPage.module.css'

export default function ProgrammingPage() {
  return (
    <PageTransition className={styles.container}>
      <main className={styles.content}>
        <ReturnButton />

        <header className={styles.intro}>
          <p className={styles.eyebrow}>Programming</p>
          <h1>Things I’ve built.</h1>
          <p className={styles.description}>
            Forecasting systems, tools for building with agents, and smaller
            experiments. Selected software from my work and independent projects.
          </p>
        </header>

        <ContributionCalendar />

        <section aria-labelledby="projects-heading">
          <div className={styles.sectionHeader}>
            <h2 id="projects-heading">Selected projects</h2>
            <span className={styles.projectCount}>
              {String(projectsData.length).padStart(2, '0')} projects
            </span>
          </div>
          <div>
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className={styles.approach} aria-labelledby="approach-heading">
          <h2 id="approach-heading">Software development</h2>
          <div>
            <p>
              10+ years of experience designing, developing, and maintaining
              software, from forecasting platforms and data services to
              web applications and developer tools.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
