import * as React from "react"
import { Page } from "../layouts"
import { BlogPageContext } from "../../gatsby-node/createBlogPages"
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root:{},
  main: {
    width: 960,
    margin: 'auto',
  },
  imageArea: {
    width: '100%',
  },
  image: {
    width: '100%',
  }
});

type Props = {
  pageContext: BlogPageContext
}

const Component: React.FC<Props> = ({ pageContext }) => {
  console.log(pageContext);
  const classes = useStyles();
  return (
    <Page className={classes.root}>
      <Box className={classes.imageArea}>
        <img src={pageContext.heroImage?.fluid?.src} className={classes.image}/>
      </Box>
      <main className={classes.main}>
        <Typography component='h2'>{pageContext.title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: pageContext.body.childMarkdownRemark.html }} />
      </main>
    </Page>
  )
}
export default Component
