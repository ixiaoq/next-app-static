import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu () {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
