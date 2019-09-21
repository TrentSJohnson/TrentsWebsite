import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
export default props => {	return (
  <div class="highlight" key={props.id}>
    <Link 
      to={props.slug}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};

        `}
      >
        <span class="highlight"
          css={css`
          text-decoration: underline;
        `}>
          {props.title}{" "}
        </span>
        <span class="highlight"
          css={css`
            color: #bbb;
          `}
        >
          — {props.span}
          {props.date}
            
        </span>
      </h3>
      <p class="highlight"
          css={css`
            color: black
          `}>
        {props.excerpt}
      </p>
    </Link>
  </div>
)}
