import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        {/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}
    <div className="content">
      <div className="inner">
        <h1>MINI 990 CHORUS</h1>
        <h2>Valentin Foucher</h2>
        <h3>Objectif Mini Transat 2021</h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Mini Transat')
            }}
          >
            Mini Transat
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Bateau')
            }}
          >
            Bateau
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('Skipper')
            }}
          >
            Skipper
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              const blogUrl = 'https://mini990chorus-blog.netlify.app/';
              window.open(blogUrl, '_blank');
              //props.onOpenArticle('Blog')
            }}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              const blogUrl = 'https://mini990chorus-instagram.netlify.app/';
              window.open(blogUrl, '_blank');
              //props.onOpenArticle('Blog')
            }}
          >
            Instagram
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
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
