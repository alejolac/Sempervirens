import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"

const AllProduct = () => {
    console.log(data[0].image[0]);
    return (
        <>
            <NavBar />
            <main>
                <h1>Products Sempervirens</h1>
                <div>
                    {data.map((data) => (
                        <div key={data.id}>
                            <Card img={"../../public/"+data.image[0]} text={data.description} price={data.price} title={data.name}/>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>

    )
}

export default AllProduct