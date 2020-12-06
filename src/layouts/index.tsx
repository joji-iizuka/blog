import { Box, makeStyles } from "@material-ui/core";
import * as React from "react"
import Helmet from "react-helmet"
import Header from "./header"

const useStyles = makeStyles({
  root: {},
  body: {
    display: 'flex',
  },
  main: {
    marginTop: 48,
  },
  sidebar: {},
});

interface IProps {
  className?: string;
}

export const Page: React.FC<IProps> = ({className, children}) => {
  const classes = useStyles();
  const root = `${classes.root} ${className}`;
  return (
    <div className={root}>
      <Helmet
        title="Jogブログ"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header />
      <Box className={classes.main}>
        {children}
      </Box>
    </div>
  )
}
