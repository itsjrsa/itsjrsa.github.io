import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  return (
    <article className={styles.project} aria-labelledby={`${project.id}-title`}>
      <div className={styles.identity}>
        <p className={styles.category}>
          <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          {project.category}
        </p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className={styles.role}>{project.role}</p>
      </div>
      <div className={styles.details}>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.links} aria-label={`${project.title} links`}>
          {project.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}<span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
