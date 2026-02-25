
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerData from "../../data/banner/bannerData.js";

const Banner = () => {
    return (
        <section className="w-full bg-[var(--bg-light)]">
            <div className="max-w-7xl mx-auto px-4 py-6">

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    // navigation={true}
                    className="rounded-lg overflow-hidden"
                >
                    {bannerData.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <div className="relative">

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

                                        <button className="mt-6 primary-btn rounded-md cursor-pointer">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default Banner;