import { motion } from 'framer-motion'
import PageTransition from '../components/Layout/PageTransition'
import ReturnButton from '../components/common/ReturnButton'
import TechStack from '../components/programming/TechStack'
import ProjectCard from '../components/programming/ProjectCard'
import { projectsData } from '../data/techStack'
import styles from './ProgrammingPage.module.css'

export default function ProgrammingPage() {
  return (
    <PageTransition className={styles.container}>
      <div className={styles.content}>
        <ReturnButton />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <i className="fas fa-laptop" style={{ marginRight: '10px' }}></i>
          Tech Stack
        </motion.h1>

        <TechStack />

        <div className={styles.divider}></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <i className="fas fa-code-branch" style={{ marginRight: '10px' }}></i>
          Open-source Contributions
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}
