export default function Blogs() {
    const blogPosts = [
        {
            img: "/assets/images/Shakib.webp",
            date: "25 Nov 2025",
            title: "How to Play Spin Like Shakib Al Hasan",
            desc: "Learn footwork, grip, and mindset secrets directly from our coaches who have trained with the world's No.1 all-rounder.",
            link: "#",
        },
        {
            img: "/assets/images/Mustafiz.webp",
            date: "18 Nov 2025",
            title: "Building Express Pace - Bangladesh Style",
            desc: "Step-by-step training plan used by Taskin Ahmed & Mustafizur Rahman at CrickSync Academy.",
            link: "#",
        },
        {
            img: "/assets/images/mushfiq.webp",
            date: "10 Nov 2025",
            title: "Mental Toughness Secrets of Bangladesh Tigers",
            desc: "How our U-19 players learn to stay calm in pressure situations - straight from BCB HP coaches.",
            link: "#",
        },
        {
            img: "/assets/images/Diet.webp",
            date: "02 Nov 2025",
            title: "Cricketer's Diet Plan - What Bangladesh Players Actually Eat",
            desc: "7-day meal plan approved by our physios & nutritionists.",
            link: "#",
        },
    ];

    return (
        <div className="bg-blue-50 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* Hero Section */}
                <section
                    className="relative h-80 md:h-96 flex items-center justify-center text-center mb-16 rounded-lg overflow-hidden"
                    style={{
                        background: `linear-gradient(rgba(0,48,135,0.85), rgba(215,30,38,0.9)), url('Member_Photos/hero-blog.jpg') center/cover no-repeat`,
                    }}
                >
                    <div className="text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-3">
                            Blogs & Insights
                        </h1>
                        <p className="text-lg md:text-xl">
                            Cricket tips | Player stories | Training secrets | Bangladesh cricket updates
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-red-600 transform transition-transform hover:-translate-y-3 hover:shadow-2xl">
                            <div className="w-full h-56 overflow-hidden">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <span className="text-blue-900 text-sm font-semibold mb-2 flex items-center gap-2">
                                    <i className="far fa-calendar"></i> {post.date}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{post.title}</h3>
                                <p className="text-gray-800 mb-4">{post.desc}</p>
                                <a
                                    href={post.link}
                                    className="inline-block text-red-600 font-bold hover:text-blue-900 transition-colors"
                                >
                                    Read More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <a
                        href="#"
                        className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 transition-transform transform hover:-translate-y-1"
                    >
                        Load More Articles
                    </a>
                </div>
            </div>
        </div>
    );
}
