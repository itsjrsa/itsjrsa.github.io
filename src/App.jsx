import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProgrammingPage from './pages/ProgrammingPage'
import ResearchPage from './pages/ResearchPage'
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
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<Navigate to="/research" replace />} />
          <Route path="/projects" element={<Navigate to="/research" replace />} />
          <Route path="/businesscard" element={<BusinessCardPage />} />
        </Routes>
      </AnimatePresence>
      <div className={`${styles.bottomControls} ${location.pathname !== '/' ? styles.compact : ''}`}>
        <AskMe />
        <ThemeToggle />
      </div>
    </>
  )
}

export default App
