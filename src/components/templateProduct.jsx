import { useState, useEffect } from "react"
import Carousel from "./carousel.jsx"
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"


const ProductDisplay = ({ product }) => {
    const [ product1, setProduct1 ] = useState(product.image[0])
    const [ product2, setProduct2 ] = useState(undefined)
    const [ product3, setProduct3 ] = useState(undefined)
    const [ product4, setProduct4 ] = useState(undefined)


    useEffect(() => {
        console.log("effect");
    }, [])

    const handleImage = (num) => {
        return (
            <div  className="img-lateral-content">
            <img src={product.image[num]} alt="" />
        </div>
        )
    }

    const setImages = (z) => {
        return product.images[z] != undefined ? product.images[z] :  null
    }

    return (
        <>
            {product1 != undefined &&
                <div className="pt-120">
                    <div className="row container-product">
                        <div className="col-10 row">
                            <div className="col-2 img-lateral">
                                <div className="img-lateral-content">
                                    <img src={setImages(1)} alt="" />
                                </div>
                                <div className="img-lateral-content">
                                    <img src={product3} alt="" />
                                </div>
                                <div className="img-lateral-content">
                                    <img src={product4} alt="" />
                                </div>
                            </div>
                            <div className="col-6 img-big">
                                <div className="img-big-content">
                                    <img src={product1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h1>Hola mundp</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default ProductDisplay;