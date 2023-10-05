import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExampleBar from './navBar.jsx';
import Cards from './components/cards.jsx';
import NavBar from './components/navBar.jsx';
import HomeMain from './components/main.jsx';
import AboutRow from './components/aboutRow.jsx';
import ProductosMain from './components/productosMain.jsx';
import BestCategories from './components/bestCategories.jsx';
import ViewBlog from "./components/viewBlog.jsx";
import Template from "./components/templateProduct.jsx";
import img1 from "../public/img1.jpg"
import img2 from "../public/img2.jpg"
import img3 from "../public/img3.jpg"

import Products from "./assets/plants.jsx"
function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState(1)

  const testProduct = { image: [img1, img3, img2, img2], name: "Anturio", category: "Plant, sun", price: "$150", description: "lorem loremlorem lorem lorem lorem lorem loremlorem loremlorem lorem", url: "#" }

  const handleProductData = value => {
    setData(value)
  }

  const handleCount = value => {
    setCount(value)
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
