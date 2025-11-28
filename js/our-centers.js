// pages/our-centers.js
export default function OurCenters() {
  const centers = [
    { city: "Dhaka", phone: "01883914663", addr: "Mirpur, Near SBNCS" },
    { city: "Chattogram", phone:"01623756522", addr: "Shagorika, Near Motiur Rahaman Stadium" },
    { city: "Sylhet", phone: "01975321799", addr: "Near Sylhet International Stadium" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Centers
      </h1>
      <p className="text-xl text-center mb-16">
        Every YSCE centre maintains the same world-class coaching standards and facilities across India.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {centers.map((c, i) => (
          <div key={i} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">{c.city}</h3>
            <p className="text-gray-600 mb-3">{c.addr}</p>
            <p className="font-semibold text-blue-600">{c.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}