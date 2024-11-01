import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"

import { useState } from "react"
import { useParams } from "react-router-dom"

import Data from "../assets/blog.jsx"

const templateBlog = () => {
    window.scrollTo(0, 0);
    let idBlog = useParams().blogId
    idBlog = Data.find(elem => elem.id == idBlog)
    const [dataBlog, setDataBlog] = useState(idBlog)
    console.log(dataBlog)

    return (
        <>
            <NavBar />
            <main className="container contact-container">
               <div className="back-green back-green-blog">
                    <div className="blog-section-title">
                        <h1>{dataBlog.title}</h1>
                        <div>{dataBlog.date}</div>
                    </div>
                    <div className="blog-section-content" dangerouslySetInnerHTML={{ __html: dataBlog.content }} >
                    </div>
               </div>
            </main>
            <Footer />
        </>
    )
}

export default templateBlog;