import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOut from "../components/CallOut"
import { graphql } from "gatsby"

const EventsPage = ({ data }) => {
  const events = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Events" description="Upcoming events" />
      <h1>Events</h1>
      <p>
        This page displays upcoming and past events. Please keep an eye on this
        page as it will be updated regularly.
      </p>

      <hr />

      {events.map(({ node }) => (
        <div className="resourceItem">
          <h3 style={{ marginBottom: 0 }}>{node.frontmatter.title}</h3>
          <span className="resourceDate">
            {node.frontmatter.datetime.startDate}{" "}
            {node.frontmatter.datetime.startTime} -{" "}
            {node.frontmatter.datetime.endTime}{" "}
            {node.frontmatter.datetime.timezone}
          </span>
          <span className="resourceAuthor">
            Organiser:{" "}
            <a
              href={node.frontmatter.organizer.url}
              target="_BLANK"
              rel="noopener noreferrer"
            >
              {node.frontmatter.organizer.name}
            </a>
          </span>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <div>
            <ul className="resourceTags">
              {node.frontmatter.tags.map((tag, ind) => (
                <li key={ind}>#{tag}</li>
              ))}
            </ul>
          </div>
          <CallOut>
            <a
              href={node.frontmatter.link}
              target="_BLANK"
              rel="noopener noreferrer"
              style={{ color: "#fff", fontWeight: "500" }}
            >
              Link: {node.frontmatter.title}
            </a>
          </CallOut>
        </div>
      ))}
    </Layout>
  )
}

export default EventsPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___datetime___startDate], order: DESC }
      filter: { fileAbsolutePath: { regex: "/events/.*.md$/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            datetime {
              startDate
              startTime
              endTime
              timezone
            }
            organizer {
              name
              url
            }
            link
            tags
          }
        }
      }
    }
  }
`
