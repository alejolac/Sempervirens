import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Data from "../assets/blog.jsx"

const templateBlog = () => {
    const idBlog = useParams().blogId
    const [dataBlog, setDataBlog] = useState()

    useEffect(() => {
        window.scrollTo(0, 0);
        const newData = Data.find(elem => elem.id == idBlog)
        setDataBlog(newData)
    }, [])

    return (
        <>
            <NavBar />
            <main className="container contact-container">
                {dataBlog != undefined && (
                    <div className="back-green back-green-blog">
                        <div className="blog-section-title">
                            <h1>{dataBlog.title}</h1>
                            <div>{dataBlog.date}</div>
                        </div>
                        <div className="blog-section-content" dangerouslySetInnerHTML={{ __html: dataBlog.content }} >
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}

export default templateBlog;