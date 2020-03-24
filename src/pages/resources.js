import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallOut from "../components/CallOut"

import "./resources.css"

const ResourcesPage = ({ data }) => {
  const resources = data.allMarkdownRemark.edges
  return (
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
        <a href="https://github.com/HackCOVID-19/hack-covid-site">
          github repo
        </a>
        .
      </p>

      <hr />
      <h2>Latest resources</h2>
      <hr />
      {resources.map(({ node }) => (
        <div className="resourceItem">
          <h3 style={{ marginBottom: 0 }}>{node.frontmatter.title}</h3>

          <span className="resourceAuthor">
            By:{" "}
            <a
              href={node.frontmatter.author.url}
              target="_BLANK"
              rel="noopener noreferrer"
            >
              {node.frontmatter.author.name}
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
              href={node.frontmatter.resource.url}
              target="_BLANK"
              rel="noopener noreferrer"
              style={{ color: "#fff", fontWeight: "500" }}
            >
              Link: {node.frontmatter.resource.name}
            </a>
          </CallOut>
        </div>
      ))}
    </Layout>
  )
}

export default ResourcesPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/resources/.*.md$/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            author {
              name
              url
            }
            resource {
              name
              url
            }
            tags
          }
        }
      }
    }
  }
`
