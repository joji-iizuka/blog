import * as React from "react"
import { Link, graphql } from "gatsby"
import { BlogsQuery } from "../../types/graphql-types"
import { Page } from "../layouts"
import Box from "@material-ui/core/Box/Box"
import {BlogCard} from "../components/BlogCard"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  main: {
    float: 'left',
    width: '69%',
    paddingRight: 30,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    // alignItems: 'stretch',
  },
  card: {
    width: '45%',
    margin: '0 4% 25px 0',
  }
});

type Props = {
  data: BlogsQuery
}
const Component: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Page>
      <main className={classes.main}>
        <Box className={classes.cards}>
          {data.allContentfulBlogPost.edges.map(it => {
            return (
              <article className={classes.card}>
                <Link to={`/blogs/${it.node.id}`} key={it.node.id}>
                  <BlogCard
                    image={it.node.heroImage?.fluid.src}
                    title={it.node.title!}
                    description={it.node.description!.description!}
                  />
                </Link>
              </article>
            )
          })}
        </Box >
      </main>
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
          description {
            description
          }
          tags
          heroImage {
            fluid {
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
