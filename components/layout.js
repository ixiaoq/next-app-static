import Head from 'next/head'
import styles from './layout.module.css'

import Menu from './menu'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        { children }
      </main>
    </>
  )
}
