import Title from "./titleSection.jsx"
import img from "../../public/img1.jpg";
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"
import Button from '@mui/material/Button';



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
                    <div className="col-md-6 col-lg-4 col-12 my-2">
                        <a className="featureLinkCard">
                            <Card img={data[1].image[0]} title={data[1].name} text={data[1].description} price={data[1].price} />
                        </a>
                    </div>
                    <div className=" col-md-6 col-lg-4 col-12 my-2">
                        <a href="" className="featureLinkCard">
                            <Card img={data[2].image[0]} title={data[2].name} text={data[2].description} price={data[2].price} />
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 my-2 ">
                        <a href="" className="featureLinkCard">
                            <Card img={data[0].image[1]} title={data[0].name} text={data[0].description} price={data[0].price} />
                        </a>
                    </div>
                </div>
                <div className="my-4 col-12 btn-home">
                    <Button style={{ backgroundColor: "#01996D", width: "100%" }} size="large" variant="contained">Ver Todo</Button>
                </div>

            </div>
        </div>
    )
}

export default ProductosMain