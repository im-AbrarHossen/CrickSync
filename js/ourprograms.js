// pages/our-programs.js
export default function OurPrograms() {
  const programs = [
    {
      title: "Advanced Training Program",
      age: "8+ years (12 hrs/week) | Under 8 (6 hrs/week)",
      desc: "Intensive coaching in batting, bowling, wicket-keeping or all-rounder skills using international-standard methods."
    },
    {
      title: "International Exposure",
      age: "Selected players",
      desc: "Tours, exchange programs & overseas camps to experience different pitches and playing conditions."
    },
    {
      title: "Fitness & Mental Conditioning",
      age: "All students",
      desc: "Strength training, yoga, sports psychology, nutrition guidance and character building."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Programs
      </h1>
      <p className="text-xl text-center mb-16 max-w-4xl mx-auto">
        Through innovative training techniques, national & international exposure, and focused individual development, YSCE provides an unparalleled opportunity to passionate youngsters.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {programs.map((p, i) => (
          <div key={i} className="border rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-sm text-blue-600 font-medium mb-4">{p.age}</p>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}