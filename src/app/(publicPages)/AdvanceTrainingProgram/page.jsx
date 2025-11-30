export default function AdvancedTrainingProgram() {
    return (
        <div className="bg-white text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <section className="bg-blue-600 text-white text-center py-10 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Advanced Training Program (ATP)
                    </h1>
                    <p className="text-lg md:text-xl mt-3 font-medium">
                        Bangladesh’s Most Elite 1-Year Professional Cricket Development Course
                    </p>
                </section>

                {/* MAIN CONTENT */}
                <section className="px-6 md:px-16 py-12">

                    {/* FEATURES LIST */}
                    <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
                        <li>
                            The Advanced Training Program has been specially designed under the guidance of former
                            Bangladesh national cricketers and BCB Level-3 certified coaches to produce the next
                            generation of Tigers.
                        </li>

                        <li>
                            This elite <strong>01-year program</strong> is offered for four age groups —{" "}
                            <strong>Under-14, Under-16, Under-19, and Under-23</strong> — with{" "}
                            <strong>5 sessions per week (4 hours each)</strong>: 3 hours of high-intensity skill
                            coaching + 1 hour of specialised strength, speed & fitness training.
                        </li>

                        <li>
                            Every batch is guided by a complete professional support team:{" "}
                            <strong>
                                Head Coach, Senior Coach, Assistant Coach, Specialist Thrower,
                                BCB-accredited Physiotherapist, and full-time Strength & Conditioning Trainer
                            </strong>{" "}
                            — ensuring 360-degree development.
                        </li>

                        <li>
                            The ATP transforms young players into complete professionals in their chosen discipline —{" "}
                            <strong>batting, bowling, wicket-keeping, or all-rounder</strong> — with individual
                            skill correction, video analysis, and personalised development plans.
                        </li>

                        <li>
                            One-to-one mentoring and daily counselling sessions are conducted by some of Bangladesh’s
                            finest coaching talents — many of whom have coached at{" "}
                            <strong>
                                BCB High Performance (HP) Unit, Bangladesh U-19, A-team, and premier division levels
                            </strong>.
                        </li>

                        <li>
                            Programs of this intensity and structure are normally available only at the{" "}
                            <strong>
                                BCB National Cricket Academy, Mirpur Sher-e-Bangla Stadium HP camps
                            </strong>{" "}
                            — CrickSync now brings the same elite ecosystem to all eight divisions.
                        </li>

                        <li>
                            The curriculum is aligned with international standards & Bangladesh’s unique playing
                            environment — spin-friendly pitches, humidity, seam movement, and mental toughness.
                        </li>
                    </ul>

                    {/* CTA BOX */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 mt-10 p-6 rounded-lg shadow">
                        <p className="text-xl font-semibold">
                            <strong>Join the CrickSync Advanced Training Program</strong> — where Bangladesh’s future national stars train today.
                        </p>
                        <span className="block mt-2 text-blue-700 font-medium">
                            Limited seats. Only the most dedicated and talented need apply.
                        </span>
                    </div>

                    {/* EXTRA SECTION */}
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mt-12 mb-4">
                        Beyond Skills — Complete Professional Development
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                        The focused training is not restricted only to batting, bowling, fielding, and
                        wicket-keeping. It covers every aspect required to become a professional cricketer:
                    </p>

                    {/* EXTRA LIST */}
                    <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
                        <li>Rules of the Game & Umpiring Knowledge</li>
                        <li>Interactions with Professional & Legendary Players</li>
                        <li>Advanced Fitness & Athletic Training</li>
                        <li>Regular Physio Sessions & Injury Management</li>
                        <li>Injury Prevention, Treatment, Diet & Nutrition Guidance</li>
                        <li>Match Mindset, Game Awareness & Tactical Thinking</li>
                        <li>Pressure Management, Leadership & Decision Making</li>
                        <li>Video Analysis Sessions & Performance Reports</li>
                        <li>Regular Fitness Tests & Benchmarking</li>
                        <li>Learning from Experiences of Legendary Bangladeshi Players</li>
                        <li>Realistic Match Simulation & Pressure Scenarios</li>
                    </ol>
                </section>

                {/* WHAT MAKES US DIFFERENT */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-20"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url('/assets/images/advance.webp')"
                    }}
                >
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                            What Make Us Different
                        </h2>

                        <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed">
                            <li>
                                <strong>Certified Coaches:</strong> Our panel consists of former players & BCB certified coaches.
                            </li>
                            <li>
                                <strong>Customized Modules:</strong> Modules tailored for age & ability.
                            </li>
                            <li>
                                <strong>Hands-On Approach:</strong> Coaches stay involved at every step.
                            </li>
                            <li>
                                <strong>In-Depth Analysis:</strong> Video analysis to enhance technical skills.
                            </li>
                            <li>
                                <strong>Lifestyle Guidance:</strong> Guidance on diet & lifestyle.
                            </li>
                            <li>
                                <strong>Treatment and Training:</strong> Certified physios & trainers available.
                            </li>
                            <li>
                                <strong>Sessions & Tests:</strong> Mental conditioning, fitness sessions & fitness tests.
                            </li>
                            <li>
                                <strong>International Exposure:</strong> Global coaching camps & tournaments.
                            </li>
                        </ol>
                    </div>
                </section>

            </div>
        </div>
    );
}
