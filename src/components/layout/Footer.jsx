import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[var(--bg-light)] mt-16 border-t border-gray-200">
            {/* // <footer className="bg-[var(--bg-light)] border-t border-gray-200"> */}
            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">
                            COMPANY
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-[var(--primary)] cursor-pointer">About Us</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Contact</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">
                            SHOP
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-[var(--primary)] cursor-pointer">Men</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Women</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Kids</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Accessories</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">
                            CUSTOMER SUPPORT
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="hover:text-[var(--primary)] cursor-pointer">Help Center</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Shipping</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">Returns</li>
                            <li className="hover:text-[var(--primary)] cursor-pointer">FAQs</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-4">
                            KEEP IN TOUCH
                        </h3>

                        <p className="text-sm text-gray-600 mb-4">
                            Discover the latest fashion trends and enjoy seamless shopping with Cartify.
                        </p>

                        <div className="flex gap-4">
                            <Facebook className="cursor-pointer hover:text-[var(--primary)]" />
                            <Instagram className="cursor-pointer hover:text-[var(--primary)]" />
                            <Twitter className="cursor-pointer hover:text-[var(--primary)]" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Cartify. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;