import React from "react"
import Typewriter from "typewriter-effect"
import { Button } from "theme-ui"
import { Link } from "gatsby"

const BlogList = (props) => {
  return (
    <>
      {props.nodes.map((node) => {
        if (node.frontmatter.title === "") return null
        return (
          <>
            <Link to={node.frontmatter.slug}>
              <h1>{node.frontmatter?.title}</h1>
            </Link>
            <div>{node.excerpt}</div>
          </>
        )
      })}
    </>
  )
}

export default BlogList
