import styles from './SocialIcons.module.css'

const socials = [
  { href: 'https://github.com/itsjrsa', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://linkedin.com/in/itsjrsa', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://orcid.org/0000-0001-8170-8235', icon: 'fab fa-orcid', label: 'ORCID' },
  { href: 'mailto:jrsa2012@gmail.com', icon: 'fa fa-envelope-square', label: 'Email' }
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
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  )
}
