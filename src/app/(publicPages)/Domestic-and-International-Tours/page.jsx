export default function Tours() {
    const tours = [
        {
            img: "/assets/images/Srilanka.webp",
            title: "Sri Lanka Tour",
            desc: "Play on spin-friendly pitches, face quality bowling, and experience island cricket culture.",
            btn: "Join Sri Lanka Tour",
        },
        {
            img: "/assets/images/England.webp",
            title: "England Tour",
            desc: "Seam & swing challenge on green tracks – perfect for fast bowlers and resilient batsmen.",
            btn: "Join England Tour",
        },
        {
            img: "/assets/images/Australia.webp",
            title: "Australia Tour",
            desc: "Bouncy pitches, world-class facilities, and competitive matches Down Under.",
            btn: "Join Australia Tour",
        },
    ];

    return (
        <div className="bg-blue-50 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* INTRO SECTION */}
                <section className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg border-l-8 border-red-600 mb-16">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 uppercase mb-6">
                        Domestic and International Tours
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        CrickSync Academy's International Exposure Program is designed to groom the next generation of Bangladesh cricket stars by giving them experiences that go far beyond local boundaries and truly enrich their cricketing journey.
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg md:text-xl mb-8">
                        <li>Our players regularly compete in high-quality matches and tournaments against strong teams from across Bangladesh and abroad, exposing them to a wide variety of playing styles, bowling attacks, batting approaches, and team strategies.</li>
                        <li>By playing in different cities and countries, our cricketers learn to quickly adapt to varying pitch behaviour, weather conditions, outfield speeds, and ground dimensions — making them truly versatile and match-ready for any situation, just like our senior Tigers.</li>
                        <li>These exposure tours and camps are not just about playing more cricket; they provide a deeper understanding of advanced game tactics, reading match situations, smart decision-making under pressure, and modern cricketing strategies.</li>
                        <li>Interacting and sharing the dressing room with players and coaches from different cricketing cultures helps our young talents absorb new techniques, fresh ideas, and global best practices — broadening their vision and accelerating their growth into complete cricketers.</li>
                    </ul>

                    <p className="text-center text-white font-semibold text-xl md:text-2xl bg-linear-to-r from-blue-900 to-red-600 p-6 rounded-lg">
                        At CrickSync Academy, we believe real champions are built not just in the nets, but on the field, in new environments, against new challenges.<br />
                        <strong>Join us — and take the first step toward representing Bangladesh on the world stage!</strong>
                    </p>
                </section>

                {/* UPCOMING TOURS SECTION */}
                <section className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center text-red-600 uppercase mb-12">
                        Upcoming International Tours
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tours.map((tour, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg text-center border-t-6 border-blue-900 transform transition-transform hover:-translate-y-3">
                                <img src={tour.img} alt={tour.title} className="w-full h-52 object-cover" />
                                <h3 className="text-xl md:text-2xl text-blue-900 font-bold mt-4">{tour.title}</h3>
                                <p className="text-gray-800 text-base md:text-lg px-4 mt-2 mb-4">{tour.desc}</p>
                                <a href="#enroll" className="inline-block bg-red-600 hover:bg-blue-900 text-white font-bold rounded-full px-6 py-3 mb-6 transition-transform transform hover:scale-105">
                                    {tour.btn}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
