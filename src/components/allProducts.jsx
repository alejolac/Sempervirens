import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"
import Title from "./titleSection.jsx"

const AllProduct = () => {
    return (
        <>
            <NavBar />
            <main className="container allproducts-container">
                <Title txt="Productos Sempervirens"/>
                <div className="allproducts-head">
                    {data.map((data) => (
                        <>
                            <div key={data.id}>
                                <Card img={"../../public/" + data.image[0]} text={data.description} price={data.price} title={data.name} />
                            </div>
                            <div key={data.id}>
                                <Card img={"../../public/" + data.image[0]} text={data.description} price={data.price} title={data.name} />
                            </div>
                            <div key={data.id}>
                                <Card img={"../../public/" + data.image[0]} text={data.description} price={data.price} title={data.name} />
                            </div>
                        </>

                    ))}
                </div>
            </main>
            <Footer />
        </>

    )
}

export default AllProduct