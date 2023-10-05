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

    useEffect(() => {
        // Función para actualizar screenWidth cuando cambie el tamaño de la ventana
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Agregar el event listener para el cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImage = (img) => {
        setProduct1(img)
    }
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = (img) => {
        console.log(img);
        setImgModal(img)
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
    console.log(product);
    //<InfoProduct product={product} />
    return (
        <>
            {product1 != undefined &&
                <div className="pt-120 flex-product">
                    {screenWidth <= 980 ? (
                        <div className="back-green-phone-head">
                            <div className="phone-name"><h1>{product.name}</h1></div>
                            <div className="back-green-phone">
                                <Box className="product-image-phone" 
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        py: 1,
                                        overflow: 'auto',
                                        width: 340,
                                        scrollSnapType: 'x mandatory',
                                        '& > *': {
                                            scrollSnapAlign: 'center',
                                        },
                                        '::-webkit-scrollbar': { display: 'none' },
                                    }}
                                >
                                    {product.image.map((img, index) => (
                                        <AspectRatio key={index} ratio="1" sx={{ minWidth: 340 }} >
                                            <img
                                                srcSet={`${img}?h=120&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${img}?h=120&fit=crop&auto=format`}
                                                alt={"pruebas"}
                                            />
                                        </AspectRatio>
                                    ))}
                                </Box>
                            </div>
                            
                        </div>
                    ) : (
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