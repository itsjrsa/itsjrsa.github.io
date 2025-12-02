import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import ProgrammingPage from './pages/ProgrammingPage'
import PublicationsPage from './pages/PublicationsPage'
import ThemeToggle from './components/common/ThemeToggle'

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
        </Routes>
      </AnimatePresence>
      <ThemeToggle />
    </>
  )
}

export default App
