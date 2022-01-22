import  Navbar  from "react-bootstrap/Navbar"
import  Container from "react-bootstrap/Container"
import  Nav  from "react-bootstrap/Nav"
import { Carrito } from "../Carrito/Carrito"





const NavBar = ({children}) => {
  console.log(children);
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">MacKnow</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#Productos">Productos</Nav.Link>
                  <Nav.Link href="#Contacto">Contacto</Nav.Link>
                  
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href="#Carrito">
                   <Carrito/>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
         </Navbar>
         {children[0]}
         </>
    )
}

export default NavBar
