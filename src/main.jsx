import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Product from './components/templateProduct.jsx';
import AllProduct from './components/allProducts.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/sempervirens/",
    element: <App />,
  },
  {
    path: "/sempervirens/products/", 
    element: <AllProduct />,
  },
  {
    path: "/sempervirens/products/:productId",
    element: <Product />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);