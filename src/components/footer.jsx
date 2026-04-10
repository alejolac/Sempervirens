import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";

const Logo = "/imgLogo.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={Logo} alt="Sempervirens logo" />
                    </Link>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/taller">Taller</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
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
                    <div className="footer-contact-row">
                        <p>Número de contacto: +598 98 471 194</p>
                        <a href="https://api.whatsapp.com/send?phone=59898471194" target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
                            <WhatsAppIcon style={{ fontSize: "20px" }} />
                        </a>
                    </div>
                    <p>
                        <a href="mailto:sempervirens@sempervirens.com" className="footer-email">
                            sempervirens@sempervirens.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer-copy">
                © 2024 Sempervirens. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer
