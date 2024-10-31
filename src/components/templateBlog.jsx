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
               <div className="back-green">
                    <div className="blog-section-title">
                        <h2>{dataBlog.title}</h2>
                        <div>{dataBlog.date}</div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: dataBlog.content }} >
                    </div>
               </div>
            </main>
            <Footer />
        </>
    )
}

export default templateBlog;