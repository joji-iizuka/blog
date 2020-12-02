import * as React from "react"
import { Link } from "gatsby"
// ______________________________________________________
//
const Component: React.FC = () => (
  <header
    style={{
      marginBottom: "1.45rem"
    }}
  >
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
// ______________________________________________________
//
export default Component
