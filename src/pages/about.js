import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { useStaticQuery, graphql, Link } from "gatsby"
import { SSRProvider } from "react-bootstrap"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "DD MMM, YYYY")
            slug
          }
        }
      }
    }
  `)

  return (
    <SSRProvider>
      <Layout>
        <Head title="About" />
        <div className="about-section py-5">
          <div className="container">
            <h2 className="section-title">About</h2>
            <div class="bottom-line"></div>
            <p className="lead text-center">
              Here are something about me and this website.
            </p>
            {data.allContentfulBlogPost.edges.map((edge, key) => {
              return (
                <div key={key} className="about-post">
                  <Link to={`/about/${edge.node.slug}`}>
                    <h3>{edge.node.title}</h3>
                    <p>{edge.node.publishedDate}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </SSRProvider>
  )
}

export default About
