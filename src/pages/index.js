import * as React from "react"

import SSRProvider from "react-bootstrap/SSRProvider"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <SSRProvider>
      <Head title="Home" />
      <Layout>
        <Hero />
      </Layout>
    </SSRProvider>
  )
}

export default IndexPage
