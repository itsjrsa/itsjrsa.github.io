import { useState, useRef, useEffect } from 'react'
import styles from './AskMe.module.css'

const API_URL = 'https://askme-api.itsjrsa.workers.dev'

export default function AskMe() {
  const [isWriting, setIsWriting] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isWriting && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isWriting])

  useEffect(() => {
    if (!isWriting) return

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isWriting])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim() || loading) return

    setLoading(true)
    setError('')
    setAnswer('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      setAnswer(data.answer)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsWriting(false)
    setQuestion('')
    setAnswer('')
    setError('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  if (!isWriting) {
    return (
      <button
        className={styles.trigger}
        onClick={() => setIsWriting(true)}
        aria-label="Ask me something"
      >
        ask me something
      </button>
    )
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type your question..."
          className={styles.input}
          disabled={loading}
        />
        {question.trim() && (
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? '...' : '↵'}
          </button>
        )}
      </form>

      {error && <div className={styles.error}>{error}</div>}

      {answer && (
        <div className={styles.answer}>
          <p>{answer}</p>
          <button className={styles.resetBtn} onClick={handleClose}>
            ask another
          </button>
        </div>
      )}
    </div>
  )
}
