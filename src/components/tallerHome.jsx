import imgLogo from "../../public/blogHome_1.jpg"
import Title from "./titleSection.jsx"
import EastIcon from '@mui/icons-material/East';

const Blog = () => {
    return (
        <div className="container back-green my-5">
            <Title txt="Nuestro Taller" />
            <div className="row taller-home-head">
                <div className="taller-home-item col-lg-5">
                    <div>
                        <span style={{
                            fontSize: "36px",
                            fontWeight: "500",
                            color: "rgb(1 77 51)",
                        }}>Un espacio para aprender</span>
                    </div>
                    <div style={{ color: "rgb(125, 125, 125)", lineHeight: "2" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit necessitati sectetur adipisicing elit. Odit necessitatibus,dolor, sit amet consectetur adipisi t consectetur adipisicing elit. Obus,dolor, sit amet consectetur adipisi t consectetur adipisicing elit. Odit necessitatibus,dolor, sit amet consectetur adipcing elit. Odit necessitatibu harum et error quo eum. Cum fugit maxime, ducimus temporibus
                    </div>
                    <div className="taller-home-info">
                        <span>
                            Mas Información
                        </span>
                        <div style={{ transition: "0.4s ease-in-out" }}>
                            <EastIcon color="success" />
                        </div>
                    </div>
                </div>
                <div style={{gap: "0px"}} className="taller-home-item col-lg-5">
                    <div className="taller-home-elem">
                        <div className="taller-home-index">
                            01
                        </div>
                        <div className="taller-home-sec-head">
                            <div className="taller-home-title-sec">
                                Flores
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur velit
                            </div>
                        </div>
                    </div>
                    <div className="taller-home-elem">
                        <div className="taller-home-index">
                            02
                        </div>
                        <div className="taller-home-sec-head">
                            <div className="taller-home-title-sec">
                                Árboles
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur velit
                            </div>
                        </div>
                    </div>
                    <div className="taller-home-elem">
                        <div className="taller-home-index">
                            03
                        </div>
                        <div className="taller-home-sec-head">
                            <div className="taller-home-title-sec">
                                Semillas
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur velit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog