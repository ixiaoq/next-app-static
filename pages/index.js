import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default async function Home() {
  // https://api.nuxtjs.dev/mountains
  // https://api.nuxtjs.dev/mountains/${params.slug}

  const res = await fetch('https://api.nuxtjs.dev/mountains')

  return (
    <div className={styles.section}>
      home page
    </div>
  )
}

export async function getStaticProps () {

  return {

  }
}

Home.getLayout = function getLayout (page) {
  return (
    <Layout>
      { page }
    </Layout>
  )
}
