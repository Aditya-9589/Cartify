import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "../../context/CartContext";


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const { cartItems } = useCart();

    const totalCartItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Left Section */}
                    <div className="flex items-center gap-6">

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu className="cursor-pointer" size={24} />}
                        </button>

                        {/* Logo */}
                        <Link
                            to="/"
                            className="text-2xl font-bold text-[var(--primary)] transition"
                        >
                            Cartify
                        </Link>

                        {/* Desktop Menu */}
                        {/* <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700"> */}
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                            <span className="hover:text-[var(--primary)] cursor-pointer">MEN</span>
                            <span className="hover:text-[var(--primary)] cursor-pointer">WOMEN</span>
                            <span className="hover:text-[var(--primary)] cursor-pointer">KIDS</span>
                        </div>
                    </div>

                    {/* Search Bar (Desktop Only) */}
                    <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-md w-1/3">
                        <Search size={18} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="bg-transparent outline-none px-2 w-full text-sm"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-center text-xs text-gray-700 cursor-pointer hover:text-[var(--primary)]">
                            <User size={20} />
                            Profile
                        </div>

                        <div className="flex flex-col items-center text-xs text-gray-700 cursor-pointer hover:text-[var(--primary)]">
                            {/* <Link
                                to="/cart"
                                className="flex flex-col items-center text-xs text-gray-700 hover:text-[var(--primary)] transition"
                            >
                                <ShoppingBag size={20} />
                                Cart
                            </Link> */}

                            <Link
                                to="/cart"
                                className="relative flex flex-col items-center text-xs text-gray-700 hover:text-[var(--primary)] transition"
                            >
                                <div className="relative" >
                                    <ShoppingBag  size={20} />

                                    {totalCartItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full min-w-[1.1rem] text-center" >
                                            {totalCartItems}
                                        </span>
                                    )}
                                </div>

                                Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
                    <div className="text-sm font-medium text-gray-700 space-y-2">
                        <div className="hover:text-[var(--primary)] cursor-pointer">MEN</div>
                        <div className="hover:text-[var(--primary)] cursor-pointer">WOMEN</div>
                        <div className="hover:text-[var(--primary)] cursor-pointer">KIDS</div>
                    </div>

                    <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
                        <Search size={18} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none px-2 w-full text-sm"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;