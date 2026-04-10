import Title from "./titleSection.jsx"
import data from "../assets/plants.jsx"
import ProductCard from "./ProductCard.jsx"
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize.js"
import EastIcon from '@mui/icons-material/East';

const BASE = import.meta.env.BASE_URL + "productos/"

const featured = data[0]
const stack = [data[1], data[2], data[3]]

const ProductosMain = () => {
    const isWideScreen = useWindowSize() > 768;

    return (
        <div className="featuredProducts">
            <div className="container back-green mb-5">
                <Title txt="Productos Destacados" />

                {isWideScreen ? (
                    <div className="fp-grid">

                        {/* Card grande izquierda */}
                        <Link to={`/products/item/${featured.id}`} className="fp-large">
                            <img
                                src={`${BASE}${featured.image[0]}`}
                                alt={featured.name}
                                className="fp-large-img"
                            />
                            <div className="fp-large-overlay">
                                <span className="fp-badge">Destacado</span>
                                <div className="fp-large-bottom">
                                    <h3 className="fp-large-name">{featured.name}</h3>
                                    <div className="fp-large-footer">
                                        <span className="fp-large-price">$ {featured.price}</span>
                                        <span className="fp-large-cta">
                                            Ver más <EastIcon fontSize="small" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Stack de 3 cards derecha */}
                        <div className="fp-stack">
                            {stack.map((item) => (
                                <Link key={item.id} to={`/products/item/${item.id}`} className="fp-small">
                                    <div className="fp-small-img-wrap">
                                        <img
                                            src={`${BASE}${item.image[0]}`}
                                            alt={item.name}
                                            className="fp-small-img"
                                        />
                                    </div>
                                    <div className="fp-small-info">
                                        <span className="fp-small-cat">{item.category[0]}</span>
                                        <h4 className="fp-small-name">{item.name}</h4>
                                        <div className="fp-small-footer">
                                            <span className="fp-small-price">$ {item.price}</span>
                                            <EastIcon className="fp-small-arrow" fontSize="small" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="main-products-phone">
                        {[featured, ...stack].map((item) => (
                            <Link key={item.id} to={`/products/item/${item.id}`} className="pc-link">
                                <ProductCard
                                    img={`${BASE}${item.image[0]}`}
                                    title={item.name}
                                    text={item.description}
                                    price={item.price}
                                />
                            </Link>
                        ))}
                    </div>
                )}

                <div className="fp-ver-todo">
                    <Link to="/products" className="fp-ver-todo-btn">
                        Ver todos los productos <EastIcon fontSize="small" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductosMain
