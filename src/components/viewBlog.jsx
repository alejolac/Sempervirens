import imgLogo from "../../public/blogHome_1.jpg"
import Title from "./titleSection.jsx"

const Blog = () => {
    return (
        <div className="latest-posts container back-green mt-5">
            <Title txt="Ultimas Publicaciones" />
            <div className="row container blogHome-head" style={{margin: "0"}}>
                <div className="col-lg-4 blogHome">
                    <a className="ax" href="">
                        <img src={imgLogo} alt="" />
                        <h2>Flores en primavera</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptate ex cupiditate,</p>
                    </a>
                </div>
                <div className="col-lg-4 blogHome">
                    <a className="ax" href="">
                        <img src={imgLogo} alt="" />
                        <h2 style={{textAlign: "left"}}>Flores en primavera</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptate ex cupiditate,</p>
                    </a>
                </div>
                <div className="col-lg-4 blogHome">
                    <a className="ax" href="">
                        <img src={imgLogo} alt="" />
                        <h2>Flores en primavera</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptate ex cupiditate,</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Blog