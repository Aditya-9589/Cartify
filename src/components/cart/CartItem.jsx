import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart();

    const discountPercentage = Math.round(
        ((item.price - item.discountPrice) / item.price) * 100
    );

    return (
        <div className="flex gap-6 border rounded-lg p-4 bg-white">
            {/* Image */}
            <img
                src={item.images[0]}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-md"
            />

            {/* Info */}
            <div className="flex-1">
                <h3 className="font-semibold">{item.brand}</h3>
                <p className="text-sm text-gray-500">{item.title}</p>

                {item.size && (
                    <p className="text-sm mt-1">Size: {item.size}</p>
                )}

                {/* Price */}
                <div className="mt-2 flex items-center gap-3">
                    <span className="font-bold">
                        ₹{item.discountPrice}
                    </span>

                    <span className="text-sm line-through text-gray-400">
                        ₹{item.price}
                    </span>

                    <span className="text-sm text-[var(--primary)]">
                        ({discountPercentage}% OFF)
                    </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-4">
                    <button
                        onClick={() => updateQuantity(item.id, item.size, -1)}
                        className="px-3 py-1 border rounded cursor-pointer"
                    >
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() => updateQuantity(item.id, item.size, 1)}
                        className="px-3 py-1 border rounded cursor-pointer"
                    >
                        +
                    </button>

                    <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="ml-6 text-red-500 hover:text-red-700 cursor-pointer"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;