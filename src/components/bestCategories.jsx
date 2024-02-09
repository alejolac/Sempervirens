import img from "../../public/imgCategoriaTest.png"
import img2 from "../../public/categoriaPopularTitle.png"

const categories = () => {
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
                        <div className="d-flex justify-content-center cat" style={{gap: "60px"}}>
                            <div className="categoryIndividual" style={{ width: "140px" }}>
                                <div className="text-center">
                                    <img src={img} alt="" />
                                </div>
                                <h4 className="text-center mt-2 titleCat">Semillas</h4>
                            </div>
                            <div className="categoryIndividual" style={{ width: "140px" }}>
                                <div className="text-center">
                                    <img src={img} alt="" />
                                </div>
                                <h4 className="text-center mt-2 titleCat">Semillas</h4>
                            </div>
                            <div className="categoryIndividual" style={{ width: "140px" }}>
                                <div className="text-center">
                                    <img src={img} alt="" />
                                </div>
                                <h4 className="text-center mt-2 titleCat">Semillas</h4>
                            </div>
                            <div className="categoryIndividual" style={{ width: "140px" }}>
                                <div className="text-center">
                                    <img src={img} alt="" />
                                </div>
                                <h4 className="text-center mt-2 titleCat">Semillas</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default categories;