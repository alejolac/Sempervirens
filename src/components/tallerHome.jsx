import imgLogo from "../../public/blogHome_1.jpg"
import Title from "./titleSection.jsx"

const Blog = () => {
    return (
        <div className="container back-green my-5">
            <Title txt="Nuestro Taller" />
            <div className="row">
                <div className="taller-home-item col-lg-4">
                    hola mundo
                </div>
                <div className="taller-home-item taller-home-list col-lg-4">
                    <div className="">
                        hello
                    </div>
                    <div className="">
                        world
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog