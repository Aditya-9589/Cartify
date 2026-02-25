import { useCart } from "../../context/CartContext";

const CartSummary = () => {
    const { cartItems } = useCart();

    const subtotal = cartItems.reduce(
        (total, item) => total + item.discountPrice * item.quantity,
        0
    );

    const delivery = subtotal > 999 ? 0 : 99;
    const total = subtotal + delivery;

    return (
        <div className="bg-white p-6 rounded-lg border h-fit">
            <h3 className="font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
                <span>Delivery</span>
                <span>{delivery === 0 ? "Free" : `₹${delivery}`}</span>
            </div>

            <div className="border-t my-3"></div>

            <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
            </div>

            <button className="primary-btn w-full mt-6 cursor-pointer">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartSummary;