import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMM, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            title
            contentful_id
            __typename
            gatsbyImageData(width: 1600)
            file {
              url
            }
          }
        }
      }
    }
  }
`

const Post = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        if (!node.data.target) {
          return null
        } else {
          const url = node.data.target.file.url
          const alt = node.data.target.title

          return (
            <p className="post-img container">
              <img src={url} alt={alt} />
            </p>
          )
        }
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className="py-5">
        <div className="container">
          <h2 className="section-title">
            {props.data.contentfulBlogPost.title}
          </h2>
          <div className="bottom-line"></div>
          <p className="lead text-center">
            {props.data.contentfulBlogPost.publishedDate}
          </p>
          <div className="post-content">
            {props.data.contentfulBlogPost.body &&
              renderRichText(props.data.contentfulBlogPost.body, options)}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
