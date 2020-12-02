import * as React from "react"
import Helmet from "react-helmet"
import Header from "./header"
// ______________________________________________________
//
export const Page: React.FC = props => {
  return (
  <div>
    <Helmet
      title="Jogブログ"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    {props.children}
  </div>
)}
