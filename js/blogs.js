// pages/blogs-and-insights.js
export default function Blogs() {
  const posts = [
    {
    }
    // Add more blog posts here later
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Blogs & Insights
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((p, i) => (
          <article key={i} className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition">
            <div className="bg-gray-200 border-2 border-dashed h-48" /> {/* Placeholder image */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{p.date}</p>
              <p className="text-gray-700 mb-4">{p.excerpt}</p>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}