import imgLogo from "../../public/blogHome_1.jpg"
import Title from "./titleSection.jsx"
import { Link } from "react-router-dom"

const Blog = () => {
    return (
        <div className="latest-posts container back-green my-5">
            <Title txt="Ultimas Publicaciones" />
            <div className="container blogHome-head" style={{ margin: "0" }}>
                <Link className="blogHome" to={`/blog/1`}>
                    <img src={imgLogo} alt="Imagen Blog Primavera" />
                    <h2>Flores en primavera</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptate ex cupiditate,</p>
                </Link >
                <Link className="blogHome" to={`/blog/1`}>
                    <img src={imgLogo} alt="" />
                    <h2>Flores en primavera</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptate ex cupiditate,</p>
                </Link >
                <Link className="blogHome" to={`/blog/1`}>
                    <img src={imgLogo} alt="" />
                    <h2>Flores en primavera</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptate ex cupiditate,</p>
                </Link >
            </div>
        </div>
    )
}

export default Blog