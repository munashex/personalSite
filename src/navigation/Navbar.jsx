import { Navbar, Container, Nav} from "react-bootstrap"
import '../App.css'
import {Link, useNavigate} from 'react-router-dom'

const Header = () => {

  let navigate = useNavigate()
    
    return (

      <Navbar bg="light" expand="lg">
       <Container>
       <Navbar.Brand> 
          <img src="munasbh.png" className="brand_image border border" 
          onClick={() => navigate('/home')} 
          />
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <div style={{padding: 20}}>
              <Link className="link"  style={{textDecoration: "none", color: "black",  paddingRight: 10}} to="/about">About</Link>
              <Link className="link" style={{textDecoration: "none", color: "black", paddingLeft: 10}} to="/projects">Projects</Link> 
              </div>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
    )

}

export default Header