import imgFondo from "../../public/imgFondo.jpg"
import Button from "@mui/material/Button"

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
                                <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim eos inventore aliquid ut
                                    quia repudiandae asperiores dolorem quae debitis voluptate </p>
                                <Button sx={{ alignSelf: "flex-start", backgroundColor: "green" }} className="btn-aplicacion" variant="contained">Contactenos</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;