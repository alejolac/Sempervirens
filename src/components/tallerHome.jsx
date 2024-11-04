import Title from "./titleSection.jsx"
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom"

const Taller = () => {
    return (
        <div className="container back-green my-5">
            <Title txt="Nuestro Taller" />
            <div className="row taller-home-head">
                <div className="taller-home-item col-lg-5">
                    <div className="mt-2">
                        <span style={{
                            fontSize: "36px",
                            fontWeight: "500",
                            color: "rgb(1 77 51)",
                        }}>Un Espacio <br /> Para Aprender</span>
                    </div>
                    <div className="taller-home-p" style={{ color: "rgb(125, 125, 125)", lineHeight: "2" }}>
                        Si te gustan las plantas esta es una excelente oportunidad para conocer más sobre ellas, sus cuidados, donde ubicarlas correctamente, en qué momento podarlas, reproducirlas y mucho más. Conocerás sobre árboles, arbustos, trepadoras,césped y una gran variedad de temas.
                        No dudes en consultarnos por mayor información.
                    </div>
                    <div className="taller-home-info">
                        <Link style={{color: "#014D33"}} to={`/taller`}>
                            <span>
                                Mas Información
                            </span>
                        </Link>
                        <div style={{ transition: "0.4s ease-in-out" }}>
                            <EastIcon color="#014D33" />
                        </div>
                    </div>
                </div>
                <div style={{ gap: "0px" }} className="taller-home-item col-lg-5">
                    <div className="taller-home-elem">
                        <div className="taller-home-index">
                            01
                        </div>
                        <div className="taller-home-sec-head">
                            <div className="taller-home-title-sec">
                                Huerta
                            </div>
                            <div>
                                Aprende a cultivar en casa de forma simple y práctica. Descubre cómo empezar una huerta, desde el suelo hasta la cosecha.
                            </div>
                        </div>
                    </div>
                    <div className="taller-home-elem">
                        <div className="taller-home-index">
                            02
                        </div>
                        <div className="taller-home-sec-head">
                            <div className="taller-home-title-sec">
                                Plantas Aromáticas
                            </div>
                            <div>
                                Conoce las mejores técnicas para cultivar y cuidar plantas aromáticas en tu hogar, y aprovecha sus beneficios en la cocina y el bienestar.
                            </div>
                        </div>
                    </div>
                    <div className="taller-home-elem">
                        <div className="taller-home-index">
                            03
                        </div>
                        <div className="taller-home-sec-head">
                            <div className="taller-home-title-sec">
                                Flores
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur velit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taller