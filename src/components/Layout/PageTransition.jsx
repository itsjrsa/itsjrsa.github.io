import { motion, useReducedMotion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function PageTransition({ children, className }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial={reduceMotion ? false : 'initial'}
      animate="animate"
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
