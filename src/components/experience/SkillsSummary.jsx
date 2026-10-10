import { skillsData } from '../../data/skills'
import styles from './SkillsSummary.module.css'

export default function SkillsSummary() {
  return (
    <div>
      {skillsData.map((group) => (
        <div key={group.category} className={styles.group}>
          <h3 className={styles.category}>{group.category}</h3>
          <ul className={styles.skills}>
            {group.skills.map((skill) => (
              <li key={skill} className={styles.skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
