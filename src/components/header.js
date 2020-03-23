import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { colors, page } from "../utils/theme"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors.primary,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: `0 auto`,
        maxWidth: page.maxWidth,
        padding: `2.9rem 1.0875rem`,
      }}
    >
      <span style={{ display: "inline-block", margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle.split(" ").map((word, ind) => {
            const style = {
              display: "block",
              fontFamily: "Montserrat",
              fontSize: "40px",
              lineHeight: "40px",
              fontWeight: 700,
            }

            if (!ind) {
              style.fontSize = "30px"
              style.lineHeight = "30px"
              style.fontWeight = 300
              style.textTransform = "uppercase"
            }

            return (
              <span className={`header-${ind + 1}`} style={style}>
                {word}
              </span>
            )
          })}
        </Link>
      </span>
      <nav>
        <ul className="navigation">
          <li className="navigation-item">
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/events/">
              Events
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/resources/">
              Resources
            </Link>
          </li>
          <li className="navigation-item">
            <a
              className="navigation-link"
              href="https://join.slack.com/t/hackcovid-19/shared_invite/zt-ctt76nqr-dX2e2j6~f1o4aIBQq9tJPw"
            >
              Slack
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
