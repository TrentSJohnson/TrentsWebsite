import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import layoutStyles from "./layout.module.css"


export default props => { return (
  <div class="highlight" key={props.id}>
    <Link 
      to={props.slug}
      css={css`
        text-decoration: none;
        
      `}
    >
      <h3
        className={layoutStyles.green}
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
          
        `}
      >
        <span 
          css={css`
          text-decoration: underline;
        `}>
          {props.title}{" "}
        </span>
        <span>
          — {props.span}
            
        </span>
      </h3>
      <p className={layoutStyles.green}>
        {props.excerpt}
      </p>
    </Link>
  </div>
)}
