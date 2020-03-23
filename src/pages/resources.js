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

    <h2>Business</h2>
    <p>Resources developed to aid the business community</p>

    <h3 style={{ marginBottom: 10 }}>Business forecast template</h3>
    <span style={{ fontSize: "80%", marginBottom: 10, display: "block" }}>
      Author:{" "}
      <a
        href="https://www.agencycfo.co.uk/"
        target="_BLANK"
        rel="noopener noreferrer"
      >
        AgencyCFO
      </a>
    </span>
    <p>
      A forecasting template to help businesses plan their financials throughout
      the crisis.
    </p>
    <a
      href="https://docs.google.com/spreadsheets/d/1Ev_iBsJmKSn-uD7_VYGgkHOkPWpQ-FxaPSTz21GsavA/edit#gid=1223093608"
      target="_BLANK"
      rel="noopener noreferrer"
    >
      Cash Flow Forecast Template
    </a>
    <hr style={{ marginTop: 10, marginBottom: 10 }} />
    <h3 style={{ marginBottom: 10 }}>Save A Small Business Today</h3>
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
