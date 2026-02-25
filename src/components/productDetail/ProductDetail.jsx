import React from 'react'
import { useParams } from "react-router-dom";
import products from "../../data/products/Products"
import ProductImages from './ProductImages';
import ProductInfo from "./ProductInfo";


const ProductDetail = () => {

    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-xl font-semibold">Product not found</h2>
            </div>
        );
    }

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-12 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ProductImages images={product.images} />
                    <ProductInfo product={product} />
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;