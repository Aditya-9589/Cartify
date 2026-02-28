import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainLayout from '../components/layout/MainLayout';

import HomeWrapper from '../pages/home/HomeWrapper';
import ProductWrapper from "../pages/productDetail/ProductWrapper"
import CartWrapper from "../pages/cart/CartWrapper"
import AuthPage from '../auth/AuthPage';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';


const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<HomeWrapper />}  />
            <Route path='/product/:id' element={<ProductWrapper />} />
            <Route path='/cart' element={<CartWrapper />} /> */}

            <Route element={<MainLayout />} >
                <Route path='/' element={<HomeWrapper />} ></Route>
                <Route path='/product/:id' element={<ProductWrapper />} ></Route>
                <Route path='/cart' element={<CartWrapper />} ></Route>
                <Route path='/auth' element={<AuthPage />} ></Route>
                <Route path='/privacy-policy' element={<PrivacyPolicy />} ></Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes