import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from "../../public/imgLogo.png"
import "./styles/navbar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <Navbar expand="lg" className='navbar-head'>
            <Container className='navbar-container'>
                <Navbar.Brand href="#home"><img className='imgLogo' src={imgLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item href="#home">
                            <Link to={"/"}>Inicio</Link>
                        </Nav.Item>
                        <Nav.Item href="#home">
                            <Link to={"/"}>Inicio</Link>
                        </Nav.Item>
                        <Nav.Item href="#home">
                            <Link to={"/"}>Inicio</Link>
                        </Nav.Item>
                        <Nav.Item href="#home">
                            <Link to={"/"}>Inicio</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar