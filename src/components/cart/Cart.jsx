import { useCart } from "../../context/CartContext";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

const Cart = () => {
    const { cartItems } = useCart();

    return (
        <section className="bg-[var(--bg-light)] min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <div className="bg-white p-10 rounded-lg text-center">
                        <p className="text-gray-500">Your cart is empty.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={`${item.id}-${item.size}`}
                                    item={item}
                                />
                            ))}
                        </div>

                        {/* Summary */}
                        <CartSummary />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;