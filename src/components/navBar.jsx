import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from "../../public/imgLogo.png"
import "./styles/navbar.css"
import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar expand="lg" className='navbar-head'>
            <Container className='navbar-container'>
                <NavLink to={"/sempervirens/"}>
                    <Navbar.Brand><img className='imgLogo' src={imgLogo} alt="" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/sempervirens/"} className="nav-link">Inicio</NavLink>
                        <NavLink to={"/sempervirens/products/"} className="nav-link">Productos</NavLink>
                        <NavLink to={"/sempervirens/taller"} className="nav-link">Taller</NavLink>
                        <NavLink to={"/sempervirens/contacto"} className="nav-link">Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar