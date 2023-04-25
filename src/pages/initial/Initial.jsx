import S from './styles.module.scss'

import { Cards } from '../../components/cards/Cards'
import { Footer } from '../../components/Footer/Footer'
import NavBar from '../../components/Nav'

const cardsData = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Penedo_-_Alagoas.jpg',
    title: 'Realidade Aumentada',
    description:
      'Some quick example text to build on the card title and make up the bulk of the card',
    nameBtn: 'Iniciar a Realidade Aumentada',
    to: '/'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Penedo_-_Alagoas.jpg',
    title: 'Exibir Conteúdo Tradicional',
    description:
      'Some quick example text to build on the card title and make up the bulk of the card',
    nameBtn: 'Exibir as Obras',
    to: '/arts'
  }
]

export function Initial() {
  return (
    <div className={S.containerAll}>
      <NavBar/>

      <div className={S.containerCards}>
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            src={card.src}
            title={card.title}
            description={card.description}
            nameBtn={card.nameBtn}
            to={card.to}
          />
        ))}
      </div>

      {/* <Footer/> */}
    </div>
  )
}
