import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import S from './styles.module.scss'
import { Link } from 'react-router-dom'

function NavBar() {
  const navData = [
    {
       title:'Rocheira',
       to:'/artItem/1'
    },
    {
       title:'Paço Imperial',
       to:'/artItem/2'
    },
    {
       title:'Igreja Nossa Sra. Rosário dos Pretos',
       to:'/artItem/3'
    },
    {
       title:'Teatro 7 de Setembro',
       to:'/artItem/4'
    },
    {
       title:'Igreja Nossa Sra. das Correntes',
       to:'/artItem/5'
    },
    {
       title:'Casa da Aposentadoria',
       to:'/artItem/6'
    },
    {
       title:'Convento',
       to:'/artItem/7'
    },
    {
       title:'Mercado Público',
       to:'/artItem/8'
    },
    {
       title:'Igreja da Santa Cruz',
       to:'/artItem/9'
    },
    {
       title:'Catedral',
       to:'/artItem/10'
    },
    {
       title:'Casa do Penedo',
       to:'/artItem/11'
    },
    {
       title:'Oratório da Forca',
       to:'/artItem/12'
    },
 ]

  return (
    <Navbar expand="lg" className={S.Navbar}>
      <Container>
        <Link to="/" className={S.Link}>
          <Navbar.Brand>Mostra TecCultura</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={S.Link}>
              <Nav>Home</Nav>
            </Link>
            <Link className={S.Link}>
              <Nav>Realidade Aumentada</Nav>
            </Link>
            <NavDropdown className={S.LinkDropDownTitle} title="Conteúdo Tradicional" id="basic-nav-dropdown">
              <Link to='/arts' className={S.LinkDropDown}><Nav>Pontos Turísticos</Nav></Link>
              <NavDropdown.Divider />
              {navData.map((item, index) => <Link key={index} to={item.to} className={S.LinkDropDown}><Nav>
                {item.title}
              </Nav></Link>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
