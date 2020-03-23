import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOut from "../components/CallOut"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tech and creative professionals: The world needs your help.</h1>
    <CallOut>Last updated: 22nd March 2020</CallOut>

    <p>
      COVID-19, commonly known as the corona virus has rapidly spread throughout
      the world causing a global pandemic.
    </p>
    <p>
      According to the{` `}
      <a href="https://www.nytimes.com/article/coronavirus-timeline.html">
        New York Times
      </a>
      {` `} the first publicly reported death was on the 1st March 2020 and at
      the time of writing the death toll has since risen to{" "}
      <a href="https://www.worldometers.info/coronavirus/coronavirus-death-toll/">
        14,611
      </a>
      {` `}
      with just under{" "}
      <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
        300,000
      </a>
      {` `}
      confirmed cases and these numbers are growing fast.
    </p>
    <h2>The effect of COVID-19</h2>
    <p>
      Unsuprisingly corona has caused a ripple throughout the world with
      devastating social and economical impact. Governments and National Health
      systems around the world are struggling to cope with the spread of the
      disease. This has lead to complete lock-down in some contries and social
      distancing and self-isolation measures in others to attempt to "flatten
      the curve".
    </p>
    <hr />
    <h2>What is this site</h2>
    <p>
      Hack COVID-19 has been created to bring developers across the world
      together to collaborate and create solutions that can help the world at
      large. The medical community is doing their part to support the sick and
      vulnerable and we in the tech industry needs to do ours too. We have the
      power to build solutions that can help people in need. Be that a nurse,
      doctor, vulnerable person or a self-isolated person suffering with mental
      health issues. The fact is society as a whole needs our help.
    </p>
    <hr />
    <h2>How can I get involved?</h2>
    <h3>Events</h3>
    <p>
      We will be holding events in the coming weeks that will give contributors
      the opportunity to work together and build solutions that help support the
      world in this time of crisis. For the most up to date information check
      out the <Link to="/events/">events</Link> pages
    </p>
    <h3>Join the conversation</h3>
    <p>
      If you'd like to share ideas and discuss what you're working on please
      join the{" "}
      <a href="https://join.slack.com/t/hackcovid-19/shared_invite/zt-ctt76nqr-dX2e2j6~f1o4aIBQq9tJPw">
        slack channel
      </a>
      .
    </p>
    <h2>Want to see what's been built?</h2>
    <p>
      As more and more projects are released they will be added to the{" "}
      <Link to="/resources/">resources</Link>
    </p>
  </Layout>
)

export default IndexPage
