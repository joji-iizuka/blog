import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core";
// ______________________________________________________
//

const useStyles = makeStyles({
  root: {
    marginBottom: "1.45rem",
    backgroundColor: '#eee',
    height: 104,
    '& p,& a': {
      color: 'white',
    },
    margin: '-8px -8px 0 -8px',
  },
});


const Component: React.FC = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div
        style={{
          margin: "0 auto",
          padding: "1.45rem 1.0875rem"
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "#555",
              textDecoration: "none"
            }}
          >
            飯塚 ブログ
          </Link>
        </h1>
      </div>
    </header>
  )
}
// ______________________________________________________
//
export default Component
