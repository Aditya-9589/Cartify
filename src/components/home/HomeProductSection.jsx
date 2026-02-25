
import { useState } from "react";
import products from "../../data/products/Products";
import ProductCard from "../product/ProductCard";

const PRODUCTS_PER_PAGE = 12;

const HomeProductSection = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const selectedProducts = products.slice(
        startIndex,
        startIndex + PRODUCTS_PER_PAGE
    );

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev + 1);
        }
    };


    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Trending Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
                {selectedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination  */}
            <div className="flex items-center justify-center gap-6 mt-10">

                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-5 py-2 rounded-md border ${currentPage === 1
                            ? "opacity-50 cursor-pointer"
                            : "hover:bg-[var(--bg-light)]"
                        }`}
                >
                    Prev
                </button>

                <span className="text-sm font-medium" >
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-5 py-2 rounded-md border ${currentPage === totalPages
                            ? "opacity-50 cursor-pointer"
                            : "hover:bg-[var(--bg-light)]"
                        }`}
                >
                    Next
                </button>

            </div>
        </section>
    );
};

export default HomeProductSection;