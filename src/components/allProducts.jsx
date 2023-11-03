import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"
import Title from "./titleSection.jsx"
import CardPhone from "./cardPhone.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"

const AllProduct = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 675);
    return (
        <>
            <NavBar />
            <main className="container allproducts-container">
                <Title txt="Productos Sempervirens"/>
                <div className="allproducts-head">
                    {data.map((data) => (
                        <>
                        {isWideScreen ? (
                            <Link to={`/Sempervirens/products/${data.id}`}>
                                <div key={data.id}>
                                    <Card img={"../../public/" + data.image[0]} text={data.description} price={data.price} title={data.name} />
                                </div>
                            </Link>
                        ) : (
                            <Link to={`/Sempervirens/products/${data.id}`}>
                                <div key={data.id} className="allproducts-phone-div">
                                    <CardPhone data={data}/>
                                </div>
                            </Link>
                        )}    
                        </>
                    ))}
                </div>
                
            </main>
            <Footer />
        </>

    )
}

export default AllProduct