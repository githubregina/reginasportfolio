import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import ScrollToTop from "./btn"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <div className="layout">
        <Header siteTitle={data.site.siteMetadata.title || `Title`} />
        <main>{children}</main>
      </div>
      <ScrollToTop />
      <Footer author={data.site.siteMetadata.author} />
    </>
  )
}

export default Layout
