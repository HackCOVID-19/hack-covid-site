import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOut from "../components/CallOut"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" description="Upcoming events" />
    <h1>Events</h1>
    <p>
      This page displays upcoming and past events. Please keep an eye on this
      page as it will be updated regularly.
    </p>

    <hr />

    <h2>HACK COVID-19 - Hackathon to help vulnerable people</h2>
    <CallOut>Wed 25th March - Fri 27th March</CallOut>
    <p>
      This is the first event hosted by Hack COVID-19 please join us to start
      building something to support the worlds most vulnerable people in their
      time of need.
    </p>
    <a
      href="https://www.eventbrite.co.uk/e/hack-covid-19-hackathon-to-help-vulnerable-people-tickets-100614269990"
      target="_BLANK"
      rel="noopener noreferrer"
    >
      Event link
    </a>
  </Layout>
)

export default EventsPage
