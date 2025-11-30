export default function PracticeSessions() {
    const practiceList = [
        "4 Practice Sessions a Week of 3 Hours Each",
        "2 Match Days",
        "Net Practice Sessions for improving in Batting & Bowling",
        "On-field drills and sessions for Fielding and Wicket-keeping",
        "Physical, Mental Fitness and Motivation Sessions",
    ];

    const differentList = [
        "Certified Coaches: Our panel of coaches comprises of renowned former players and BCB certified coaches",
        "Customized Modules: Our coaching modules are customized as per age and ability",
        "Hands-On Approach: Our approach towards coaching is hands-on and our coaches are available at every step for the players",
        "In-Depth Analysis: We provide an in-depth video analysis to correct and improve the technical aspects of the game",
        "Lifestyle Guidance: Detailed information and guidance are provided about balanced diet and lifestyle",
        "Treatment and Training: Treatment and training by certified physios and trainers",
        "Sessions and Tests: Coaching includes mental conditioning sessions, fitness sessions and fitness tests",
        "International Exposure: International exposure is provided through frequent coaching camps and tournaments",
    ];

    return (
        <div className="bg-whitesmoke text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 text-center uppercase mb-10">
                    Practice Sessions and Matches
                </h1>

                {/* CONTENT CARD */}
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg text-center mb-16">
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                        At CrickSync Academy, we believe that practice makes a man perfect. In order to enable our players to strengthen their foundation, we offer a solid mix of drills and sessions which include:
                    </p>

                    <ul className="list-disc list-inside text-left mx-auto inline-block text-lg md:text-xl space-y-3">
                        {practiceList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p className="text-lg md:text-xl leading-relaxed mt-6">
                        To ensure our players get maximum opportunities to learn and seek answers for their doubts, our coach to student ratio is maintained at <strong>1:20</strong>. One Coach for a batch of 30 students.
                    </p>
                </div>

                {/* DIFFERENT SECTION */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 rounded-xl"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url('/assets/images/Practice.webp')",
                    }}
                >
                    <div className="max-w-5xl mx-auto px-4 relative z-10 text-white">
                        <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 tracking-wide drop-shadow-lg">
                            What Make Us Different
                        </h2>

                        <ol className="list-decimal list-inside counter-reset-different space-y-6 text-lg md:text-xl relative">
                            {differentList.map((item, index) => (
                                <li key={index} className="relative pl-16">
                                    <span className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg md:text-xl">
                                        {index + 1}
                                    </span>
                                    <span className="font-semibold">
                                        {item.split(":")[0]}:
                                    </span>{" "}
                                    <span>{item.split(":")[1]}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    );
}
