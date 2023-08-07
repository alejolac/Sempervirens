import { useState, useEffect } from "react"
import Carousel from "./carousel.jsx"
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"
import "atropos/css";
import Atropos from "atropos/react";


const ProductDisplay = ({ product }) => {
    const [product1, setProduct1] = useState(product.image[0])

    useEffect(() => {
        console.log("effect");
    }, [])

    const handleImage = (img) => {
        setProduct1(img)
    }

    const setImages = (z) => {
        return product.images[z]
    }

    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {product1 != undefined &&
                <div className="pt-120">

                    <div className="row back-green container-product">
                        <div className="col-8 row container-img">
                            <div className="col-2 img-lateral">
                                {product.image.map((img, index) => {
                                    return (
                                        <div key={index} onClick={() => handleImage(img)} className="img-lateral-content">
                                            <img src={img} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-8 img-big">
                                <div className="img-big-content">
                                    <Atropos className="atropos-template-product" onClick={handleImageClick}>
                                        <img src={product1} alt="" />
                                    </Atropos>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-info-product">
                            <div className="product-name">
                                <h2>{product.name}</h2>
                                <p className="lead product-category">{product.category}</p>
                            </div>
                            <div className="product-price">
                                <p>{product.price}</p>
                            </div>
                            <div className="product-description">
                                <p>
                                    {product.description}
                                </p>
                            </div>
                            <div className="product-btn">
                                <a href={product.url}><button className="btn btn-success btnProduct">Ir a comprar
                                    <svg style={{ marginLeft: "10px" }} width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21 3h-6m6 0l-9 9m9-9v6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                </button></a>
                            </div>
                        </div>
                    </div>
                    {modalOpen && (
                        <div className="modal-overlay" onClick={handleCloseModal}>
                            <div className="modalIMG">
                                <img className="large-image" src={product1} alt=""  />
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    );
}

export default ProductDisplay;