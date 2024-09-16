import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Product from './components/templateProduct.jsx';
import AllProduct from './components/allProducts.jsx';
import Taller from "./components/taller.jsx"
import Contact from "./components/contact.jsx";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/products/:category",
      element: <AllProduct />,
    },
    {
      path: "/products",
      element: <AllProduct />,
    },
    {
      path: "/products/item/:productId",
      element: <Product />,
    },
    {
      path: "/taller",
      element: <Taller />,
    },
    {
      path: "/contacto",
      element: <Contact />,
    },
  ],
  {
    basename: "/Sempervirens/",
  }
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);