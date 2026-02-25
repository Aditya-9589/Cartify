import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ProductDetail from '../../components/productDetail/ProductDetail'


const ProductWrapper = () => {
    return (
        <>
            <Navbar />
            <ProductDetail />
            <Footer />
        </>
    )
}

export default ProductWrapper