import imgLogo from "../../public/blogHome_1.jpg"
import Title from "./titleSection.jsx"
import EastIcon from '@mui/icons-material/East';

const Blog = () => {
    return (
        <div className="container back-green my-5">
            <Title txt="Nuestro Taller" />
            <div className="row justify-content-center">
                <div className="taller-home-item col-lg-5">
                    <div>
                        <span>Un espacio para aprender</span>
                    </div>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit necessitatibus, harum et error quo eum. Cum fugit maxime, ducimus temporibus
                    </div>
                    <div className="taller-home-info">
                        <div>
                            Mas Información
                        </div>
                        <div>
                            <EastIcon color="success"/>
                        </div>
                    </div>
                </div>
                <div className="taller-home-item col-lg-5">
                    <div className="taller-home-elem">
                       <div>
                            1
                       </div>
                       <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur velit
                       </div>
                    </div>
                    <div className="taller-home-elem">
                       <div>
                            2
                       </div>
                       <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur velit
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog