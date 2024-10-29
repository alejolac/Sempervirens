import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Title from "./titleSection.jsx"


const Taller = () => {
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
                        <div className="taller-aside-elem col-5">
                            <h3>Jardineria</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quis nulla vero necessitatibus at odio</p>
                        </div>
                        <div className="taller-aside-elem col-5">
                            <h3>Huerta</h3>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Taller;