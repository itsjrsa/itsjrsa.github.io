import styles from './SocialIcons.module.css'

const socials = [
  { href: 'https://github.com/itsjrsa', label: 'GitHub', icon: 'fab fa-github' },
  { href: 'https://linkedin.com/in/itsjrsa', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
  { href: 'https://orcid.org/0000-0001-8170-8235', label: 'ORCID', icon: 'fab fa-orcid' },
  { href: 'mailto:jrsa2012@gmail.com', label: 'Email', icon: 'far fa-envelope' },
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
          ) : (
            <i className={social.icon} aria-hidden="true" />
          )}
        </a>
      ))}
    </div>
  )
}
