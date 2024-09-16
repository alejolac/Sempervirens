import { useState, useEffect } from "react"
import "atropos/css";
import Atropos from "atropos/react";
import Test from "./testCard.jsx"
import Footer from "./footer.jsx"
import Nav from "./navBar.jsx"
import { useParams } from "react-router-dom";
import Plants from "../assets/plants.jsx"
import { Link } from "react-router-dom"

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductDisplay = ({ product }) => {
    if (product == undefined) {
        product = useParams().productId
        product = Plants.find(producto => producto.id == product)
    }
    const [product1, setProduct1] = useState(product.image[0])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [imgModal, setImgModal] = useState()
    const [descriptionState, setDescriptionState] = useState(2)
    const [descriptionValue, setDescriptionValue] = useState(product.description)

    let backColor = screenWidth <= 980 ? "pt-120 flex-product phone-product" : "pt-60 flex-product"

    window.scrollTo(0, 0);

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

    function handleDescriptionValuePC(val) {
        let newVal = val.split(" ");
        if (newVal.length > 60) return (newVal.slice(0, 60).join(" "))
        return val
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

    function destcriptionSeeMore() {
        if (descriptionState == 1) return <span onClick={handleDescription} className="span-ver">Ver mas</span>
        else if (descriptionState == 0) return <span onClick={handleDescription} className="span-ver">Ver menos</span>
        else return

    }
    return (
        <>  <Nav />
            {product1 != undefined &&
                <div className={backColor}>
                    {screenWidth <= 980 ? (
                        <div className="back-green-phone-head">
                            <div className="text-phone phone-name"><h1>{product.name}</h1></div>
                            <div className="text-phone phone-category"><p className="mb-0">{product.category.map((e, index) => index == product.category.length-1 ? e : `${e},  `)}</p></div>
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
                                                srcSet={`${import.meta.env.BASE_URL}productos/${img}?h=120&fit=crop&auto=format&dpr=2 2x`}
                                                src={`${import.meta.env.BASE_URL}productos/${img}?h=120&fit=crop&auto=format`}
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
                            <div className="phone-product-button">
                                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=598099911202">
                                    <Button className="button-phone-shadow" style={{ backgroundColor: "#6b9255", width: "100%" }} size="large" variant="contained">Contactanos</Button>
                                </a>
                                <p className="product-"> - Las compras se realizan por mercado libre - </p>
                            </div>
                            <div className="phone-product-button">
                                <a target="_blank" rel="noopener noreferrer" href={product.url}>
                                    <Button className="button-phone-shadow" style={{ backgroundColor: "rgb(227 207 0)", width: "100%" }} size="large" variant="contained">Ir a comprar</Button>
                                </a>
                                <p className="product-"> - Las compras se realizan por mercado libre - </p>
                            </div>
                            <div className="hr-product-phone">
                                <hr />
                            </div>
                        </div>
                    ) : (
                        <div className="row back-green container-product">
                            <div className="col-8 row container-img">
                                <div className="col-2 img-lateral">
                                    {product.image.map((img, index) => {
                                        return (
                                            <div key={index} onClick={() => handleImage(img)} className={img == product1 ? 'img-lateral-content img-lateral-focus' : 'img-lateral-content'}>
                                                <img src={`${import.meta.env.BASE_URL}/productos/${img}`} alt={product.name} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-8 img-big">
                                    <div className="img-big-content">
                                        <Atropos className="atropos-template-product" onClick={() => handleImageClick(product1)}>
                                            <img src={`${import.meta.env.BASE_URL}productos/${product1}`} alt="" />
                                        </Atropos>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 template-product-info">
                                <div className={`template-product-name`}><Typography variant="h4">{product.name}</Typography></div>
                                <div className={`template-product-category`}><Typography variant="subtitle1">{product.category.map((e, index) => index == product.category.length-1 ? e : `${e},  `)}</Typography></div>
                                <div style={{ whiteSpace: "pre-line" }} className={`template-product-description`}><Typography variant="body1">{product.description}</Typography></div>
                                <div className={`template-product-price`}><Typography variant="h5">$ {product.price}</Typography></div>
                                <div className="phone-product-button">
                                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=598099911202">
                                        <Button className="button-phone-shadow" style={{ backgroundColor: "#6b9255", width: "100%" }} size="large" variant="contained">Contactanos</Button>
                                    </a>
                                    <p className="product-"> - Chat por Whatsapp para coordinar - </p>
                                </div>
                                <div style={{ padding: "0 0 20px 0" }} className="phone-product-button">
                                    <a target="_blank" rel="noopener noreferrer" href={product.url}>
                                        <Button className="button-phone-shadow" style={{ backgroundColor: "rgb(227 207 0)", width: "100%" }} size="large" variant="contained">Ir a comprar</Button>
                                    </a>
                                    <p className="product-"> - Comprar por mercado libre - </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="back-green container-product">
                        <div className="productos-relacionados-title">
                            <h3>Productos Relacionados</h3>
                        </div>
                        <div className="productos-relacionados">
                            {product.relacionados.map((relacionado, index) => (
                                <Link key={relacionado.id} to={`/products/item/${relacionado.id}`}>
                                    <Test img={`${import.meta.env.BASE_URL}/${relacionado.image}`} title={relacionado.name} text={relacionado.description} price={relacionado.price} />
                                </Link>
                            ))}
                        </div>
                        <Link to={"/products"}>
                            <div className="phone-releated-button">
                                <Button className="button-phone-shadow button-releated-btn" style={{ backgroundColor: "#6b9255", width: "100%" }} size="large" variant="contained">Ver todos</Button>
                            </div>
                        </Link>
                    </div>
                    <Footer />
                </div>

            }
            {modalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modalIMG">
                        <img className="large-image" src={`${import.meta.env.BASE_URL}productos/${imgModal}`} alt="" />
                    </div>
                    <span className="close-modal-x">&times;</span>
                </div>
            )}
        </>
    );
}

export default ProductDisplay;