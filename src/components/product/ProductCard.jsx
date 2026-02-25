import React from 'react'
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    const discountPercentage = Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
    );

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className='bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300'
        >
            {/* Image  */}
            <div className='overflow-hidden' >
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content  */}
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {product.brand}
                </h3>

                <p className="text-xs text-gray-500 truncate">
                    {product.title}
                </p>

                {/* Price Section */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">
                        ₹{product.discountPrice}
                    </span>

                    <span className="text-xs text-gray-500 line-through">
                        ₹{product.price}
                    </span>

                    <span className="text-xs text-[var(--primary)] font-semibold">
                        ({discountPercentage}% OFF)
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard