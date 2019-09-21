import React from "react"
import Layout from "../components/layout"
import ResumeElement from "../components/resumeElement"
import SectionTitle from "../components/sectionTitle"
export default ({ data }) => {
  return (
    <Layout>
      <div>
				<SectionTitle headerText="Past Experience"/>
				{data.workElements.edges.map(({ node }) => (
					<ResumeElement class="highlight"
						id={node.id}
						slug={node.fields.slug}
						date={node.frontmatter.date}
						excerpt={node.excerpt}
						title={node.frontmatter.title}
						span={node.frontmatter.span}
						>
					</ResumeElement>
				))}
				<SectionTitle headerText="Past Projects" class = "highlight"/>
				{data.projectElements.edges.map(({ node }) => (
					<ResumeElement 
						id={node.id}
						slug={node.fields.slug}
						date={node.frontmatter.date}
						excerpt={node.excerpt}
						title={node.frontmatter.title}
						span={node.frontmatter.span}
						>
					</ResumeElement>
				))}
				<SectionTitle headerText="Blog" class = "highlight"/>
				{data.blogElements.edges.map(({ node }) => (
					<ResumeElement 
						id={node.id}
						slug={node.fields.slug}
						date={node.frontmatter.date}
						excerpt={node.excerpt}
						title={node.frontmatter.title}
						span={node.frontmatter.span}
						>
					</ResumeElement>
				))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
		workElements: allMarkdownRemark(filter: {frontmatter: {categories: {in: "work"}}}) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						date
						title
						span
					}
					id
				}
			}
		}
		projectElements: allMarkdownRemark(filter: {frontmatter: {categories: {in: "project"}}}) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						date
						title
						span
					}
					id
				}
			}
		}
		blogElements: allMarkdownRemark(filter: {frontmatter: {categories: {in: "blog"}}}) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					frontmatter {
						date
						title
						span
					}
					id
				}
			}
		}
	}
`