import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Title from "./titleSection.jsx"
import Programa1 from "/programa.webp"

import { useState } from "react"


const Taller = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [imgModal, setImgModal] = useState()
    window.scrollTo(0, 0);

    const handleImageClick = (img) => {
        setImgModal(img)
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <NavBar />
            <main className="container contact-container">
                <div className="back-green">
                    <div className="mb-4">
                        <Title txt="Talleres" />
                        <div className="title-taller">
                            <p className="contact-subtitle">Aprende y explora con nuestros talleres interactivos.</p>
                        </div>
                    </div>
                    <div className="taller-aside row">
                        <div className="taller-aside-elem col-md-5 col-12">
                            <div className="mb-3">
                                <h3>Jardineria 🌱</h3>
                            </div>
                            <p>Si te gustan las plantas esta es una excelente oportunidad para conocer más sobre ellas, sus cuidados, donde ubicarlas correctamente, en qué momento podarlas, reproducirlas y mucho más.</p>
                            <p>Conocerás sobre árboles, arbustos, trepadoras,césped y una gran variedad de temas. No dudes en consultarnos por mayor información.</p>
                            <img onClick={() => handleImageClick(Programa1)} src={Programa1} alt="Programa Taller de Jardineria" />
                        </div>
                        <div className="taller-aside-elem col-md-5 col-12">
                            <div className="mb-3">
                                <h3>Huerta 🌱</h3>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quis nulla vero necessitatibus at odio</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quis nulla vero necessitatibus at odio</p>
                            <img onClick={() => handleImageClick(Programa1)} src={Programa1} alt="Programa Taller de Jardineria" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            {modalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modalIMG taller-modal">
                        <img className="large-image-taller" src={imgModal} alt="" />
                    </div>
                    <span className="close-modal-x">&times;</span>
                </div>
            )}
        </>
    )
}

export default Taller;