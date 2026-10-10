import { faGithub, faLinkedinIn, faOrcid } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const icons = { github: faGithub, linkedin: faLinkedinIn, orcid: faOrcid, envelope: faEnvelope }

export default function Icon({ name }) {
  if (name === 'globe') return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></svg>
  const [width, height, , , path] = icons[name].icon
  return <svg viewBox={`0 0 ${width} ${height}`} width={`${width / height}em`} height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d={path} /></svg>
}
