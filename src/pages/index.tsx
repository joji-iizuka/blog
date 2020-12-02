import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { IndexHoge2Query } from "../../types/graphql-types"
// ______________________________________________________
//
type Props = {
  data: IndexHoge2Query
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => {
  console.log(data);
  // const data2 = useStaticQuery(graphql`
  //   query allContentfulUser {
  //     allContentfulUser {
  //       nodes {
  //         id
  //         name
  //         age
  //       }
  //     }
  //   }
  // `)
  // console.log(data2);
  return (
    <div>
      <h1>Hi people</h1>
      <strong>{data.site?.siteMetadata?.title}</strong> site.
      <p>Welcome to your new </p>
      <p>Now go build something great.</p>
      <ul>
        <li>
          <Link to="/page-2/">Go to page 2</Link>
        </li>
        <li>
          <Link to="/authors/">Go to authors</Link>
        </li>
      </ul>
    </div>
  )
}
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHoge2 {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
