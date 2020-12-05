import * as React from "react"
import { Link, graphql } from "gatsby"
import { BlogsQuery } from "../../types/graphql-types"
import { Page } from "../layouts"
import Box from "@material-ui/core/Box/Box"
import {BlogCard} from "../components/BlogCard"
import { makeStyles } from "@material-ui/core"
import { ISearchOption, SideBar } from "../layouts/sidebar"
import { useEffect, useState } from "react"

const useStyles = makeStyles({
  root:{},
  content: {
    display: 'flex',
  },
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
  },
});

const filterSearch = (data: BlogsQuery, searchOption: ISearchOption) => {
  return data.allContentfulBlogPost.edges.filter(it =>
    (searchOption.word.trim() === '' ||  it.node.title!.includes(searchOption.word) ||  it.node.body!.body!.includes(searchOption.word)) &&
    (searchOption.tags.length === 0 ||  it.node.tags!.some(it => searchOption.tags.includes(it as string)))
  )
}

type Props = {
  data: BlogsQuery
}
const Component: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [searchOption, setSearchOption] = useState<ISearchOption>({tags: [], word: ''})
  const tags = data.allContentfulBlogPost.edges.flatMap(it => it.node.tags as string[] || [])
  const uniqueTags = [...new Set(tags)];
  const [articles, setArticles] = useState(data.allContentfulBlogPost.edges)

  useEffect(() => {
    console.log(searchOption);
    setArticles(filterSearch(data, searchOption))
  }, [searchOption])
  console.log(articles);

  return (
    <Page className={classes.root}>
      <Box className={classes.content}>
        <main className={classes.main}>
          <Box className={classes.cards}>
            {articles.map(it => {
              return (
                <article className={classes.card}  key={it.node.id}>
                  <Link to={`/blogs/${it.node.id}`}>
                    <BlogCard
                      image={it.node.heroImage!.fluid!.src}
                      title={it.node.title!}
                      description={it.node.description!.description!}
                      tags={it.node.tags! as string[]}
                    />
                  </Link>
                </article>
              )
            })}
          </Box >
        </main>
        <SideBar tags={uniqueTags} searchOption={searchOption} setSearchOption={setSearchOption} />
      </Box>
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
