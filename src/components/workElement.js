import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default props => { return (
  <div key={props.id}>
    <Link class="green"
      to={props.slug}
      css={css`
        text-decoration: none;
      `}
    >
      <h3 class="green"
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        <span class="green" 
          css={css`
          text-decoration: underline;
        `}>
          {props.title}{" "}
        </span>
        <span class="green">
          — {props.span}
        </span>
      </h3>
      <p class="green">
        {props.excerpt}
      </p>
    </Link>
  </div>
)}