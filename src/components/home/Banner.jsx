import React from 'react'
import bannerData from "../../data/banner/bannerData.js"

const Banner = () => {

    // For now we use only first slide (static)
    const banner = bannerData[0];

    return (
        <section className="w-full bg-[var(--bg-light)]">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="relative rounded-lg overflow-hidden">

                    {/* Background Image */}
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center">
                        <div className="px-6 md:px-16 text-white max-w-lg">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                {banner.title}
                            </h2>
                            <p className="mt-4 text-sm md:text-lg">
                                {banner.subtitle}
                            </p>

                            <button className="mt-6 primary-btn hover:bg-[var(--primary-hover)] transition px-6 py-3 text-sm md:text-base font-semibold rounded-md">
                                Shop Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;