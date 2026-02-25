import React from 'react'

const ProductImages = ({ images }) => {

    // temporarluy: to show four images, at once 
    const displayImages = 
        images.length >= 4
            ? images: [...images, ...images, ...images, ...images].slice(0, 4);

    return (
        <div className="grid grid-cols-2 gap-4" >
            {displayImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-md ">
                    <img 
                        src={img}
                        alt="Product"
                        // className='w-full h-72 object-cover hover:scale-105 transition duration-300'
                        // fixing  images size issue 
                        className='w-full aspect-square object-cover hover:scale-105 transition duration-300'
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductImages