import * as React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Error from "../assets/images/404.jpeg"

export default function PageNotFound() {
  return (
    <Layout>
      <Head title="404" />
      <div className="container my-5">
        <h2 className="section-title">
          Oopsy daisy, something went wrong here.
        </h2>
        <div className="bottom-line"></div>
        <div className="w-50 m-auto">
          <img src={Error} alt="Error" />
        </div>
      </div>
    </Layout>
  )
}
