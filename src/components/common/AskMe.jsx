import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import styles from './AskMe.module.css'

const API_URL = 'https://askme-api.itsjrsa.workers.dev'
const PLACEHOLDER = 'Ask a question...'
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export default function AskMe() {
  const [isWriting, setIsWriting] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const measureRef = useRef(null)
  const triggerRef = useRef(null)
  const containerRef = useRef(null)
  const requestRef = useRef(null)

  useBrowserLayoutEffect(() => {
    if (inputRef.current && measureRef.current) {
      inputRef.current.style.width = `${measureRef.current.getBoundingClientRect().width + 3}px`
    }
  }, [question, isWriting, answer])

  useEffect(() => {
    if (isWriting && !answer && !loading) inputRef.current?.focus()
  }, [isWriting, answer, loading])

  useEffect(() => () => requestRef.current?.abort(), [])

  useEffect(() => {
    if (!isWriting) return

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isWriting])

  const handleClose = () => {
    requestRef.current?.abort()
    requestRef.current = null
    setLoading(false)
    setIsWriting(false)
    setQuestion('')
    setAnswer('')
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!question.trim() || loading) return

    const request = new AbortController()
    requestRef.current = request
    setLoading(true)
    setError('')
    setAnswer('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim() }),
        signal: request.signal,
      })
      const data = await response.json()
      if (!response.ok) throw new Error('Failed to get response')
      if (!request.signal.aborted) setAnswer(data.answer)
    } catch {
      if (!request.signal.aborted) {
        setError('Unable to answer right now. Please try again later.')
      }
    } finally {
      if (requestRef.current === request) {
        requestRef.current = null
        setLoading(false)
      }
    }
  }

  const handleReset = () => {
    setQuestion('')
    setAnswer('')
    setError('')
  }

  return (
    <div
      className={styles.control}
      ref={containerRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isWriting) {
          event.stopPropagation()
          handleClose()
          triggerRef.current?.focus()
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => isWriting ? handleClose() : setIsWriting(true)}
        aria-label="Ask me anything"
        aria-expanded={isWriting}
        aria-controls={isWriting ? 'ask-me-input' : undefined}
        data-hint="ask me anything"
      >
        <span aria-hidden="true">?</span>
      </button>

      {isWriting && (
        <div id="ask-me-input" className={styles.container} role="region" aria-label="AI assistant">
          {!answer && (
            <form onSubmit={handleSubmit} className={styles.form} aria-busy={loading}>
              <div className={styles.entry}>
                <span className={styles.measurement} aria-hidden="true">
                  <span ref={measureRef} className={styles.measure}>{question || PLACEHOLDER}</span>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder={PLACEHOLDER}
                  className={styles.input}
                  disabled={loading}
                  maxLength={300}
                  aria-label="Ask a question"
                />
                {question.trim() && !loading && (
                  <button type="submit" className={styles.submitBtn} aria-label="Submit question">
                    <span aria-hidden="true">↵</span>
                  </button>
                )}
              </div>
            </form>
          )}
          {loading && <span className={styles.status} role="status">Thinking…</span>}
          {error && <p className={styles.error} role="alert">{error}</p>}
          {answer && (
            <div className={styles.answer}>
              <p role="status">{answer}</p>
              <span className={styles.disclaimer}>powered by AI</span>
              <button type="button" className={styles.resetBtn} onClick={handleReset}>ask another</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
