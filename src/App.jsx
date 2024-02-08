import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar.jsx';
import HomeMain from './components/main.jsx';
import AboutRow from './components/aboutRow.jsx';
import ProductosMain from './components/productosMain.jsx';
import BestCategories from './components/bestCategories.jsx';
import ViewBlog from "./components/viewBlog.jsx";
import Template from "./components/templateProduct.jsx";
import Footer from "./components/footer.jsx";

import Products from "./assets/plants.jsx"
function App() {
  const [count, setCount] = useState(21)
  const [data, setData] = useState(1)


  const handleProductData = value => {
    setData(value)
  }

  const testReturn = () => {
    if (count == 1) {
      const product = Products.find(producto => producto.id === data);
      return (
        <>
          <Template product={product} handleProductData={handleProductData} />
        </>
      )
    }
    else {
      return (
        <>
          <NavBar />
          <HomeMain />
          <AboutRow />
          <ProductosMain />
          <BestCategories />
          <ViewBlog />
          <Footer />
        </>
      )
    }
  }

  return (
    <>
      <NavBar />
      {testReturn()}
    </>
  )
}

export default App
