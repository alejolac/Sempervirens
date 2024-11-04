import imgLogo from "../../public/blogHome_1.jpg"
import Title from "./titleSection.jsx"
import { Link } from "react-router-dom"
import Data from "../assets/blog.jsx"
import { useState, useEffect } from "react"

const Blog = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const sortedItems = [...Data.sort((a, b) => {
            return new Date(a.parseDate) - new Date(b.parseDate)
        })]

        setData(sortedItems.slice(0, 3));
    }, [])

    return (
        <div className="latest-posts container back-green my-5">
            <Title txt="Ultimas Publicaciones" />
            <div className="container blogHome-head" style={{ margin: "0" }}>
                {
                    data.length == 3 && (
                        data.map((elem) => {
                            return (
                                <Link key={elem.id} className="blogHome" to={`/blog/${elem.id}`}>
                                    <img src={elem.imgPortada} alt="Imagen Blog Primavera" />
                                    <h2>{elem.title}</h2>
                                    <p>{elem.description}</p>
                                </Link >
                            )
                        })
                    ) 
                }
            </div>
        </div>
    )
}

export default Blog