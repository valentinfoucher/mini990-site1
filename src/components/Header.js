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
        <h4>Objectif Mini Transat 2021: Traverser l'Atlantique en solitaire et en course sur un voilier de 6m50</h4>
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
            onClick={() => {const blogUrl = 'https://www.youtube.com/channel/UC0YuNK2dDCcCPtzNC8UlgtA';
              window.open(blogUrl, '_blank');
              //props.onOpenArticle('Blog')
            }}
          >
            Videos
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
              //const blogUrl = 'https://mini990chorus-instagram.netlify.app/';
              //window.open(blogUrl, '_blank');
              props.onOpenArticle('Partenaires')
            }}
          >
            Partenaires
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
