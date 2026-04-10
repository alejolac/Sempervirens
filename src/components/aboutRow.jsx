import "./styles/aboutRow.css"

const img1 = "/aboutRow1.png"
const img2 = "/aboutRow2.png"
const img3 = "/aboutRow3.png"

const items = [
    {
        num: "01",
        img: img1,
        alt: "Equipo especializado",
        title: "Equipo Especializado",
        text: "Años de experiencia en jardinería y cultivo nos respaldan. Te guiamos con conocimiento real, no teoría.",
    },
    {
        num: "02",
        img: img2,
        alt: "Precios accesibles",
        title: "Precios Accesibles",
        text: "Calidad que no compromete tu bolsillo. Porque aprender y cultivar debe estar al alcance de todos.",
    },
    {
        num: "03",
        img: img3,
        alt: "Atención personalizada",
        title: "Atención Personalizada",
        text: "Cada persona es única. Nos adaptamos a tu espacio, ritmo y objetivos para que logres resultados reales.",
    },
]

const AboutRow = () => {
    return (
        <div className="aboutSection">
            <div className="container">
                <div className="about-header">
                    <h2 className="about-title">¿Por qué elegirnos?</h2>
                    <p className="about-subtitle">
                        Sempervirens nace de la pasión por las plantas y el aprendizaje. Te acompañamos en cada paso.
                    </p>
                </div>
                <div className="row align-items-stretch d-flex justify-content-around">
                    {items.map(({ num, img, alt, title, text }) => (
                        <div key={num} className="about col-lg-3">
                            <span className="about-num">{num}</span>
                            <div className="iconAbout">
                                <img src={img} alt={alt} />
                            </div>
                            <div className="textAbout mt-3">
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutRow
