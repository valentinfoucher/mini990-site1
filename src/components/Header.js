import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>MINI 990 CHORUS</h1>
        <p>Valentin Foucher</p>
        <p>Objectif Mini Transat 2021</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Le projet')
            }}
          >
            Le Projet
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('le bateau')
            }}
          >
            Le bateau
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Valentin')
            }}
          >
            Valentin
          </button>
        </li>
        <li>
          {/* <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button> */}
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
