import testimonials from "../../data/testimonials/testimonials";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;

        return (
            <div className="flex items-center gap-1 mt-2">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary)" stroke="var(--primary)" />
                ))}

                {hasHalf && (
                    <Star size={16} fill="var(--primary)" stroke="var(--primary)" className="opacity-50" />
                )}
            </div>
        );
    };

    return (
        <section className="bg-[var(--bg-light)] py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">
                        What Our Customers Say
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Real feedback from our happy shoppers
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            {/* Profile */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            {renderStars(item.rating)}

                            {/* Review */}
                            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                                “{item.review}”
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;