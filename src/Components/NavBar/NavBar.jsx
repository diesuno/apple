import  Navbar  from "react-bootstrap/Navbar"
import  Container from "react-bootstrap/Container"
import  Nav  from "react-bootstrap/Nav"
import { Carrito } from "../Carrito/Carrito"
import  {Link}  from "react-router-dom"
import "./NavBar.css"







const NavBar = () => {

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className='text-white nav1 nav' to="/">MacKnow</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link className='text-white nav2 nav' to='/categoria/iphone'>iPhone</Link>
                  <Link className='text-white nav3 nav' to='/categoria/mac'>Mac</Link>
                </Nav>
                <Nav>
                <Link to="/cart">
                  <Carrito/>
                </Link> 
                </Nav>
              </Navbar.Collapse>
            </Container>
         </Navbar>
         
        
         </>
    )
}

export default NavBar
