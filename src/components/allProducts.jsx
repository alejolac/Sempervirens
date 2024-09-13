import Footer from "./footer.jsx"
import NavBar from "./navBar.jsx"
import Card from "./testCard.jsx"
import data from "../assets/plants.jsx"
import Title from "./titleSection.jsx"
import CardPhone from "./cardPhone.jsx"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const AllProduct = () => {
    let val = useParams().category;
    if (val == undefined) val = false
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 675);
    const [categoryVal, setCategoryVal] = useState(val || "all")
    const [filteredData, setFilteredData] = useState([]);
    const [allCategories, setAllCategories] = useState(new Set());
    const [animationParent] = useAutoAnimate()

    useEffect(() => {
        window.scrollTo(0, 0);
        filterDataByCategory(categoryVal);
        extractCategories();
    }, [categoryVal]);

    const extractCategories = () => {
        const categories = new Set();
        data.forEach(item => {
            item.category.forEach(cat => categories.add(cat));
        });
        setAllCategories(categories);
    };

    const filterDataByCategory = (category) => {
        if (category === 'all') {
            setFilteredData(data);
        } else {
            const filtered = data.filter(item => item.category.includes(category));
            setFilteredData(filtered);
        }
    };

    return (
        <>
            <NavBar />
            <main className="container allproducts-container">
                <Title txt="Productos Sempervirens" />
                <div className="productos-filtros">
                    <ButtonGroup color="success" variant="text" aria-label="Basic button group">
                        <Button color="success" onClick={() => setCategoryVal('all')}>Todo</Button>
                        {[...allCategories].map((category, index) => (
                            <Button key={index} variant={categoryVal == category ? "outlined" : "text"} color="success" onClick={() => setCategoryVal(category)}>{category}</Button>
                        ))}
                    </ButtonGroup>
                </div>
                <div ref={animationParent} className="allproducts-head">
                    {filteredData.map((item) => (
                        <div key={item.id}>
                            {isWideScreen ? (
                                <Link to={`/products/item/${item.id}`}>
                                    <Card img={`../../public/productos/${item.image[0]}`} text={item.description} price={item.price} title={item.name} />
                                </Link >
                            ) : (
                                <Link to={`/products/item/${item.id}`}>
                                    <div className="allproducts-phone-div">
                                        <CardPhone data={item} />
                                    </div>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default AllProduct