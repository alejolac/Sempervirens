import kit from "/category-kit.png"
import plant from "/category-plant.png"
import terrario from "/category-terrario3.png"
import cajon from "/category-cajon.png"
import { Link } from "react-router-dom"
import EastIcon from '@mui/icons-material/East'

const categories = [
    { label: "Plantas",    img: plant,    to: "/products/plantas"   },
    { label: "Kits",       img: kit,      to: "/products/kits"      },
    { label: "Cajoncitos", img: cajon,    to: "/products/cajoncito" },
    { label: "Terrarios",  img: terrario, to: "/products/terrarios" },
]

const Categories = () => {
    return (
        <section className="cat-section">
            <div className="container">
                <div className="cat-header">
                    <span className="cat-label">Categorías</span>
                    <h2 className="cat-title">Lo Más Popular</h2>
                    <p className="cat-subtitle">Encontrá lo que buscás y llevalo directo a tu hogar</p>
                </div>
                <div className="cat-grid">
                    {categories.map(({ label, img, to }) => (
                        <Link key={label} className="cat-card" to={to}>
                            <div className="cat-card-img">
                                <img src={img} alt={label} />
                            </div>
                            <h3 className="cat-card-label">{label}</h3>
                            <span className="cat-card-cta">
                                Ver productos <EastIcon fontSize="inherit" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
