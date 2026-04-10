import { Link } from "react-router-dom"
import Data from "../assets/blog.jsx"
import { useState, useEffect } from "react"
import EastIcon from '@mui/icons-material/East'

const Blog = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const sorted = [...Data].sort((a, b) => new Date(b.parseDate) - new Date(a.parseDate))
        setData(sorted.slice(0, 3))
    }, [])

    return (
        <section className="vb-section">
            <div className="container">
                <div className="vb-header">
                    <div>
                        <span className="vb-label">Blog</span>
                        <h2 className="vb-title">Últimas Publicaciones</h2>
                    </div>
                    <Link to="/blog" className="vb-ver-todo">
                        Ver todas <EastIcon fontSize="small" />
                    </Link>
                </div>
                <div className="vb-grid">
                    {data.length > 0 && data.map((elem) => (
                        <Link key={elem.id} className="vb-card" to={`/blog/${elem.id}`}>
                            <div className="vb-card-img-wrap">
                                <img src={elem.imgPortada} alt={elem.title} />
                            </div>
                            <div className="vb-card-body">
                                <span className="vb-card-date">{elem.date}</span>
                                <h3 className="vb-card-title">{elem.title}</h3>
                                <p className="vb-card-desc">{elem.description}</p>
                                <span className="vb-card-leer">
                                    Leer más <EastIcon fontSize="inherit" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
