import S from './styles.module.scss'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Cards } from '../../components/cards/Cards'
import NavBar from '../../components/Nav/Nav'

const cardsData = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Penedo_-_Alagoas.jpg',
    title: 'Exibir Conteúdo Tradicional',
    description: 'Acesse para iniciar a experiência com conteúdo tracional.',
    nameBtn: 'Exibir as Obras',
    to: '/arts'
  }
]

export function Initial() {
  return (
    <div className={S.containerAll}>
      <NavBar />

      <div className={S.containerCards}>
        <div>
          <Card className={S.cardItem}>
            <Card.Img variant="top" src='src\img\RAImage.jpeg' style={{ height: '298.5px' }} />

            <Card.Body>
              <Card.Title>Realidade Aumentada</Card.Title>
              <Card.Text>Acesse para iniciar a experiência de realidade aumentada.</Card.Text>

              <div className={S.divBtns}>
                <a href="https://app-arjs.vercel.app"><Button variant="primary">Acessar Realidade Aumentada</Button></a>                
              </div>
            </Card.Body>
          </Card>
        </div>
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
    </div>
  )
}
