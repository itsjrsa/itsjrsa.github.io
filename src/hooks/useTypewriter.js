import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 80, delay = 500) {
  const [displayText, setDisplayText] = useState(text)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text)
      setIsComplete(true)
      setShowCursor(false)
      return
    }
    setDisplayText('')
    setIsComplete(false)
    setShowCursor(true)
    let index = 0
    let timer = null

    // Initial delay before typing starts
    const startTimeout = setTimeout(() => {
      timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          setIsComplete(true)
          clearInterval(timer)
          timer = null
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [text, speed, delay])

  // Blinking cursor effect - stops when typing is complete
  useEffect(() => {
    if (isComplete) {
      setShowCursor(false)
      return
    }

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [isComplete])

  return { displayText, isComplete, showCursor }
}
