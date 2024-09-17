import img from "../../public/imgCategoriaTest.png"
import img2 from "../../public/categoriaPopularTitle.png"
import kit from "/category-kit.png"
import plant from "/category-plant.png"
import terrario from "/category-terrario3.png"
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
                        <h2>Categorias <br /> mas Populares</h2>
                    </div>
                    <div className="categorysFeatured mt-5">
                        <div className="d-flex justify-content-center cat">
                            <Link className="cat-elem" to={"/products/plantas"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={plant} alt="" />
                                    </div>
                                    <h4 style={{ textDecoration: "none", color: "black" }} className="text-center mt-2 titleCat">Plantas</h4>
                                </div>
                            </Link>
                            <Link className="cat-elem" to={"/products/kits"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={kit} alt="" />
                                    </div>
                                    <h4 style={{ textDecoration: "none", color: "black" }} className="text-center mt-2 titleCat">Kits</h4>
                                </div>
                            </Link>
                            <Link className="cat-elem" to={"/products/cajoncito"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={cajon} alt="" />
                                    </div>
                                    <h4 style={{ textDecoration: "none", color: "black" }} className="text-center mt-2 titleCat">Cajoncitos</h4>
                                </div>
                            </Link>
                            <Link className="cat-elem" to={"/products/semillas"}>
                                <div className="categoryIndividual" style={{ width: "160px" }}>
                                    <div className="text-center">
                                        <img src={terrario} alt="" />
                                    </div>
                                    <h4 style={{ textDecoration: "none", color: "black" }} className="text-center mt-2 titleCat">Terrarios</h4>
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