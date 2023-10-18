import Logo from "../../public/imgLogo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// Importa Link desde React Router si estás utilizando enlaces para la navegación

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><a href="#">Enlace 1</a></li>
                        <li><a href="#">Enlace 2</a></li>
                        <li><a href="#">Enlace 3</a></li>
                        <li><a href="#">Enlace 4</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="url-de-Facebook" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="url-de-Instagram" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </div>
                <div className="footer-contact">
                    <p>Número de contacto: +1 123-456-7890</p>
                    <p>Correo electrónico: ejemplo@correo.com</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer