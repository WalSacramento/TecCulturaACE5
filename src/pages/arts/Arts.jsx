import { Cards } from "../../components/cards/Cards";
import S from "./styles.module.scss";

import ImgRocheira from "../../img/larger/rocheira_larger.png";
import PaçoImperial from "../../img/larger/paco_imperial_larger.png";
import MercadoPublico from "../../img/larger/mercado_publico_larger.png";
import RosarioDosPretos from "../../img/larger/nossa_senhora_do_rosario_dos_pretos_larger.png";
import Teatro from "../../img/larger/teatro_larger.png";
import Correntes from "../../img/larger/nossa_senhora_das_correntes_larger.png";
import CasaDaAposentadoria from "../../img/larger/casa_da_aposentadoria_larger.png";
import Convento from "../../img/larger/convento_larger.png";
import SantaCruz from "../../img/larger/santa_cruz_larger.png";
import Catedral from "../../img/larger/catedral_larger.png";
import CasaDoPenedo from "../../img/larger/casa_do_penedo_larger.png";
import OratorioDaForca from "../../img//larger/oratorio_larger.png";

import NavBar from "../../components/Nav/Nav";


   const cardsData = [
      {
         src: ImgRocheira,
         title:'Rocheira',
         description:'Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses...',
         nameBtn:'Breve Descrição',
         to:'/artItem/1'
      },
      {
         src: PaçoImperial,
         title:'Paço Imperial',
         description:'O imponente sobrado, em estilo colonial, propriedade da FAMÍLIA LEMOS ARAÚJO, foi construído ...',
         nameBtn:'Breve Descrição',
         to:'/artItem/2'
      },
      {
         src: RosarioDosPretos,
         title:'Igreja Nossa Sra. Rosário dos Pretos',
         description:'Nos primórdios do século XVII, escravos da Vila do Penedo do Rio São Francisco...',
         nameBtn:'Breve Descrição',
         to:'/artItem/3'
      },
      {
         src: Teatro,
         title:'Teatro 7 de Setembro',
         description:'O teatro foi inaugurado em 07 de setembro de 1884. O local foi construído em um terreno...',
         nameBtn:'Breve Descrição',
         to:'/artItem/4'
      },
      {
         src: Correntes,
         title:'Igreja Nossa Sra. das Correntes',
         description:'Em meados de 1720, em honra a Virgem Santa, os moradores da margem esquerda do Rio São Francisco...',
         nameBtn:'Breve Descrição',
         to:'/artItem/5'
      },
      {
         src: CasaDaAposentadoria,
         title:'Casa da Aposentadoria',
         description:'A casa de a Aposentadoria velha, é edificada para servir de hospedagem aos ouvidores...',
         nameBtn:'Breve Descrição',
         to:'/artItem/6'
      },
      {
         src: Convento,
         title:'Convento',
         description:'O Convento e Igreja Santa Maria dos Anjos, em Penedo-AL, foi o primeiro convento a ser fundado em 1661...',
         nameBtn:'Breve Descrição',
         to:'/artItem/7'
      },
      {
         src: MercadoPublico,
         title:'Mercado Público',
         description:'Em 01/01/1898, o Mercado Público de Penedo foi inaugurado, tendo o Supervisor do Convento...',
         nameBtn:'Breve Descrição',
         to:'/artItem/8'
      },
      {
         src: SantaCruz,
         title:'Igreja da Santa Cruz',
         description:'foi construída em 1818 em cima do terreiro africano. Conta a lenda que um visitante...',
         nameBtn:'Breve Descrição',
         to:'/artItem/9'
      },
      {
         src: Catedral,
         title:'Catedral',
         description:'Catedral Diocesana é uma das belezas de Penedo que vai passar por revitalização Erguendo-se...',
         nameBtn:'Breve Descrição',
         to:'/artItem/10'
      },
      {
         src: CasaDoPenedo,
         title:'Casa do Penedo',
         description:'O Museu Casa do Penedo é um espaço dedicado à história da cidade de Penedo, em Alagoas...',
         nameBtn:'Breve Descrição',
         to:'/artItem/11'
      },
      {
         src: OratorioDaForca,
         title:'Oratório da Forca',
         description:'Em 01/01/1898, o Mercado Público de Penedo foi inaugurado, tendo o Supervisor do Convento...',
         nameBtn:'Breve Descrição',
         to:'/artItem/12'
      },
   ]


export function Arts() {
   return(
      
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
         {/* <Footer /> */}
      </div>

     
   )
}