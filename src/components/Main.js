import PropTypes from 'prop-types'
import React from 'react'
import spinaker from '../images/spinaker.jpg'
import vector1 from '../images/LeBateau/vector1.jpg'
import val1 from '../images/skipper/val1.jpg'
import val2 from '../images/skipper/val2.jpg'
import val3 from '../images/skipper/val3.jpg'
import projet1 from '../images/LeProjet/projet1.jpg'
import projet2 from '../images/LeProjet/projet2.jpg'
const ImagesVal = [val1, val2, val3]
const ImagesProjet = [projet1, projet2]
const ImagesVector = [vector1]

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="Mini Transat"
          className={`${this.props.article === 'Mini Transat' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mini Transat</h2>
          <span className="image main">
            <img
              src={
                ImagesProjet[Math.floor(Math.random() * ImagesProjet.length)]
              }
              alt=""
            />
          </span>
          <p>
          La Mini Transat 
          est une course transatlantique en solitaire et sans assistance à
           bord de voiliers de 6,50 m créée en 1977. 
          </p>
          <p>
          En 2021, elle ralliera les Sables d’Olonne à 
           Saint-François en Guadeloupe via une escale aux Iles Canaries 
           pour une disatnce totale de 4000 miles nautiques
          soit environs 7300km.
          </p>
          {close}
        </article>

        <article
          id="Bateau"
          className={`${this.props.article === 'Bateau' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bateau</h2>
          <span className="image main">
            <img
              src={
                ImagesVector[Math.floor(Math.random() * ImagesVector.length)]
              }
              alt=""
            />
          </span>
          <p>
            Les minis 6.50 sont les plus petits bateaux de course au large au
            monde. Pour ce projet, j’ai choisi de me faire construire un bateau
            neuf, afin d’avoir un voilier de dernière génération que je pourrais
            optimiser selon mes préférences. J’ai choisi un Vector 6.50 que j’ai
            reçu en novembre 2019, designé par l’architecte Etienne Bertrand.
          </p>
          <p>
            Chorus, c’est son nom de baptême, a la particularité d’avoir une
            étrave ronde et puissante(carène scow dans le jargon) qui rend plus
            performant aux allures portantes et de vent de travers.
          </p>
          {close}
        </article>

        <article
          id="Skipper"
          className={`${this.props.article === 'Skipper' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skipper</h2>
          <span className="image main">
            <img
              src={ImagesVal[Math.floor(Math.random() * ImagesVal.length)]}
              alt=""
            />
          </span>
          <p>
            Initié à la voile dès sa plus tendre enfance par des navigations en
            famille sur le First 30 familial, Valentin devient vite passionné de
            sports nautiques: voile, kitesurf, natation, wakeboard… C’est lors
            de ses études à l’Ecole Polytechnique qu’il découvre le voile en
            compétition sur Grand Surprise en participant entre autres à la
            Coupe de France des Étudiants, au Challenge Spi Dauphine et à la
            Coupe de Monde de Étudiants. Poussé par l’envie de vivre pleinement
            sa passion et d'élargir ses horizons, Valentin se lance avec un ami
            en 2016 dans un projet qui lui tenait à coeur: acheter un voilier et
            faire le Tour de l’Atlantique. Cette expérience a été formatrice sur
            bien des aspects: préparation hauturière d’un voilier, navigations
            transatlantique, météorologie, gestion de situations à risque en
            pleine mer. Aujourd’hui ingénieur en informatique, spécialisé en
            mathématiques appliquées, il se lance dans un nouveau défi:
            participer à une compétition de haut niveau et traverser
            l’Atlantique en solitaire sur un voilier de 6m50.
          </p>
          {close}
        </article>

        {/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
