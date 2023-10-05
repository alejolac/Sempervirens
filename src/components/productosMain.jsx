import Title from "./titleSection.jsx"
import img from "../../public/img1.jpg";
import Cards from "./cards.jsx"



const ProductosMain = () => {
    return (
        <div className="featuredProducts">
            <div className="container back-green mb-5">
                <Title txt={"Productos Destacados"} />
                <div className="row my-5 align-items-center pt60">
                    <div className="col-12 col-lg-6 text-center">
                        <img src={img} alt="Cajon para tres plantas" />
                    </div>
                    <div className="col-lg-6">
                        <h3 className=" title text-center">
                            Cajón Para Plantas
                        </h3>
                        <p className="mt-4 text-center text-dest-media">
                            Cajón en madera rustica o multiplaca con tres divisiones, Ideal para aromáticas o florales con el tamaño
                            justo para la cocina o ventana.
                            Cada división cuenta con una pequeña pizarra para indicar el nombre de la planta o dejar un lindo mensaje
                        </p>
                        <div className="infoMore">
                            <a className="btn btn-success " href="">Mas informacion</a>
                        </div>
                    </div>
                </div>
                <div className="row pt60 column-media">
                    <div className="col-md-6 col-lg-3 col-12 my-2">
                        <div className="productFeat">
                            <a className="featureLinkCard">
                                <Cards />
                            </a>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-3 col-12 my-2">
                        <div className="productFeat">
                            <a href="" className="featureLinkCard">
                                <Cards />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 my-2 ">
                        <div className="productFeat">
                            <a href="" className="featureLinkCard">
                                <Cards />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-6 col-lg-3 col-12">
                        <div className="my-5 btnViewAll">
                            <button className="btn btn-success" type="button">Ver todo</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 dn">
                        <div className="my-5 btnViewAll">
                            <button className="btn btn-success" type="button">Ver todo</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 dn">
                        <div className="my-5 btnViewAll">
                            <button className="btn btn-success" type="button">Ver todo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductosMain