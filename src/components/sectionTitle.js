import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import layoutStyles from "./layout.module.css"

export default props => {
  return(
      <h 
        className={layoutStyles.green}
        css={css`
          font-size: 200%;
          display: inline-block;
          margin-top: ${rhythm(1)};
          margin-bottom: ${rhythm(-1)};
          font-weight: bold;
        `}
      >
        { props.headerText }
      </h>
  )
}