import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <SEO
      title="Resources"
      description="Tech that has been built in response to COVID-19"
    />
    <h1>Resources</h1>
    <p>
      This page maintains a list of resources built to aid people across the
      world in this time of need. If you would like a link added here please
      send a pull request. Here's the link to the{" "}
      <a href="https://github.com/HackCOVID-19/hack-covid-site">github repo</a>.
    </p>

    <hr />

    <h2 style={{ marginBottom: 10 }}>Save A Small Business Today</h2>
    <span style={{ fontSize: "80%", marginBottom: 10, display: "block" }}>
      Author:{" "}
      <a
        href="https://taodigitalmarketing.com/"
        target="_BLANK"
        rel="noopener noreferrer"
      >
        TAO Digital
      </a>
    </span>
    <p>
      Save a Small Business, a website dedicated to helping businesses in
      Greater Manchester (UK) promote themselves through these tough times
    </p>
    <a href="https://sasb.today" target="_BLANK" rel="noopener noreferrer">
      sasb.today
    </a>
  </Layout>
)

export default ResourcesPage
