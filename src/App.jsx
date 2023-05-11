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

import img from "../public/img1.jpg"

function App() {
  const [count, setCount] = useState(true)

  const testProduct = { image: [img1, img1, img2], name: "Anturio", category: "Plant", description: "lorem loremlorem lorem lorem lorem lorem loremlorem loremlorem lorem " }

  const testReturn = () => {
    if (count) {
      return (
        <>
          <NavBar />
          <Template product={testProduct} />
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
      {testReturn()}
    </>
  )
}

export default App
