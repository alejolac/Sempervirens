import Title from "./titleSection.jsx"
import img from "../../public/img1.jpg";
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"
import Button from '@mui/material/Button';

// React Route
import { Link } from "react-router-dom"

const ProductosMain = () => {
    return (
        <div className="featuredProducts">
            <div className="container back-green mb-5">
                <Title txt={"Productos Destacados"} />
                <div className="row my-5 align-items-center ">
                    <div className="col-12 col-lg-5 text-center">
                        <Link to={`/products/item/1`}>
                            <img src={img} alt="Cajon para tres plantas" />
                        </Link>
                    </div>
                    <div className="col-lg-7">
                        <h3 className=" title text-center">
                            Cajón Para Plantas
                        </h3>
                        <p className="mt-4 text-center text-dest-media">
                            Cajón en madera rustica o multiplaca con tres divisiones, Ideal para aromáticas o florales con el tamaño
                            justo para la cocina o ventana.
                            Cada división cuenta con una pequeña pizarra para indicar el nombre de la planta o dejar un lindo mensaje
                        </p>
                        <Link to={`/products/item/1`}>
                            <div className="my-4 col-12 btn-home">
                                <Button style={{ width: "100%" }} className="btn-aplicacion" size="large" variant="contained">Mas informacion</Button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row column-media">
                    <div className="col-md-6 col-lg-4 col-12 my-2">
                        <Link to={`/products/item/1`} className="featureLinkCard">
                            <Card img={process.env.PUBLIC_URL+"productos/" + data[1].image[0]} title={data[1].name} text={data[1].description} price={data[1].price} />
                        </Link>
                    </div>
                    <div className=" col-md-6 col-lg-4 col-12 my-2">
                        <Link to={`/products/item/2`} className="featureLinkCard">
                            <Card img={process.env.PUBLIC_URL+"productos/" + data[2].image[1]} title={data[2].name} text={data[2].description} price={data[2].price} />
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 my-2 ">
                        <Link to={`/products/item/3`} className="featureLinkCard">
                            <Card img={process.env.PUBLIC_URL+"productos/" + data[0].image[2]} title={data[0].name} text={data[0].description} price={data[0].price} />
                        </Link>
                    </div>
                </div>
                <Link to={"/products"}>
                    <div className="my-4 col-12 btn-home">
                        <Button style={{ width: "100%" }} className="btn-aplicacion" size="large" variant="contained">Ver Todo</Button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductosMain