import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./styles/navbar.css"

const imgLogo = "/imgLogo.png"

const NavBar = () => {
    return (
        <Navbar expand="lg" className='navbar-head'>
            <Container className='navbar-container'>
                <NavLink to={"/"}>
                    <Navbar.Brand><img className='imgLogo' src={imgLogo} alt="Sempervirens logo" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={"/"} className="nav-link">Inicio</NavLink>
                        <NavLink to={"/products"} className="nav-link">Productos</NavLink>
                        <NavLink to={"/taller"} className="nav-link">Taller</NavLink>
                        <NavLink to={"/blog"} className="nav-link">Blog</NavLink>
                        <NavLink to={"/contacto"} className="nav-link">Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
