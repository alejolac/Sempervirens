import Logo from "../../public/imgLogo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from "react-router-dom";
import { useState } from "react"
// Importa Link desde React Router si estás utilizando enlaces para la navegación

const Footer = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 675);
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/sempervirens">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="footer-nav">
                    <ul >
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/taller">Taller</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com/sempervirensuy" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/sempervirensuy/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </div>
                <div className="footer-contact">
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
                        <p>
                            Número de contacto: {isWideScreen ? null : <br />}+598 98 471 194
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=598099911202" target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
                            <ChatIcon style={{fontSize: "20px"}}/>
                        </a>
                    </div>
                    <p style={{textAlign: "center"}}>Correo electrónico: sempervirens@sempervirens.com</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer