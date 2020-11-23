import PropTypes from 'prop-types'
import React from 'react'
import vector1 from '../images/LeBateau/vector1.jpg'
import val3 from '../images/skipper/val3.jpg'
import projet1 from '../images/carte mini transat.png'
const ImagesVal = [val3]
const ImagesProjet = [projet1]
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
          className={`${this.props.article === 'Mini Transat' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
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
            est une course transatlantique en solitaire, sans assistance et sans communication avec la terre.
            Elle se court à bord des mini 6.50, les plus petits bateaux de Course au Large.
          </p>
          <p>
            En 2021, elle ralliera les Sables d’Olonne à
            Saint-François en Guadeloupe via une escale aux Iles Canaries
            pour une disatnce totale de 4000 miles nautiques
            soit environs 7300km.
          </p>
          <p>
            Mais avant de pouvoir s'alligner sur la ligne de départ de cette course mythique,
            il faut se qualifier, 1500 milles en course et 1000 milles hors course sont nécessaires.
          </p>
          {close}
        </article>

        <article
          id="Bateau"
          className={`${this.props.article === 'Bateau' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
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
            monde.
            <br></br>
            En voici quelques caractéristiques techniques:
            <ul>
              <li>Longueur de coque : 6,50 m</li>
              <li>Largeur de coque : 2,98 m</li>
              <li>Tirant d'eau : 1,60 m</li>
              <li>Tirant d'air : 11 m</li>
              <li>Poids : 1T</li>

            </ul>

            

            Pour ce projet, j’ai choisi de me faire construire un bateau
            neuf, afin d’avoir un voilier de dernière génération que je pourrais
            optimiser selon mes préférences.C'est un Vector 6.50 que j’ai
            reçu en novembre 2019, designé par l’architecte Etienne Bertrand.
          </p>
          <p>
            Chorus, c’est son nom de baptême, a la particularité d’avoir une
            étrave ronde et puissante qui rend plus
            performant aux allures de vent de travers.
          </p>
          {close}
        </article>

        <article
          id="Skipper"
          className={`${this.props.article === 'Skipper' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
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
            Valentin Foucher, 27 ans, ingénieur, je suis un passionné du monde marin et des
            sports nautiques: voile, kitesurf, natation, wakeboard.
            </p>
          <p>
            Poussé par l’envie de vivre pleinement
            ma passion et d'élargir mes horizons, je melance avec un ami
            en 2016 dans un projet qui me tenait à coeur, acheter un voilier et
            faire le Tour de l’Atlantique.
            <br></br>

            Cette expérience a été formatrice sur
            bien des aspects: préparation hauturière d’un voilier, navigations
            transatlantique, météorologie, gestion de situations à risque en
            pleine mer.
            </p>
          <p>

            Aujourd’hui je me lance dans un nouveau défi,
            participer à une compétition sportive de haut niveau et traverser
            l’Atlantique en solitaire sur un voilier de 6m50.
            C'est parti pour un deux années d'un projet incroyable fait d'entrainements, de préparation intense et de navigation.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>N'hesitez pas à me contacter, voici mon mail <i>valentinfoucher93@gmail.com</i>.
          <br/>
          Si vous passez à La Rochelle, vous pourrez nous trouver au ponton 2 du Port des Minimes, 
          si vous voulez visiter le bateau ou échanger sur le projet.

          
          </p>
          <p>Pour suivre le projet sur les réseaux sociaux :</p>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/valentin-foucher/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/valentin.foucher/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/valfoucher_minitransat2021/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/valentinfoucher"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> 
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
