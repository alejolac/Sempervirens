import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom"

const talleres = [
    {
        num: "01",
        icon: "🌱",
        title: "Huerta",
        desc: "Cultivá en casa de forma simple. Desde la preparación del suelo hasta tu primera cosecha.",
    },
    {
        num: "02",
        icon: "🌿",
        title: "Plantas Aromáticas",
        desc: "Técnicas para cultivar aromáticas en el hogar y sacarles el máximo provecho en cocina y bienestar.",
    },
    {
        num: "03",
        icon: "🌸",
        title: "Flores",
        desc: "Elegí, plantá y mantené flores de temporada para embellecer cualquier rincón de tu espacio.",
    },
]

const TallerHome = () => {
    return (
        <section className="th-section">
            <div className="container">
                <div className="row th-row">

                    <div className="col-lg-5 th-left">
                        <span className="th-label">Nuestro Taller</span>
                        <h2 className="th-headline">
                            Un Espacio<br />Para Aprender
                        </h2>
                        <p className="th-desc">
                            Si te gustan las plantas, esta es tu oportunidad. Aprendé sobre cuidados, poda, reproducción, árboles, trepadoras y mucho más. Con instructores que realmente saben.
                        </p>
                        <Link to="/taller" className="th-btn">
                            Ver Talleres <EastIcon fontSize="small" />
                        </Link>
                    </div>

                    <div className="col-lg-6 offset-lg-1 th-right">
                        {talleres.map(({ num, icon, title, desc }) => (
                            <div key={num} className="th-card">
                                <div className="th-card-num">{num}</div>
                                <div className="th-card-content">
                                    <div className="th-card-header">
                                        <span className="th-card-icon">{icon}</span>
                                        <h3 className="th-card-title">{title}</h3>
                                    </div>
                                    <p className="th-card-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TallerHome
