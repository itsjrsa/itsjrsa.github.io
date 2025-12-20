import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProgrammingPage from './pages/ProgrammingPage'
import PublicationsPage from './pages/PublicationsPage'
import ProjectsPage from './pages/ProjectsPage'
import BusinessCardPage from './pages/BusinessCardPage'
import ThemeToggle from './components/common/ThemeToggle'
import AskMe from './components/common/AskMe'
import styles from './App.module.css'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/businesscard" element={<BusinessCardPage />} />
        </Routes>
      </AnimatePresence>
      <div className={styles.bottomControls}>
        <AskMe />
        <ThemeToggle />
      </div>
    </>
  )
}

export default App
