import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { pages, aliases, notFound, normalizePath, canonicalUrl } from '../../data/seo'

export default function PageMetadata() {
  const { pathname } = useLocation()
  const previous = useRef(pathname)
  useEffect(() => {
    const path = normalizePath(pathname)
    const resolved = aliases[path] || path
    const page = pages[resolved] || notFound
    document.title = page.title
    const set = (selector, content) => document.querySelector(selector)?.setAttribute('content', content)
    set('meta[name="description"]', page.description)
    set('meta[property="og:title"]', page.title)
    set('meta[name="twitter:title"]', page.title)
    set('meta[property="og:description"]', page.description)
    set('meta[name="twitter:description"]', page.description)
    set('meta[property="og:url"]', canonicalUrl(resolved))
    set('meta[name="robots"]', pages[resolved] ? 'index,follow' : 'noindex,follow')
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl(resolved))
    if (previous.current !== pathname) {
      window.scrollTo(0, 0)
      previous.current = pathname
      const frame = requestAnimationFrame(() => {
        // Presence transitions can briefly retain the outgoing page.
        const mains = document.querySelectorAll('main')
        mains[mains.length - 1]?.focus({ preventScroll: true })
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [pathname])
  return null
}
