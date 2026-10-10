import styles from './Timeline.module.css'

export default function Timeline({ items }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <li key={item.id} className={styles.entry}>
          <div className={styles.identity}>
            <p className={styles.date}>{item.date}</p>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.org}>{item.organization}</p>
          </div>
          <div className={styles.details}>
            {item.focus && <p className={styles.focus}>{item.focus}</p>}
            {item.description && <p className={styles.description}>{item.description}</p>}
            {item.link && (
              <a className={styles.link} href={item.link.url} target="_blank" rel="noopener noreferrer">
                {item.link.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
