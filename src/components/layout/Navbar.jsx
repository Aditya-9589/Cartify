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
        // <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <nav className="relative bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
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
                        {/* <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                            <span className="hover:text-[var(--primary)] cursor-pointer">MEN</span>
                            <span className="hover:text-[var(--primary)] cursor-pointer">WOMEN</span>
                            <span className="hover:text-[var(--primary)] cursor-pointer">KIDS</span>
                        </div> */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                            {/* MEN */}
                            <div className="relative group cursor-pointer">
                                <span className="hover:text-[var(--primary)] transition">
                                    MEN
                                </span>

                                <div className="absolute left-0 top-full mt-4 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <ul className="py-4 px-5 space-y-2 text-sm text-gray-600">
                                        <li className="hover:text-[var(--primary)]">T-Shirts</li>
                                        <li className="hover:text-[var(--primary)]">Shirts</li>
                                        <li className="hover:text-[var(--primary)]">Jeans</li>
                                        <li className="hover:text-[var(--primary)]">Trousers</li>
                                        <li className="hover:text-[var(--primary)]">Jackets</li>
                                    </ul>
                                </div>
                            </div>

                            {/* WOMEN */}
                            <div className="relative group cursor-pointer">
                                <span className="hover:text-[var(--primary)] transition">
                                    WOMEN
                                </span>

                                <div className="absolute left-0 top-full mt-4 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <ul className="py-4 px-5 space-y-2 text-sm text-gray-600">
                                        <li className="hover:text-[var(--primary)]">Dresses</li>
                                        <li className="hover:text-[var(--primary)]">Tops</li>
                                        <li className="hover:text-[var(--primary)]">Kurtis</li>
                                        <li className="hover:text-[var(--primary)]">Jeans</li>
                                        <li className="hover:text-[var(--primary)]">Skirts</li>
                                    </ul>
                                </div>
                            </div>

                            {/* KIDS */}
                            <div className="relative group cursor-pointer">
                                <span className="hover:text-[var(--primary)] transition">
                                    KIDS
                                </span>

                                <div className="absolute left-0 top-full mt-4 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <ul className="py-4 px-5 space-y-2 text-sm text-gray-600">
                                        <li className="hover:text-[var(--primary)]">T-Shirts</li>
                                        <li className="hover:text-[var(--primary)]">Shorts</li>
                                        <li className="hover:text-[var(--primary)]">Frocks</li>
                                        <li className="hover:text-[var(--primary)]">Track Pants</li>
                                        <li className="hover:text-[var(--primary)]">Sweaters</li>
                                    </ul>
                                </div>
                            </div>

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
                        {/* <div className="hidden md:flex flex-col items-center text-xs text-gray-700 cursor-pointer hover:text-[var(--primary)]">
                            <User size={20} />
                            Profile
                        </div> */}

                        <Link
                            to="/auth"
                            className="hidden md:flex flex-col items-center text-xs text-gray-700 hover:text-[var(--primary)]"
                        >
                            <User size={20} />
                            Profile
                        </Link>

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
                                    <ShoppingBag size={20} />

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
            {/* {mobileOpen && (
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
            )} */}


            <div
                className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40 border-t border-gray-200 transition-all duration-300 ${mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="px-4 py-6 space-y-4">

                    <div className="text-sm font-medium text-gray-700 space-y-3">
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
            </div>
        </nav>
    );
};

export default Navbar;