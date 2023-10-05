import "./styles/aboutRow.css"
import img1 from "../../public/aboutRow1.png"
import img2 from "../../public/aboutRow2.png"
import img3 from "../../public/aboutRow3.png"

const aboutRow = () => {
    return (
        <div className="aboutSection">
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-lg-3">
                        <div className="about">
                            <div className="iconAbout ms-4 ">
                                <img src={img1} alt="" />
                            </div>
                            <div className="textAbout ms-4 mt-3">
                                <h4>Personal Capacitado</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, numquam! Culpa, nesciunt ea
                                    quos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about">
                            <div className="iconAbout ms-4 ">
                                <img src={img2} alt="" />
                            </div>
                            <div className="textAbout ms-4 mt-3">
                                <h4>Precios Accesibles</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, numquam! Culpa, nesciunt ea
                                    quos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about">
                            <div className="iconAbout ms-4">
                                <img src={img3} alt="" />
                            </div>
                            <div className="textAbout ms-4 mt-3">
                                <h4>Servicios de Calidad</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, numquam! Culpa, nesciunt ea
                                    quos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutRow