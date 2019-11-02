import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Typing from "react-typing-animation"
import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        color: green;
      `}
    >
      <Link to={`/`} 
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1)};
            display: inline-block;
            font-style: normal;
            font-size: 300%;
            color: grey;
          `}
        >
          <Typing>
          {data.site.siteMetadata.title}
          </Typing>
        </h3>
      </Link>
      <Link
        to={`/about/`} 
        css={css`
          float: right;
          color: green;
        `}
        
      >
        About
      </Link>
      {children}
    </div>
  )
}