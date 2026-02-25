import React from 'react'
import Home from "../../components/home/Home"
import Navbar from '../../components/layout/Navbar'
import Footer from "../../components/layout/Footer"

const HomeWrapper = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}

export default HomeWrapper