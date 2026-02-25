import { useState } from "react";
import { DELIVERY_INFO } from "../../constants/delivery"
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ProductInfo = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart, cartItems } = useCart();
    const navigate = useNavigate();

    const discountPercentage = Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
    );

    const cartItem = cartItems.find(
        (item) =>
            item.id === product.id &&
            (product.sizes.length === 0 || item.size === selectedSize)
    );

    const currentQuantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = () => {
        if (product.sizes.length > 0 && !selectedSize) {
            // alert("Please select a size")
            toast.error("Please select a size");
            return;
        }

        addToCart(product, selectedSize);
        // toast.success("Product added to cart!");
    }

    const handleBuyNow = () => {
        if (product.sizes.length > 0 && !selectedSize) {
            // alert("Please select a size");
            toast.error("Please select a size");
            return;
        }

        addToCart(product, selectedSize);
        // toast.success("Product added to cart!");
        navigate("/cart");
    }

    return (
        <div>
            {/* Brand */}
            <h2 className="text-lg font-semibold text-gray-700">
                {product.brand}
            </h2>

            {/* Title */}
            <h1 className="text-2xl font-bold mt-1">
                {product.title}
            </h1>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
                <span className="text-2xl font-bold">
                    ₹{product.discountPrice}
                </span>

                <span className="text-sm text-gray-500 line-through">
                    ₹{product.price}
                </span>

                <span className="text-sm font-semibold text-[var(--primary)]">
                    ({discountPercentage}% OFF)
                </span>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-sm font-semibold mb-3">
                        Select Size
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {product.sizes.map((size, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 border rounded-full text-sm transition cursor-pointer
                                    ${selectedSize === size
                                        ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                                        : "hover:border-[var(--primary)]"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}


            {/* Buttons */}
            <div className="mt-8 flex gap-4">
                <button
                    onClick={handleAddToCart}
                    className="primary-btn w-1/2 cursor-pointer"
                >
                    Add to Cart
                </button>

                <button
                    onClick={handleBuyNow}
                    className="w-1/2 border border-gray-300 rounded-md py-3 font-semibold hover:bg-gray-100 transition cursor-pointer"
                >
                    Buy Now
                </button>
            </div>

            {/* Cart Feedback */}
            {currentQuantity > 0 && (
                <div className="mt-4 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2 rounded-md">
                    {currentQuantity} item{currentQuantity > 1 && "s"} added to your cart
                </div>
            )}

            {/* Delivery Info */}
            {/* dummy data from constants  */}
            <div className="mt-10 border-t pt-6">
                <h4 className="text-sm font-semibold mb-2">
                    Delivery Details
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                    {DELIVERY_INFO.warehouseName}<br />
                    {DELIVERY_INFO.addressLine1}<br />
                    {DELIVERY_INFO.addressLine2}<br />
                    {DELIVERY_INFO.country}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                    {DELIVERY_INFO.shippingNote}
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;