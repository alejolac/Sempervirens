import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"
import Title from "./titleSection.jsx"
import CardPhone from "./cardPhone.jsx"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const AllProduct = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 675);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavBar />
            <main className="container allproducts-container">
                <Title txt="Productos Sempervirens" />
                <div className="allproducts-head">
                    {data.map((data) => (
                        <div key={data.id}>
                            <>
                                {isWideScreen ? (
                                    <Link  to={`/sempervirens/products/${data.id}`}>
                                        <Card img={"../../public/productos/" + data.image[0]} text={data.description} price={data.price} title={data.name} />
                                    </Link >
                                ) : (
                                    <Link to={`/Sempervirens/products/${data.id}`}>
                                        <div className="allproducts-phone-div">
                                            <CardPhone data={data} />
                                        </div>
                                    </Link>
                                )}
                            </>
                        </div>

                    ))}
                </div>

            </main>
            <Footer />
        </>

    )
}

export default AllProduct