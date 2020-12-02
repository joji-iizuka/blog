import { GatsbyNode } from "gatsby"
import { createAutorPages } from './createAutorPages'
import { createBlogPages } from "./createBlogPages"
// ______________________________________________________
//
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => Promise.all([
  // await createAutorPages({ graphql, createPage }),
  await createBlogPages({ graphql, createPage })
])
