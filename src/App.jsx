import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProgrammingPage from './pages/ProgrammingPage'
import ResearchPage from './pages/ResearchPage'
import BusinessCardPage from './pages/BusinessCardPage'
import NotFoundPage from './pages/NotFoundPage'
import ThemeToggle from './components/common/ThemeToggle'
import AskMe from './components/common/AskMe'
import styles from './App.module.css'
import PageMetadata from './components/Layout/PageMetadata'

function App() {
  const location = useLocation()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <PageMetadata />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<Navigate to="/research" replace />} />
          <Route path="/projects" element={<Navigate to="/research" replace />} />
          <Route path="/businesscard" element={<BusinessCardPage />} />
          <Route path="*" element={<NotFoundPage />} />
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
