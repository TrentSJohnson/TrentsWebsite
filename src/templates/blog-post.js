import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={layoutStyles.green}>
        <h1 className={layoutStyles.green}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`