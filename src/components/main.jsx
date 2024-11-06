import imgFondo from "../../public/imgFondo.jpg"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div className="containerBackground">
            <div style={{
                backgroundImage: `url(${imgFondo})`
            }} className="imgFondo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-lg-7">
                            <div className="containtMain">
                                <h5 className="mt-5">Bienvenidos a Sempervirens</h5>
                                <h1 className="mt-2">¡Haz crecer un jardín, haz <br /> crecer tus sueños!</h1>
                                <p className="my-4">
                                Descubre la magia de la naturaleza y aprende a crear tu propio oasis. En Sempervirens, te damos las herramientas para transformar cada rincón de tu espacio.
                                </p>
                                <Link to={"/contacto"}>
                                    <Button sx={{ alignSelf: "flex-start", backgroundColor: "green" }} className="btn-aplicacion" variant="contained">Contactenos</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;