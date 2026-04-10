import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductPage from './pages/ProductPage.jsx';
import AllProducts from './pages/AllProducts.jsx';
import Taller from './pages/Taller.jsx';
import Contact from './pages/Contact.jsx';
import BlogPage from './pages/BlogPage.jsx';
import AllBlogsPage from './pages/AllBlogsPage.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/products",
        element: <AllProducts />,
    },
    {
        path: "/products/:category",
        element: <AllProducts />,
    },
    {
        path: "/products/item/:productId",
        element: <ProductPage />,
    },
    {
        path: "/taller",
        element: <Taller />,
    },
    {
        path: "/contacto",
        element: <Contact />,
    },
    {
        path: "/blog",
        element: <AllBlogsPage />,
    },
    {
        path: "/blog/:blogId",
        element: <BlogPage />,
    }
], {
    future: {
        v7_startTransition: true,
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
