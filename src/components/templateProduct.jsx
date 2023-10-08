import { useState, useEffect } from "react"
import InfoProduct from "./infoProduct.jsx"
import "atropos/css";
import Atropos from "atropos/react";
import Test from "./testCard.jsx"


import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';


const ProductDisplay = ({ product }) => {
    const [product1, setProduct1] = useState(product.image[0])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [imgModal, setImgModal] = useState()
    const [descriptionState, setDescriptionState] = useState(2)
    const [descriptionValue, setDescriptionValue] = useState(product.description)

    let backColor = screenWidth <= 980 ? "pt-120 flex-product phone-product" : "pt-120 flex-product"

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Description
        function description(val) {
            let newVal = val.split(" ");
            if (newVal.length > 20) {
                setDescriptionValue(newVal.slice(0, 14).join(" "))
                setDescriptionState(1)
            }
            else setDescriptionState(2)
        }
        description(product.description)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImage = (img) => {
        setProduct1(img)
    }
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = (img) => {
        setImgModal(img)
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    // Code Description

    function handleDescriptionValue(val) {
        let newVal = val.split(" ");
        if (newVal.length > 20) setDescriptionValue(newVal.slice(0, 14).join(" "))
    }

    function handleDescription() {
        if (descriptionState == 1) {
            setDescriptionState(0)
            setDescriptionValue(product.description)
        }
        else {
            setDescriptionState(1)
            handleDescriptionValue(descriptionValue)
        }
    }

    function destcriptionSeeMore () {
        if (descriptionState == 1) return <span onClick={handleDescription} className="span-ver">Ver mas</span>
        else if (descriptionState == 0) return <span onClick={handleDescription} className="span-ver">Ver menos</span>
        else return
        
    }

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
                <div className={backColor}>
                    {screenWidth <= 980 ? (
                        <div className="back-green-phone-head">
                            <div className="text-phone phone-name"><h1>{product.name}</h1></div>
                            <div className="text-phone phone-category"><p className="mb-0">{product.category}</p></div>
                            <div className="back-green-phone">
                                <Box className="product-image-phone"
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        py: 1,
                                        overflow: 'auto',
                                        width: 300,
                                        scrollSnapType: 'x mandatory',
                                        '& > *': {
                                            scrollSnapAlign: 'center',
                                        },
                                        '::-webkit-scrollbar': { display: 'none' },
                                    }}
                                >
                                    {product.image.map((img, index) => (
                                        <AspectRatio key={index} ratio="1" sx={{ minWidth: 300 }} >
                                            <img
                                                srcSet={`${img}?h=120&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${img}?h=120&fit=crop&auto=format`}
                                                alt={"imagen producto"}
                                            />
                                        </AspectRatio>
                                    ))}
                                </Box>
                            </div>
                            <div className="text-phone price-phone"><span className="price-phone-signo">$</span><span>{product.price}</span></div>
                            <div className="text-phone phone-description">
                                <p className="mb-0">{descriptionValue}{destcriptionSeeMore()}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="row back-green container-product">
                            <div className="col-8 row container-img">
                                <div className="col-2 img-lateral">
                                    {product.image.map((img, index) => {
                                        return (
                                            <div key={index} onClick={() => handleImage(img)} className={img == product1 ? 'img-lateral-content img-lateral-focus' : 'img-lateral-content'}>
                                                <img src={img} alt={product.name} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-8 img-big">
                                    <div className="img-big-content">
                                        <Atropos className="atropos-template-product" onClick={() => handleImageClick(product1)}>
                                            <img src={product1} alt="" />
                                        </Atropos>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="container-product back-green productos-relacionados">
                        {product.relacionados.map((relacionado, index) => (
                            <Test key={relacionado.id} img={relacionado.image} />
                        ))}
                    </div>
                </div>
            }
            {modalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modalIMG">
                        <img className="large-image" src={imgModal} alt="" />
                    </div>
                    <span className="close-modal-x">&times;</span>
                </div>
            )}
        </>
    );
}

export default ProductDisplay;