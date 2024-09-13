import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Title from "./titleSection.jsx"
import Form from "./form.jsx"
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


/* REACT MUI */
import TextField from '@mui/material/TextField';

const Contact = () => {
    return (
        <>
            <NavBar />
            <main className="container allproducts-container">
                <div className="back-green">
                    <div className="mb-4">
                        <Title txt="Contáctenos" />
                        <p className="contact-subtitle">Nos encantaría saber de ti. Contáctanos para conocer más sobre nuestros <span>Productos</span> y <span>Talleres</span>, <br /> o para resolver cualquier duda que tengas</p>
                    </div>
                    <div className="row contact-info-head">
                        <div className="col-4 contact-info-subhead">
                            <div className="contact-info-icon">
                                <PhoneIcon color="success" fontSize="large" />
                            </div>
                            <div className="contact-info-data">
                                <div className="contact-info-data-title">
                                    <p>Numero de Telefono</p>
                                </div>
                                <a href="https://api.whatsapp.com/send?phone=598099911202" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                    <div className="contact-info-data-wp contact-info-data-social">
                                        <p> 098 471 194</p> <WhatsAppIcon />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-4 contact-info-subhead">
                            <div className="contact-info-icon">
                                <ShareIcon color="success" fontSize="large" />
                            </div>
                            <div className="contact-info-data">
                                <div className="contact-info-data-title">
                                    <p>Redes Sociales</p>
                                </div>
                                <div>
                                    <a href="https://api.whatsapp.com/send?phone=598099911202" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                        <div className="contact-info-data-fb contact-info-data-social">
                                            <p> Facebook</p> <FacebookIcon />
                                        </div>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=598099911202" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                        <div className="contact-info-data-ig contact-info-data-social">
                                            <p> Instagram</p> <InstagramIcon />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 contact-info-subhead">
                            <div className="contact-info-icon">
                                <EmailIcon color="success" fontSize="large" />
                            </div>
                            <div className="contact-info-data">
                                <div className="contact-info-data-title">
                                    <p>Correo Electronico</p>
                                </div>
                                <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                    <div className="contact-info-data-social">
                                        <p> sempervirens@sempervirens.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-title">
                            <h2>Envíanos un Mensaje</h2>
                            <p>Queremos saber de ti. Déjanos tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
                        </div>
                        <Form />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact