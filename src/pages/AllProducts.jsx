import Footer from "../components/footer.jsx"
import NavBar from "../components/navBar.jsx"
import ProductCard from "../components/ProductCard.jsx"
import data from "../assets/plants.jsx"
import Title from "../components/titleSection.jsx"
import CardPhone from "../components/cardPhone.jsx"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useWindowSize from "../hooks/useWindowSize.js"

const AllProduct = () => {
    let val = useParams().category;
    if (val == undefined) val = false
    const screenWidth = useWindowSize();
    const isWideScreen = screenWidth > 675;
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
            const filtered = data.filter(item =>
                item.category.some(cat => cat.toLowerCase() === category.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    const isActive = (cat) => cat.toLowerCase() === categoryVal.toLowerCase();

    return (
        <>
            <NavBar />
            <main className="container allproducts-container">
                <div className="back-green">
                    <Title txt="Productos Sempervirens" />
                    <div className="productos-filtros">
                        <button
                            className={`filtro-btn${categoryVal === 'all' ? ' filtro-btn--active' : ''}`}
                            onClick={() => setCategoryVal('all')}
                        >
                            Todo
                        </button>
                        {[...allCategories].map((category, index) => (
                            <button
                                key={index}
                                className={`filtro-btn${isActive(category) ? ' filtro-btn--active' : ''}`}
                                onClick={() => setCategoryVal(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div ref={animationParent} className="allproducts-head">
                        {filteredData.map((item) => (
                            isWideScreen ? (
                                <Link key={item.id} to={`/products/item/${item.id}`} className="pc-link">
                                    <ProductCard img={`${import.meta.env.BASE_URL}productos/${item.id}-1.webp`} text={item.description} price={item.price} title={item.name} />
                                </Link>
                            ) : (
                                <Link key={item.id} to={`/products/item/${item.id}`}>
                                    <div className="allproducts-phone-div">
                                        <CardPhone data={item} />
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default AllProduct
