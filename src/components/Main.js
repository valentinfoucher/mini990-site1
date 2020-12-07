import PropTypes from 'prop-types'
import React from 'react'
import vector1 from '../images/LeBateau/vector1.jpg'
import val3 from '../images/skipper/val3.jpg'
import projet1 from '../images/carte mini transat.png'
import medocnautic from '../images/Partenaires/medocnautic.png'

// const ImagesVal = [val3]
// const ImagesProjet = [projet1]
// const ImagesVector = [vector1]

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
                projet1
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
            Saint-François en Guadeloupe, après une escale aux Iles Canaries.
            C'est donc pour une course transatlantique de 4000 miles nautiques (plus de 5000 kms) que les concurrents 
            embarqueront.
            
          </p>
          <p>
            Avant de pouvoir se présenter sur la ligne de départ,
            il faut d'abord se qualifier au terme d'un exigeant programme de tests, formations, courses et navigations.
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
               vector1
              }
              alt=""
            />
          </span>
          <p>
            Les minis 6.50 sont les plus petits bateaux de course au large du
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
            neuf, afin d’avoir un voilier de dernière génération pouvant être équipé et 
            optimisé selon mes préférences.
            C'est un Vector 6.50 que j’ai
            reçu en novembre 2019, dessiné par l’architecte Etienne Bertrand et construit en Pologne.
          </p>
          <p>
            Chorus a la particularité d’avoir une
            étrave ronde et puissante qui le rend plus
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
              src={val3}
              alt=""
            />
          </span>
          <p>
            Valentin Foucher, 27 ans, ingénieur, je suis un passionné du monde marin et des
            sports nautiques: voile, kitesurf, natation, wakeboard.
            </p>
          <p>
            Poussé par l’envie de vivre pleinement
            ma passion et d'élargir mes horizons, en 2016, j'ai avec un ami
            acheté un voilier à bord duquel nous avons effectué un tour de l'Atlantique en 9 mois.
            
            <br></br>

            Cette expérience a été formidablement formatrice: équipement et préparation technique du bateau, 
            navigations transatlantiques, météorologie, gestion de situations à risque en
            pleine mer, rencontres.
            </p>
          <p>

            Je me lance aujourd'hui un nouveau défi,
            participer à une compétition sportive de haut niveau et traverser
            l’Atlantique en solitaire sur un voilier de 6m50.
            C'est donc parti pour deux années de formations et d'entrainements intenses.
            Objectif: figurer sur la ligne de départ de la Mini Transat à l'automne 2021.</p>
          {close}
        </article>
        <article
          id="Partenaires"
          className={`${this.props.article === 'Partenaires' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Partenaires</h2>
          <h3 className="major">Medoc Nautic</h3>
          <span className="image">
            <img
              src={medocnautic}
              alt=""
            />
          </span>
          <p>
          Situé sur la commune de Carcans, entre les lacs de Lacanau et d'Hourtin, Medoc Nautic
          est un chantier naval qui propose un large panel de services: 
          motorisation, voiliers, vente d'accastillage de plaisance,  peinture et vernis, gardiennage et manutention, renflouement.
          
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
          <p>N'hesitez pas à me contacterpar email <i>valentinfoucher93@gmail.com</i>.
          <br/>
          Venez me rencontrer à La Rochelle, vous me trouverez au ponton 2 du Port des Minimes, 
          vous pourrez visiter le bateau ou échanger sur le projet.
          N'hésitez pas à lire mon blog et à vous abonner à la newsletter.

          
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
