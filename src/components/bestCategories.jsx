import img from "../../public/imgCategoriaTest.png"
import img2 from "../../public/categoriaPopularTitle.png"
import kit from "/category-kit.png"
import plant from "/category-plant.png"
import seed from "/category-seed.png"
import cajon from "/category-cajon.png"
import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <div className="categoriesSection">
            <div style={{ backgroundColor: "#01402E" }} className="backgroundFeatured">
                <div className="widthFeatured">
                    <div className="imgTitleFeatured">
                        <img src={img2} alt="" />
                    </div>
                    <div className="titleFeatured text-center">
                        <h2>Categorias mas Populares</h2>
                    </div>
                    <div className="categorysFeatured mt-5">
                        <div className="d-flex justify-content-center cat" style={{ gap: "60px" }}>
                            <Link to={"/sempervirens/products/plantas"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={plant} alt="" />
                                    </div>
                                    <h4 style={{textDecoration: "none", color:"black"}} className="text-center mt-2 titleCat">Plantas</h4>
                                </div>
                            </Link>
                            <Link to={"/sempervirens/products/semillas"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={seed} alt="" />
                                    </div>
                                    <h4 style={{textDecoration: "none", color: "black"}} className="text-center mt-2 titleCat">Semillas</h4>
                                </div>
                            </Link>
                            <Link to={"/sempervirens/products/kits"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={kit} alt="" />
                                    </div>
                                    <h4 style={{textDecoration: "none", color: "black"}} className="text-center mt-2 titleCat">Kits</h4>
                                </div>
                            </Link>
                            <Link to={"/sempervirens/products/cajoncito"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={cajon} alt="" />
                                    </div>
                                    <h4 style={{textDecoration: "none", color: "black"}} className="text-center mt-2 titleCat">Cajoncitos</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;