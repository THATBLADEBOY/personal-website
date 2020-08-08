/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const BlogSectionHead = () => {
  return (
    <div sx={{ display: "flex", justifyContent: "center"  }}>
      <p>
        checkout my first blog post{" "}
        <span role="img" aria-label="smile emoji">
          😊
        </span>
      </p>
    </div>
  )
}

export default BlogSectionHead
