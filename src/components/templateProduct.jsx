import { useState, useEffect } from "react"
import InfoProduct from "./infoProduct.jsx"
import Carousel from "./carousel.jsx"
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"
import "atropos/css";
import Atropos from "atropos/react";
import Test from "./testCard.jsx"


const ProductDisplay = ({ product }) => {
    const [product1, setProduct1] = useState(product.image[0])

    useEffect(() => {
        console.log(product.image[0]);
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

    function Producto({ producto }) {
        return (
            <div className="producto">
                <img src={producto.image} alt={producto.name} className="imagen-producto" />
                <h2>{producto.name}</h2>
                <p className="precio">{producto.price}</p>
                <p>{producto.description}</p>
            </div>
        )
    }

    return (
        <>
            {product1 != undefined &&
                <div className="pt-120 flex-product">
                    <div className="row back-green container-product">
                        <div className="col-8 row container-img">
                            <div className="col-2 img-lateral">
                                {product.image.map((img, index) => {
                                    return (
                                        <div key={index} onClick={() => handleImage(img)} className={img == product1 ? 'img-lateral-content img-lateral-focus' : 'img-lateral-content'}>
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
                        <InfoProduct product={product} />
                    </div>
                    <div className="container-product back-green    ">
                        <div className="productos-relacionados">
                            {product.relacionados.map((relacionado, index) => (
                                <Producto key={index} producto={relacionado} />
                            ))}
                        </div>
                    </div>
                    <Test img={product.image[0]}/>
                </div>
            }
            {modalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modalIMG">
                        <img className="large-image" src={product1} alt="" />
                    </div>
                    <span className="close-modal-x">&times;</span>
                </div>
            )}
        </>
    );
}

export default ProductDisplay;