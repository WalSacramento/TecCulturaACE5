import S from "./styles.module.scss";

import { Title } from "../../components/title/Title";
import { useParams } from "react-router-dom";

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

const itemsData = [
  {
    src: ImgRocheira,
    title: "Rocheira",
    description: `  Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos
                    Holandeses, tendo seu líder Conde JOÃO MAURÍCIO DE NASSAU ocupado um dos pontos
                    estratégico da Vila a “ROCHEIRA”, construindo um Forte que recebeu o seu nome. Ali
                    existia uma passagem secreta da “Rocheira” para o interior do Forte Maurício de Nassau. O
                    local era privilegiado para que grandes embarcações pudessem atracar, sem contar que
                    dava ótimas condições de defesa.
                    Duarte coelho Pereira e Duarte coelho de Albuquerque, foram os que subiram o Rio São
                    Francisco e chegaram a &quot;Grande penedo&quot;, e foi assim que fundaram o restaurante`
  },
  {
    src: PaçoImperial,
    title: "Paço Imperial",
    description: `  O imponente sobrado, em estilo colonial, propriedade da FAMÍLIA LEMOS ARAÚJO, foi
                    construído em fins do século XVIII. Em 14 de Outubro de 1859, foi transformado em “Paço
                    Imperial” para acolher, sua Majestade, o Imperador do Brasil, D. PEDRO II, o qual vindo da
                    Bahia com destino a Cidade de Paulo Afonso, desembarcou e hospedou-se na Cidade de
                    Penedo. Por um pequeno período Penedo, “Mui Nobre e Sempre Leal”, foi Sede do
                    Governo Imperial. O imaginário popular conta, o ilustre visitante teria usa a seguinte
                    expressão: “o local é muito bonito e creio que deveria estar aqui a capital da província.
                    ”Antes de seguir viagem, o Imperedor D Pedro II, assistiu missa na Igreja de Nossa Senhora
                    da Corrente e no dia 16 de outubro de 1859, o “Vapor Pirajara” sobe o Rio São Francisco
                    levando em seu bojo o Imperador Pedro II.`
  },
  {
    src: RosarioDosPretos,
    title: "Igreja Nossa Sra. Rosário dos Pretos",
    description: `  Nos primórdios do século XVII, escravos da Vila do Penedo do Rio São Francisco, em
                    honra de Santa Efigênia, construíram uma Capela no exato local onde se encontra o
                    Templo dedicado a Nossa Senhora do Rosário dos Pretos.
                    Pelo ano de 1634, a Irmandade de Nossa Senhora do Rosário dos Homens Pretos, através
                    de seus integrantes “Os Homens Pretos” (escravos negros e libertos), deram início a
                    construção da Capela-mór, e assim, em 1816, foram construídas a fachada e a Torre
                    (esquerda).
                    Em 29 de junho de 1819, o Padre ANTÔNIO CRAVEIRO DE BARROS LEITE, celebrou na
                    referida Igreja sua primeira missa, ele era professor jubilado de gramática latina na vila e
                    benfeitor da Irmandade nossa Sra. Do Rosário dos pretos.`
  },
  {
    src: Teatro,
    title: "Teatro 7 de Setembro",
    description: `  O teatro foi inaugurado em 07 de setembro de 1884. O local foi construído em um terreno
                    doado pelos franciscanos, para dar vida ao primeiro teatro de Alagoas.
                    Hoje é mantido e administrado pela Prefeitura Municipal de Penedo e foi tombado pelo
                    Patrimônio Histórico e Artístico Nacional. No local, não há eco. A construção foi projetada
                    para que as vozes dos atores não permanecessem no ar.
                    Em cima do prédio, na fachada, quatro deusas “guardam” a estrutura: Euterpe, Deusa da
                    Música; Calíope, Deusa da Arte; Melpômene, Deusa da Poesia; e Terpsícore, Deusa da
                    Dança.
                    Mesmo com a estrutura antiga e carente de manutenção, espetáculos ainda são encenados
                    no palco do teatro mais antigo de Alagoas.`
  },
  {
    src: Correntes,
    title: "Igreja Nossa Sra. das Correntes",
    description: `  A Igreja Nossa Senhora das Correntes de Penedo, localizada em Alagoas, tem sua história
                    ligada à devoção à Nossa Senhora das Correntes, trazida pelos portugueses no século
                    XVIII. A construção da igreja iniciou-se em 1766 e foi finalizada em 1800. A igreja foi palco
                    de importantes eventos históricos, como a assinatura da Ata de Emancipação Política de
                    Alagoas em 1817. Em 1938, foi tombada como patrimônio histórico e artístico nacional.
                    Hoje, a igreja continua sendo um importante ponto turístico e religioso da cidade de Penedo.`
  },
  {
    src: CasaDaAposentadoria,
    title: "Casa da Aposentadoria",
    description: `  A casa de a Aposentadoria velha, é edificada para servir de hospedagem aos ouvidores
                    (juízes postos pelos donatórios, o paço da câmara municipal estabeleceu-se nela, e
                    mandou construir outro sobrado (atual prefeitura) para aposentadoria dos ouvidores.
                    Ela foi construída entre 1781-1782, a qual foi administrada na ocasião pelo jacinto soares
                    de Souza. Chegou um momento em que a casa de aposentadoria, já não servia mais para a
                    acomodação dos ouvidores, que era sua atividade fim, e com isso, foi construída a atual
                    prefeitura`
  },
  {
    src: Convento,
    title: "Convento",
    description: `  O Convento de Santa Maria dos Anjos, foi fundado em 1685 por frades capuchinhos
                    italianos. O edifício passou por diversas reformas ao longo dos anos, e hoje é considerado
                    um importante patrimônio histórico e cultural da região. O convento possui uma arquitetura
                    imponente, com influências barrocas e neoclássicas, e abriga diversas obras de arte sacra,
                    incluindo pinturas, esculturas e azulejos. Durante o século XIX, o convento foi fechado e
                    convertido em hospital militar, mas foi reaberto no início do século XX e atualmente é
                    utilizado como centro cultural e espaço para eventos.`
  },
  {
    src: MercadoPublico,
    title: "Mercado Público",
    description: ` Em 01/01/1898, o Mercado Público de Penedo foi inaugurado, tendo o Supervisor do
                  Convento Franciscano da Santa Maria dos Anjos, Frei ANTÔNIO DE SÃO CAMILLO
                  LELLIS, realizado a benção do Estabelecimento Público, o qual foi ocupado pelos seus
                  respectivos usuários. Dotado de traçado horizontal, o monumento se destaca na região que
                  está solidificado, pela sua rigidez do seu formato. Em suas fachadas, as portas centrais dão
                  acesso ao enorme corredor que se alonga por entre seus arcos perfeitos, que demarca
                  internamente o imóvel. Além disso, as citadas portas se sobressaem pelos avantajados
                  tamanhos, em arco perfeito, acompanhadas pelas outras, seguindo à mesma linha, em
                  ritmo arquitetônico repetitivo e desprovido de sobejo. Encimando a identificação em toda a
                  sua extensão, uma platibanda do século XIX conclui os procedimentos arquitetônicos na
                  mesma linha de austeridade e funcionalidade que distingui o prédio.`,
  },
  {
    src: SantaCruz,
    title: "Igreja da Santa Cruz",
    description: `  Foi construída em 1818 em cima do terreiro africano.
                    Conta a lenda que um visitante, que frequentava o terreiro em dia de culto, tinha os pés de
                    cabra. Então para exorcizar o local, foi construída uma capela em homenagem a Santa
                    Cruz.
                    Igreja de Santa Cruz do Cortume tem a imagem do Bom Jesus dos Navegantes, que é
                    considerada milagrosa, que é o grande destaque da igreja. A imagem foi esculpida por
                    Cesário Procópio dos Mártyres para a celebração religiosa, que é considerada a maior da
                    região do Baixo São Francisco que acontece desde 1884.
                    Igreja de Santa Cruz do Cortume é também conhecida de Igreja do Bom Jesus dos
                    Navegantes ou Igreja da Santa Cruz.`
  },
  {
    src: Catedral,
    title: "Catedral",
    description: `  Catedral Diocesana é uma das belezas de Penedo que vai passar por revitalização
                    erguendo-se imponente às margens do Rio São Francisco, a cidade de Penedo é um
                    relicário vivo. Entre os patrimônios do município está a Catedral Diocesana.
                    Criada no século XVII, a Catedral possui privilegiada localização, pois tem à sua frente à
                    Praça Barão de Penedo e na lateral, a Praça Pe. Veríssimo. Por muitos anos congregou os
                    principais atos litúrgicos da fé católica da região. Mas desde 2007 que, devido a problemas
                    estruturais, o templo está fechado.
                    O secretário de Estado da Cultura, Osvaldo Viégas; o bispo Dom Valério Breda; o deputado
                    Givaldo Carimbão e representantes do Instituto do Patrimônio Histórico e Artístico Nacional
                    (Iphan) e da prefeitura de Penedo reuniram-se na última semana para tratar sobre as obras
                    de reestruturação da Igreja.`
  },
  {
    src: CasaDoPenedo,
    title: "Casa do Penedo",
    description: `  O Museu Casa do Penedo é um espaço dedicado à história da cidade de Penedo, em
                    Alagoas, e à história do Barão de Penedo, conhecido diplomático no Império e na
                    República. Fundada em 1992, pelo médico Francisco Alberto Sales, um penedense que
                    investiu parte de sua fortuna pessoal na fundação cultural destinada a preservar a memória
                    de sua terra natal. Localizado na Rua João Pessoa, número 126, o museu possui biblioteca
                    especializada na história do lugar, arquivo iconográfico com cerca de cinco mil peças, além
                    de arquivo histórico documental informatizado. Um moderno auditório está destinado para
                    palestras e eventos culturais e conta também com salas para exposições, sendo que uma
                    delas de caráter permanente com componentes referentes a fatos históricos ocorridos na
                    cidade alagoana.`
  },
  {
    src: OratorioDaForca,
    title: "Oratório da Forca",
    description: `  A história do Oratório da Forca em Penedo narra a triste história de um homem acusado
                    injustamente de um crime e condenado à forca. Antes de ser executado, ele teria rezado
                    fervorosamente para Nossa Senhora das Dores, e prometido construir um oratório em sua
                    homenagem caso fosse salvo da morte. Milagrosamente, ele foi absolvido do crime e
                    cumpriu sua promessa, construindo o oratório em um local próximo ao local de sua
                    execução. O oratório tornou-se um local de devoção popular e é visitado até hoje por fiéis
                    em busca de proteção e graças.`
  },
];

export function ArtItem() {
  const params = useParams();
  const { id } = params;
  const index = parseInt(id) - 1;

  // const imgArtItem = src === 'caminho/para/imagem1.jpg' ? 'imagem-1' : 'outra-imagem';
  // const description = description === 'caminho/para/imagem1.jpg' ? 'imagem-1' : 'outra-imagem';

  return (
    <>
      <NavBar />
      <Title title={itemsData[index].title} />
      <div className={S.divArtItemAll}>
        <div className={S.divArtItem}>
          <img src={itemsData[index].src} className={S.ImgArtItem} />
          <p className={S.descriptionArtItem}>
            {itemsData[index].description}{" "}
          </p>
        </div>
      </div>
    </>
  );
}
