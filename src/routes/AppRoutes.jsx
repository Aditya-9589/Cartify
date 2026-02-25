import React from 'react'
import { Routes, Route } from "react-router-dom";

import HomeWrapper from '../pages/home/HomeWrapper';
import ProductWrapper from "../pages/productDetail/ProductWrapper"
import CartWrapper from "../pages/cart/CartWrapper"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeWrapper />}  />
            <Route path='/product/:id' element={<ProductWrapper />} />
            <Route path='/cart' element={<CartWrapper />} />
        </Routes>
    )
}

export default AppRoutes