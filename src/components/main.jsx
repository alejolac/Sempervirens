import imgFondo from "../../public/imgFondo.jpg"

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
                                <button style={{width: "140px", height: "50px"}} className="btn btn-success btnMain" type="button">Contáctenos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;