import path from "path"
import { Actions, CreatePagesArgs } from "gatsby"
import { BlogsQuery, ContentfulBlogPost } from "../types/graphql-types";
// ______________________________________________________
//
type Result = BlogsQuery

// TODO:: any削除
export type BlogPageContext = any
// ______________________________________________________
// MEMO:: gatsby-node/index.ts と同じ記述をしているから直したい
const query = `
{
  allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
    edges {
      node {
        id
        slug
        title
        body {
          body
        }
        heroImage {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            base64
          }
        }
      }
    }
  }
}
`
// ______________________________________________________
//
export const createBlogPages = async ({ graphql, createPage }: {
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage']
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  result.data.allContentfulBlogPost.edges.forEach(it => {
    createPage<BlogPageContext>({
      path: `/blogs/${it.node.id}/`,
      component: path.resolve("src/templates/blog.tsx"),
      context: it.node
    })
  });
}
