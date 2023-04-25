import S from './styles.module.scss'

import { Title } from '../../components/title/Title'
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'

import ImgRocheira from '../../img/larger/rocheira_larger.png'
import PaçoImperial from '../../img/larger/pacoImperial_larger.png'
import MercadoPublico from '../../img/mercadoPublico.jpg'
import RosarioDosPretos from '../../img/rosarioDosPretos.jpg'
import Teatro from '../../img/teatro.jpg'
import Correntes from '../../img/larger/nossa_senhora_das_correntes_larger.png'
import CasaDaAposentadoria from '../../img/larger/casa_da_aposentadoria_larger.png'
import Convento from '../../img/larger/convento_larger.png'
import SantaCruz from '../../img/santaCruz.jpg'
import Catedral from '../../img/larger/catedral_larger.png'
import CasaDoPenedo from '../../img/casaDoPenedo.jpg'
import OratorioDaForca from '../../img/oratorioDaForca.jpg'
import NavBar from '../../components/Nav'

const itemsData = [
  {
    src: ImgRocheira,
    title: 'Rocheira',
    description: `Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses, tendo seu líder Conde JOÃO MAURÍCIO DE NASSAU ocupado um dos pontos estratégico da Vila a “ROCHEIRA”, construindo um Forte que recebeu o seu nome. Ali existia uma passagem secreta da “Rocheira” para o interior do Forte Maurício de Nassau. O local era privilegiado para que grandes embarcações pudessem atracar, 
     sem contar que dava ótimas condições de defesa.
     Duarte coelho Pereira e Duarte coelho de Albuquerque, foram os que subiram o Rio São Francisco e chegaram a "Grande penedo", e foi assim que fundaram o restaurante.`
  },
  {
    src: PaçoImperial,
    title: 'Paço Imperial',
    description: `O imponente sobrado, em estilo colonial, propriedade da FAMÍLIA LEMOS ARAÚJO, foi construído em fins do século XVIII. Em 14 de Outubro de 1859, foi transformado em “Paço Imperial” para acolher, sua Majestade, o Imperador do Brasil, D. PEDRO II, o qual vindo da Bahia com destino a Cidade de Paulo Afonso, desembarcou e hospedou-se na Cidade de Penedo. Por um pequeno período Penedo, “Mui Nobre e Sempre Leal”, 
     foi Sede do Governo Imperial. O imaginário popular conta, o ilustre visitante teria usa a seguinte expressão: “o local é muito bonito e creio que deveria estar aqui a capital da província.”Antes de seguir viagem, o Imperedor D Pedro II, assistiu missa na Igreja de Nossa Senhora da Corrente e no dia 16 de outubro de 1859, o “Vapor Pirajara” sobe o Rio São Francisco levando em seu bojo o Imperador Pedro II.A fachada do imóvel 
     era tipicamente colonial, porém na gestão do Dr. EUCLIDES VIEIRA MALTA, (Governador de Alagoas – 1900 a 1903 e 1909 a 1912), sofreu modificações, sendo o prédio destinado para o funcionamento da COLETORIA ESTADUAL. Na década de 1980, transformou-se no “Museu do Paço Imperial”.`
  },
  {
    src: RosarioDosPretos,
    title: 'Igreja Nossa Sra. Rosário dos Pretos',
    description: `Nos primórdios do século XVII, escravos da Vila do Penedo do Rio São Francisco, em honra de Santa Efigênia, construíram uma Capela no exato local onde se encontra o Templo dedicado a Nossa Senhora do Rosário dos Pretos. Pelo ano de 1634, a Irmandade de Nossa Senhora do Rosário dos Homens Pretos, através de seus integrantes “Os Homens Pretos” (escravos negros e libertos), deram início a construção da Capela-mór, e assim, em 1816, foram construídas a fachada e a Torre (esquerda).
     Em 29 de junho de 1819, o Padre ANTÔNIO CRAVEIRO DE BARROS LEITE, celebrou na referida Igreja sua primeira missa, ele era professor jubilado de gramática latina na vila e benfeitor da Irmandade nossa Sra. Do Rosário dos pretos.`
  },
  {
    src: Teatro,
    title: 'Teatro 7 de Setembro',
    description: `O teatro foi inaugurado em 07 de setembro de 1884. O local foi construído em um terreno doado pelos franciscanos, para dar vida ao primeiro teatro de Alagoas. Hoje é mantido e administrado pela Prefeitura Municipal de Penedo e foi tombado pelo Patrimônio Histórico e Artístico Nacional. No local, não há eco. A construção foi projetada para que a voz dos atores não permanecessem no ar.
     Em cima do prédio, na fachada, quatro deusas “guardam” a estrutura: Euterpe, Deusa da Música; Calíope, Deusa da Arte; Melpômene, Deusa da Poesia; e Terpsícore, Deusa da Dança.
     Mesmo com a estrutura antiga e carente de manutenção, espetáculos ainda são encenados no palco do teatro mais antigo de Alagoas.`
  },
  {
    src: Correntes,
    title: 'Igreja Nossa Sra. das Correntes',
    description: `Em meados de 1720, em honra a Virgem Santa, os moradores da margem esquerda do Rio São Francisco, principalmente os pescadores, construíram uma pequena Capela no terreno em que a atual Igreja foi edificada, a qual foi denominada de Nossa Senhora da Corrente, cujo objetivo da maioria dos devotos era realizarem suas orações em busca de proteção das furiosas correntezas do curso fluvial do Velho Chico, todavia, com o passar dos anos a mesma veio a se desmoronar.
     A Igreja Nossa Senhora da Corrente, por sua vez, foi construída pela Família Lemos que era contra a escravidão. Então, ao construir a igreja eles fizeram uma passagem secreta para esconder os escravos fugitivos.
     A origem do nome do templo é explicada por várias origens, associadas ao imaginário popular. A primeira está associada ao sobrenome de uma das suas 
     benfeitoras, Ana Felícia da Corrente, e à padroeira da igreja, Nossa Senhora, além da proximidade com um rio. Outros acreditam que o nome foi dado pelo português José Gonçalo Garcia Reis, que, conseguindo libertar-se de uma prisão da sua pátria, fugiu para o Brasil e chegou a Penedo ainda com um pedaço da corrente.`
  },
  {
    src: CasaDaAposentadoria,
    title: 'Casa da Aposentadoria',
    description: `A casa de a Aposentadoria velha, é edificada para servir de hospedagem aos ouvidores juízes postos pelos donatórios, o paço da câmara municipal estabeleceu-se nela, e mandou construir outro sobrado (atual prefeitura) para aposentadoria dos ouvidores. Ela foi construída entre 1781-1782, a qual foi administrada na ocasião pelo jacinto soares de Souza. Chegou um momento em que a casa de aposentadoria, já não servia mais     para a acomodação dos ouvidores, que era sua atividade fim, e com isso, foi construída a atual prefeitura.`
  },
  {
    src: Convento,
    title: 'Convento',
    description: `O Convento e Igreja Santa Maria dos Anjos, em Penedo-AL, foi o primeiro convento a ser fundado em 1661, a pedido dos habitantes.
     Sua arquitetura é no estilo barroco e sua construção durou 99 anos para ser concluída, o Convento possuí um amplo pátio por onde abre caminho às 
     salas que estão peças sacras antigas e outros objetos interessantes e curiosos, por exemplo, o ferro de fazer hóstia, além da imagem de São Francisco tocando violino. A igreja também é conhecida por ter restos mortais de padres nas paredes.`
  },
  {
    src: MercadoPublico,
    title: 'Mercado Público',
    description: `Em 01/01/1898, o Mercado Público de Penedo foi inaugurado, tendo o Supervisor do Convento Franciscano da Santa Maria dos Anjos, Frei ANTÔNIO DE SÃO CAMILLO LELLIS, realizado a benção do Estabelecimento Público, o qual foi ocupado pelos seus respectivos usuários. Dotado de traçado horizontal, o monumento se destaca na região que está solidificado, pela sua rigidez do seu formato. Em suas fachadas, as portas centrais dão acesso ao enorme corredor que se alonga por entre seus arcos perfeitos, que demarca internamente o imóvel. Além disso, as citadas portas se sobressaem pelos avantajados tamanhos, em arco perfeito, acompanhadas pelas outras, seguindo à mesma linha, em ritmo arquitetônico repetitivo e desprovido de sobejo. Encimando a identificação em toda a sua extensão, uma platibanda do século XIX conclui os procedimentos arquitetônicos na mesma linha de austeridade e funcionalidade que distingui o prédio.`
  },
  {
    src: SantaCruz,
    title: 'Igreja da Santa Cruz',
    description: `Foi construída em 1818 em cima do terreiro africano. Conta a lenda que um visitante, que frequentava o terreiro em dia de culto, tinha os pés de cabra. Então para exorcizar o local, foi construída uma capela em homenagem a Santa Cruz.
     Igreja de Santa Cruz do Cortume tem a imagem do Bom Jesus dos Navegantes, que é considerada milagrosa, que é o grande destaque da igreja. A imagem foi esculpida por Cesário Procópio dos Mártyres para a celebração religiosa, que é considerada a maior da região do Baixo São Francisco que acontece desde 1884.
     Igreja de Santa Cruz do Cortume é também conhecida de Igreja do Bom Jesus dos Navegantes, possui três portas e três janelas, nave e capela-mor.`
  },
  {
    src: Catedral,
    title: 'Catedral',
    description: `Catedral Diocesana é uma das belezas de Penedo que vai passar por revitalização Erguendo-se imponente às margens do Rio São Francisco, a cidade de Penedo é um relicário vivo. Entre os patrimônios do município está a Catedral Diocesana.
     Criada no século XVII, a Catedral possui privilegiada localização, pois tem à sua frente à Praça Barão de Penedo e na lateral, a Praça Pe. Veríssimo. Por muitos anos congregou os principais atos litúrgicos da fé católica da região. Mas desde 2007 que, devido a problemas estruturais, o templo está fechado.
     O secretário de Estado da Cultura, Osvaldo Viégas; o bispo Dom Valério Breda; o deputado Givaldo Carimbão e representantes do Instituto do Patrimônio Histórico e Artístico Nacional (Iphan) e da prefeitura de Penedo reuniram-se na última semana para tratar sobre as obras de reestruturação da Igreja.
     "A Catedral Diocesana faz parte do patrimônio histórico de Penedo. Estamos nos esforçando para devolver a igreja à comunidade", afirmou Osvaldo Viégas. As obras da catedral tiveram início em junho deste ano. A primeira fase está sendo feita com recursos da campanha "Diga Sim à Catedral", realizada pela comunidade em parceria com a Companhia Energética de Alagoas (Ceal). De acordo com Adriana Guimarães, diretora do Pró-Memória departamento da Secult responsável por zelar pelo patrimônio do Estado`
  },
  {
    src: CasaDoPenedo,
    title: 'Casa do Penedo',
    description: `O Museu Casa do Penedo é um espaço dedicado à história da cidade de Penedo, em Alagoas, e à história do Barão de Penedo, conhecido diplomático no Império e na República. Fundada em 1992, pelo médico Francisco Alberto Sales, um penedense que investiu parte de sua fortuna pessoal na fundação cultural destinada a preservar a memória de sua terra natal. Localizado na Rua João Pessoa, número 126, o museu possui biblioteca especializada na história do lugar, arquivo iconográfico com cerca de cinco mil peças, além de arquivo histórico documental informatizado. Um moderno auditório está destinado para palestras e eventos culturais e conta também com salas para exposições, sendo que uma delas de caráter permanente com componentes referentes a fatos históricos ocorridos na cidade alagoana.`
  },
  {
    src: OratorioDaForca,
    title: 'Oratório da Forca',
    description: `Diante da antiga cadeia pública, em 1769, na antiga praça da Matriz, hoje praça Barão de Penedo, foi construído o Oratório dos Condenados.
     Sua construção foi com o objetivo que nele, às segundas-feiras, os prisioneiros da cadeia ouvissem as missas pelas almas, e aos sábados eles realizam o canto do Ofício da Virgem Imaculada Conceição, antecedido da recitação do terço. 
     Além disso, quando vigente no Brasil a pena de morte, os prisioneiros em sua última noite ficavam naquele local e ouviam a missa e ali aguardavam a hora de sua execução, que se dava no local conhecido como Alto da Forca.`
  }
]

export function ArtItem() {
  const params = useParams()
  const { id } = params
  const index = parseInt(id) - 1

  // const imgArtItem = src === 'caminho/para/imagem1.jpg' ? 'imagem-1' : 'outra-imagem';
  // const description = description === 'caminho/para/imagem1.jpg' ? 'imagem-1' : 'outra-imagem';

  return (
    <>
      <NavBar/>
      <Title title={itemsData[index].title} />
      <div className={S.divArtItemAll}>
        <div className={S.divArtItem}>
          <img src={itemsData[index].src} className={S.ImgArtItem} />
          <p className={S.descriptionArtItem}>
            {itemsData[index].description}{' '}
          </p>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}
