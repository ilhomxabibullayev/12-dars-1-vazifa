import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import ProductDetails from '../pages/ProductDetails';

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='product-details/:id' element={<ProductDetails />} />
        </Routes>
    )
}

export default Router;
