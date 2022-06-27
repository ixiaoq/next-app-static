import Layout from '../components/layout'

export default function About () {
    return (
        <>
            about page
        </>
    )
}

About.getLayout = function getLayout (page) {
  return (
    <Layout>
      { page }
    </Layout>
  )
}
