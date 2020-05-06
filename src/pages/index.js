import React from "react"
import { LinkButton } from "gatsby-interface"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <LinkButton
      to="/page-2/"
      onClick={() => {
        console.log("Tracking button Click to Page 2")
        trackCustomEvent({
          category: document.title,
          action: `click`,
          label: `Go to Page 2`,
        })
      }}
    >
      Go to Page 2
    </LinkButton>
  </Layout>
)

export default IndexPage
