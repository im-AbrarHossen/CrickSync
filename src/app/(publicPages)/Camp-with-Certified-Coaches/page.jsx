export default function HighPerformanceCamp() {
    const campList = [
        "These High-Performance Camps are conducted as per CrickSync Academy’s annual coaching calendar and serve as the ideal platform for young Bangladeshi cricketers to take their game to the next level.",
        "The camps are organized in different divisions across Bangladesh — from Dhaka to Sylhet, Rajshahi to Khulna — ensuring that talented players from every corner of the country, regardless of background, get the opportunity to train under top-class guidance.",
        "Every aspect of modern cricket is covered in these camps — starting from proper warm-up routines, strength & conditioning programs, to high-intensity fitness drills — so that our players are not only technically sound but also physically ready to compete at the highest level.",
        "Our BCB-certified and former national-level coaches personally guide the participants through specialized drills in batting, bowling, fielding, and wicket-keeping, correcting techniques and building muscle memory for match-winning performances.",
        "Recognizing the importance of mental toughness in Bangladeshi conditions, our coaches conduct dedicated mental conditioning sessions, teaching players how to stay calm under pressure, handle big crowds, and bounce back from setbacks — just like our Tigers do in international cricket.",
        "Special focus is given to match awareness and strategy — reading the pitch, understanding opposition plans, rotating strike under pressure, and adapting to different formats — skills that have made Bangladesh one of the most competitive teams in world cricket.",
        "These camps are known for their intensity and discipline, pushing every participant beyond their comfort zone. It’s not just about playing well — it’s about building the stamina, resilience, and never-give-up attitude that Bangladeshi cricket is famous for.",
        "CrickSync’s High-Performance Camps act as a proven launchpad for young talents. Many of our camp graduates have gone on to represent district teams, age-group nationals, BCB HP units, and several have already earned call-ups to the Bangladesh U-19 and even senior national setup.",
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
        <div className="bg-gray-100 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 text-center uppercase mb-10">
                    High-Performance Camp With Certified Coaches
                </h1>

                {/* CAMP CONTENT */}
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg mb-16">
                    <ul className="list-disc list-inside text-lg md:text-xl space-y-4">
                        {campList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p className="mt-8 text-center text-red-600 font-bold text-lg md:text-xl bg-orange-50 p-4 rounded">
                        Join a CrickSync High-Performance Camp — where the next generation of Bangladesh cricket stars is being shaped!
                    </p>
                </div>

                {/* DIFFERENT SECTION */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 rounded-xl"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url('/assets/images/Coach_Cricketers.webp')",
                    }}
                >
                    <div className="max-w-5xl mx-auto px-4 relative z-10 text-white">
                        <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 tracking-wide drop-shadow-lg">
                            What Make Us Different
                        </h2>

                        <ol className="list-decimal list-inside space-y-6 text-lg md:text-xl">
                            {differentList.map((item, index) => (
                                <li key={index} className="relative pl-16">
                                    <span className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg md:text-xl">
                                        {index + 1}
                                    </span>
                                    <span className="font-semibold">{item.split(":")[0]}:</span>{" "}
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
