import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 80, delay = 500) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    let timeoutId

    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          setIsComplete(true)
          clearInterval(timer)
        }
      }, speed)

      return () => clearInterval(timer)
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeoutId)
    }
  }, [text, speed, delay])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return { displayText, isComplete, showCursor }
}
