import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import ContactForm from "../components/form"
import SSRProvider from "react-bootstrap/SSRProvider"

const Contact = () => {
  return (
    <SSRProvider>
      <Layout>
        <Head title="Contact" />
        <ContactForm />
      </Layout>
    </SSRProvider>
  )
}

export default Contact
