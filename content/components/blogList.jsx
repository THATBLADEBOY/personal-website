/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";

const BlogList = (props) => {
  const { nodes } = props
  return (
    <>
      {nodes.map((node) => {
        if (node.frontmatter.title === "") return null
        return (
          <>
            <a
              sx={{
                color: "text",
                textDecoration: "none",
                ":hover": { textDecoration: "underline", color: "primary" },
              }}
              href={node.frontmatter.slug}
            >
              <h1>{node.frontmatter?.title}</h1>
            </a>
            <div>{node.excerpt}</div>
          </>
        )
      })}
    </>
  )
}

export default BlogList
