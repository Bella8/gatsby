import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle, menuLinks}) => (
  < nav style = {
    {
      display: 'flex',
      flex: 1,
      padding: '0px 1.0875rem 1.45rem',
      margin: '0 auto'
    }
  } >
    {menuLinks.map(link =>
      <li key = { link.name }
        style = {
          {
            'listStyleType': 'none',
            'marginRight': '12px'
          }
        } >
        <Link to = {link.link}>{link.name}</Link> 
      </li>
      ) } 
  </nav>
    )

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: []
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks:[]
}

export default Header
