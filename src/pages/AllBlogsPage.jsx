import { useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/navBar.jsx"
import Footer from "../components/footer.jsx"
import Data from "../assets/blog.jsx"
import EastIcon from '@mui/icons-material/East'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'

const AllBlogsPage = () => {
    const sorted = [...Data].sort((a, b) => new Date(b.parseDate) - new Date(a.parseDate))
    const featured = sorted[0]
    const rest = sorted.slice(1)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar />

            <section className="ab-hero">
                <div className="container">
                    <div className="ab-hero-content">
                        <span className="ab-hero-label">
                            <LocalFloristIcon fontSize="inherit" /> Blog
                        </span>
                        <h1 className="ab-hero-title">Naturaleza,<br />consejos & plantas</h1>
                        <p className="ab-hero-subtitle">
                            Explorá el mundo verde con nosotros. Cuidados, tips, curiosidades y mucho más.
                        </p>
                    </div>
                </div>
                <div className="ab-hero-deco" aria-hidden="true">
                    <span>🌿</span>
                    <span>🌱</span>
                    <span>🍃</span>
                </div>
            </section>

            <section className="ab-section">
                <div className="container">

                    <Link to={`/blog/${featured.id}`} className="ab-featured">
                        <div className="ab-featured-img">
                            <img src={featured.imgPortada} alt={featured.title} />
                        </div>
                        <div className="ab-featured-body">
                            <span className="vb-label">✦ Última publicación</span>
                            <span className="ab-featured-date">{featured.date}</span>
                            <h2 className="ab-featured-title">{featured.title}</h2>
                            <p className="ab-featured-desc">{featured.description}</p>
                            <span className="ab-featured-cta">
                                Leer artículo <EastIcon fontSize="small" />
                            </span>
                        </div>
                    </Link>

                    {rest.length > 0 && (
                        <>
                            <div className="ab-more-header">
                                <h3 className="ab-more-title">Más publicaciones</h3>
                            </div>
                            <div className="ab-grid">
                                {rest.map(post => (
                                    <Link key={post.id} className="vb-card" to={`/blog/${post.id}`}>
                                        <div className="vb-card-img-wrap">
                                            <img src={post.imgPortada} alt={post.title} />
                                        </div>
                                        <div className="vb-card-body">
                                            <span className="vb-card-date">{post.date}</span>
                                            <h3 className="vb-card-title">{post.title}</h3>
                                            <p className="vb-card-desc">{post.description}</p>
                                            <span className="vb-card-leer">
                                                Leer más <EastIcon fontSize="inherit" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                </div>
            </section>

            <Footer />
        </>
    )
}

export default AllBlogsPage
