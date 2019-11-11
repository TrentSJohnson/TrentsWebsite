import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
export default props => { return (
  <div class="highlight" key={props.id}>
    <Link 
      to={props.slug}
      css={css`
        text-decoration: none;
        color: green;
      `}
    >
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
          color: green;
        `}
      >
        <span 
          css={css`
          text-decoration: underline;
        `}>
          {props.title}{" "}
        </span>
        <span 
          css={css`
            color: green;
          `}
        >
          — {props.span}
            
        </span>
      </h3>
      <p 
          css={css`
            color: green;
          `}>
        {props.excerpt}
      </p>
    </Link>
  </div>
)}
