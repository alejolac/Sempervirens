import { Link } from "react-router-dom"
import EastIcon from '@mui/icons-material/East'

const imgFondo = "/imgFondo.jpg"

const HeroSection = () => {
    return (
        <div className="containerBackground">
            <div style={{ backgroundImage: `url(${imgFondo})` }} className="imgFondo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="containtMain">
                                <span className="hero-label">Bienvenidos a Sempervirens</span>
                                <h1>¡Haz crecer un jardín,<br />haz crecer tus sueños!</h1>
                                <p className="my-4">
                                    Descubrí la magia de la naturaleza y aprendé a crear tu propio oasis. En Sempervirens, te damos las herramientas para transformar cada rincón de tu espacio.
                                </p>
                                <Link to="/contacto" className="hero-btn">
                                    Contáctenos <EastIcon fontSize="small" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
