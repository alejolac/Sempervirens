import { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutRow from './components/aboutRow.jsx';
import ProductosMain from './components/productosMain.jsx';
import BestCategories from './components/bestCategories.jsx';
import ViewBlog from "./components/viewBlog.jsx";
import Footer from "./components/footer.jsx";
import Taller from "./components/tallerHome.jsx";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutRow />
            <ProductosMain />
            <BestCategories />
            <Taller />
            <ViewBlog />
            <Footer />
        </>
    )
}

export default App
