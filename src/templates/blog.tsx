import * as React from "react"
import { Link, graphql } from "gatsby"
import { Page } from "../layouts"
import { BlogPageContext } from "../../gatsby-node/createBlogPages"
// ______________________________________________________
//
type Props = {
  pageContext: BlogPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Page>
      {pageContext.title}
      {pageContext.heroImage?.fluid?.base64}
    </Page>
  )
}
export default Component
