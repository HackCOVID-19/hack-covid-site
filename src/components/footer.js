import React from "react"
import { colors, page } from "../utils/theme"
import { rhythm } from "../utils/typography"

const linkStyle = { color: "#fff", textDecoration: "underline" }

const Footer = () => {
  return (
    <footer
      style={{
        background: colors.primary,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: page.maxWidth,
          padding: `1.45rem 1.0875rem`,
          color: "#fff",
          fontSize: `${rhythm(0.5)}`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a style={linkStyle} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
        {` `}
        by
        {` `}
        {
          <a style={linkStyle} href="https://relativemarketing.co.uk">
            Relative
          </a>
        }
      </div>
    </footer>
  )
}

export default Footer
