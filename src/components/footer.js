import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
    <footer
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >Send mail</Link></h1>
          <div
            style={{
                //to do
            }}
            >
         © {new Date().getFullYear()} Luka Juras,
          {` `}
          <a href="https://www.luka-juras.com">Luka Juras</a>
          </div>
      </div>
    </footer>
  )

// Props!
//   Header.propTypes = {
//     siteTitle: PropTypes.string,
//   }

//   Header.defaultProps = {
//     siteTitle: ``,
//   }

  export default Header
