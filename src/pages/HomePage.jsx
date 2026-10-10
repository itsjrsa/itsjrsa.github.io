import PageTransition from '../components/Layout/PageTransition'
import ProfileCard from '../components/home/ProfileCard'
import NavLinks from '../components/home/NavLinks'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <PageTransition className={styles.container}>
      <main id="main-content" tabIndex={-1} className={styles.content}>
        <ProfileCard />
        <NavLinks />
      </main>
    </PageTransition>
  )
}
