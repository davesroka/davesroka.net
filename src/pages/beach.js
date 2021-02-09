import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Beach extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Beach"}>
        <h1>Is it Beach yet?</h1>
        <p>No :(</p>
      </Layout>
    )
  }
}

export default Beach