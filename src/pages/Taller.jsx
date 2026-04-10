import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/footer.jsx"
import NavBar from "../components/navBar.jsx"
import EastIcon from '@mui/icons-material/East'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import SchoolIcon from '@mui/icons-material/School'

const talleres = [
    {
        id: 'jardineria',
        tag: 'Jardinería',
        emoji: '🌱',
        title: 'Taller de Jardinería',
        description: 'Si te gustan las plantas esta es una excelente oportunidad para conocer más sobre ellas, sus cuidados, dónde ubicarlas correctamente, en qué momento podarlas, cómo reproducirlas y mucho más.',
        aprenderAs: [
            'Cuidados básicos y avanzados de plantas de interior y exterior',
            'Cómo ubicar, podar y reproducir correctamente tus plantas',
            'Identificación de árboles, arbustos y trepadoras',
            'Manejo y mantenimiento del césped',
            'Técnicas de riego y nutrición según la especie',
        ],
        duracion: '4 sesiones de 2 horas',
        modalidad: 'Presencial — Montevideo',
        nivel: 'Todos los niveles',
        precio: 'Consultar precio',
        imagen: '/programa.webp',
        tieneFlyer: true,
        imageAlt: 'Programa Taller de Jardinería',
    },
    {
        id: 'huerta',
        tag: 'Huerta',
        emoji: '🪴',
        title: 'Taller de Huerta Orgánica',
        description: 'En nuestro taller de huerta aprenderás sobre distintos cultivos, sus épocas de siembra y cuidados esenciales. Exploraremos la importancia de nutrir el suelo, los beneficios del compostaje y técnicas para un manejo ecológico de la huerta.',
        aprenderAs: [
            'Planificación y diseño de una huerta en casa',
            'Calendario de siembra según la temporada',
            'Preparación y nutrición natural del suelo',
            'Compostaje y producción de abono orgánico',
            'Manejo ecológico sin agroquímicos',
        ],
        duracion: '4 sesiones de 2 horas',
        modalidad: 'Presencial — Montevideo',
        nivel: 'Principiante',
        precio: 'Consultar precio',
        imagen: '/huerta1.jpg',
        tieneFlyer: false,
        imageAlt: 'Taller de Huerta Orgánica',
    },
]

const Taller = () => {
    const [modalImg, setModalImg] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar />

            {/* Hero */}
            <section className="tl-hero">
                <div className="container">
                    <div className="tl-hero-content">
                        <span className="tl-hero-label">🌿 Talleres</span>
                        <h1 className="tl-hero-title">Aprendé,<br />crecé y cultivá</h1>
                        <p className="tl-hero-subtitle">
                            Talleres presenciales en Montevideo para conectarte con la naturaleza,
                            aprender a cuidar plantas y crear tu propia huerta orgánica.
                        </p>
                        <Link to="/contacto" className="tl-hero-cta">
                            Consultar inscripción <EastIcon fontSize="small" />
                        </Link>
                    </div>
                </div>
                <div className="tl-hero-deco" aria-hidden="true">
                    <span>🌿</span>
                    <span>🪴</span>
                    <span>🌱</span>
                </div>
            </section>

            {/* Stats */}
            <div className="tl-stats">
                <div className="container">
                    <div className="tl-stats-grid">
                        <div className="tl-stat">
                            <span className="tl-stat-num">2</span>
                            <span className="tl-stat-label">Talleres disponibles</span>
                        </div>
                        <div className="tl-stat">
                            <span className="tl-stat-num">4</span>
                            <span className="tl-stat-label">Sesiones por taller</span>
                        </div>
                        <div className="tl-stat">
                            <span className="tl-stat-num">8h</span>
                            <span className="tl-stat-label">Duración total</span>
                        </div>
                        <div className="tl-stat">
                            <span className="tl-stat-num">100%</span>
                            <span className="tl-stat-label">Práctico y presencial</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Talleres */}
            <section className="tl-section">
                <div className="container">
                    {talleres.map((taller, index) => (
                        <div key={taller.id} className={`tl-card ${index % 2 !== 0 ? 'tl-card--reverse' : ''}`}>
                            <div className="tl-card-img-wrap">
                                <img
                                    src={taller.imagen}
                                    alt={taller.imageAlt}
                                    className={taller.tieneFlyer ? 'tl-card-img--flyer' : ''}
                                    onClick={taller.tieneFlyer ? () => setModalImg(taller.imagen) : undefined}
                                    style={taller.tieneFlyer ? { cursor: 'zoom-in' } : {}}
                                />
                                {taller.tieneFlyer && (
                                    <span className="tl-flyer-hint">Click para ampliar</span>
                                )}
                            </div>
                            <div className="tl-card-body">
                                <span className="tl-card-tag">{taller.emoji} {taller.tag}</span>
                                <h2 className="tl-card-title">{taller.title}</h2>
                                <p className="tl-card-desc">{taller.description}</p>

                                <div className="tl-card-aprende">
                                    <p className="tl-aprende-titulo">¿Qué vas a aprender?</p>
                                    <ul className="tl-aprende-list">
                                        {taller.aprenderAs.map((item, i) => (
                                            <li key={i}>
                                                <CheckCircleOutlineIcon fontSize="small" className="tl-check-icon" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="tl-card-info">
                                    <span className="tl-info-chip">
                                        <AccessTimeIcon fontSize="inherit" /> {taller.duracion}
                                    </span>
                                    <span className="tl-info-chip">
                                        <PlaceIcon fontSize="inherit" /> {taller.modalidad}
                                    </span>
                                    <span className="tl-info-chip">
                                        <SchoolIcon fontSize="inherit" /> {taller.nivel}
                                    </span>
                                </div>

                                <div className="tl-card-footer">
                                    <span className="tl-card-precio">{taller.precio}</span>
                                    <Link to="/contacto" className="tl-card-btn">
                                        Inscribirme <EastIcon fontSize="small" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA final */}
            <section className="tl-cta-section">
                <div className="container">
                    <div className="tl-cta-box">
                        <h2>¿Tenés alguna duda?</h2>
                        <p>Escribinos y te contamos todo sobre los próximos talleres, fechas y disponibilidad.</p>
                        <Link to="/contacto" className="tl-cta-btn">
                            Contactar <EastIcon fontSize="small" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            {modalImg && (
                <div className="modal-overlay" onClick={() => setModalImg(null)}>
                    <div className="modalIMG taller-modal">
                        <img className="large-image-taller" src={modalImg} alt="Flyer taller" />
                    </div>
                    <span className="close-modal-x">&times;</span>
                </div>
            )}
        </>
    )
}

export default Taller
