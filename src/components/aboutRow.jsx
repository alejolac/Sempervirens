import "./styles/aboutRow.css"
import img1 from "../../public/aboutRow1.png"
import img2 from "../../public/aboutRow2.png"
import img3 from "../../public/aboutRow3.png"

const aboutRow = () => {
    return (
        <div className="aboutSection">
            <div className="container">
                <div className="row align-items-stretch d-flex justify-content-around">
                    <div className="about col-lg-3">
                        <div className="iconAbout ms-4 ">
                            <img src={img1} alt="" />
                        </div>
                        <div className="textAbout mt-3">
                            <h4>Personal Capacitado</h4>
                            <p>Con amplia experiencia en el cuidado y cultivo de plantas, ofrecemos conocimientos especializados para ayudarte a desarrollar tus habilidades en jardinería.</p>
                        </div>
                    </div>
                    <div className="about col-lg-3">
                        <div className="iconAbout ms-4 ">
                            <img src={img2} alt="" />
                        </div>
                        <div className="textAbout mt-3">
                            <h4>Precios Accesibles</h4>
                            <p>Ofrecemos talleres y servicios de calidad a precios competitivos, para que puedas aprender sin preocuparte por el costo.</p>
                        </div>
                    </div>
                    <div className="about col-lg-3">
                        <div className="iconAbout ms-4">
                            <img src={img3} alt="" />
                        </div>
                        <div className="textAbout mt-3">
                            <h4>Atención Personalizada</h4>
                            <p>Nos adaptamos a tus necesidades y nivel de conocimiento, asegurándonos de que cada experiencia sea enriquecedora y ajustada a tus objetivos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default aboutRow