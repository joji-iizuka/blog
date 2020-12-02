import * as React from "react"
import { Link, graphql } from "gatsby"
import { BlogsQuery } from "../../types/graphql-types"
import { Page } from "../layouts"
import Box from "@material-ui/core/Box/Box"
// ______________________________________________________
//
type Props = {
  data: BlogsQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <Page>
      {data.allContentfulBlogPost.edges.map(it => {
        return (
          <Box key={it.node.id}>
            <Link to={`/blogs/${it.node.id}`}>{it.node.title}</Link>
          </Box>
        )
      })}
    </Page>
  )
}
// ______________________________________________________
//
export const pageQuery = graphql`
  query Blogs {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          body {
            body
          }
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  },
`
// ______________________________________________________
//
export default Component
