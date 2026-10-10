import Icon from './Icon'
import styles from './SocialIcons.module.css'

const socials = [
  { href: 'https://github.com/itsjrsa', label: 'GitHub', icon: 'github' },
  { href: 'https://linkedin.com/in/itsjrsa', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://x.com/itsjrsa', label: 'X', isX: true },
  { href: 'https://orcid.org/0000-0001-8170-8235', label: 'ORCID', icon: 'orcid' },
  { href: 'mailto:jrsa2012@gmail.com', label: 'Email', icon: 'envelope' },
  { href: 'https://raw.githubusercontent.com/itsjrsa/cv/master/cv.pdf', label: 'CV', isCV: true }
]

export default function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className={styles.socialIcon}
          target={social.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.isCV ? 'Curriculum vitae' : social.label}
          download={social.isCV ? true : undefined}
        >
          {social.isCV ? (
            <span className={styles.cvText} aria-hidden="true">CV</span>
          ) : social.isX ? (
            <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
            </svg>
          ) : (
            <Icon name={social.icon} />
          )}
        </a>
      ))}
    </div>
  )
}
