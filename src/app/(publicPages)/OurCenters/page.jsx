export default function OurCenters() {
    const centers = [
        "Dhaka",
        "Barishal",
        "Chattogram",
        "Khulna",
        "Mymensingh",
        "Rajshahi",
        "Rangpur",
        "Sylhet"
    ];

    return (
        <div className="bg-gray-100 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
                    Our Centers
                </h1>

                {/* Description */}
                <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed mb-10">
                    To provide our services across the nation, we have established branches of CrickSync Academy
                    in all 8 divisional cities of Bangladesh. This helps eliminate distance barriers and deliver
                    world-class facilities to local cricketers in every division.
                </p>

                {/* Centers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {centers.map((center) => (
                        <div
                            key={center}
                            className="
              bg-white 
              p-8 
              rounded-xl 
              text-center 
              shadow-md 
              hover:shadow-xl 
              transition 
              duration-300 
              hover:-translate-y-2
            "
                        >
                            <img
                                src={`/assets/images/Dhaka.webp`}
                                alt={center}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold text-blue-600">{center}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
