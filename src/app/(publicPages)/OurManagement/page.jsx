export default function OurManagement() {
    const teamMembers = [
        {
            name: "Md Abrar Hossain",
            role: "Founder",
            img: "/assets/images/Abrar_Vai.webp",
        },
        {
            name: "Abdul Wadud",
            role: "Co-Founder",
            img: "/assets/images/Wadud.webp",
        },
        {
            name: "Rifat Mahmud",
            role: "Chief Executive Officer (CEO)",
            img: "/assets/images/Rifat_Vai.webp",
        },
        {
            name: "Burhan Uddin",
            role: "Manager",
            img: "/assets/images/Burhan_Vai.webp",
        },
    ];

    return (
        <div className="bg-gray-100 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* INTRO */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                        Our Management
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                        CrickSync Academy is one of the most passionate and popular cricket academies in Bangladesh.
                        For many years, it has been dedicated to nurturing young, enthusiastic cricketers and helping them
                        perform at the highest level of the game.
                        <br /><br />
                        Founded by <strong>Md. Abrar Hossain</strong>, a former cricketer of the Bangladesh National Team,
                        CrickSync is not just another academy — it is a complete 360-degree sports development institute
                        designed to unlock the full potential of every player.
                        <br /><br />
                        We focus on building a strong sporting ecosystem in Bangladesh through world-class academies in every division,
                        cutting-edge technology, pitch intelligence, character building, and deep understanding of the laws of the game.
                    </p>
                </div>

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="bg-white p-6 md:p-8 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 mx-auto mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-red-600 font-semibold text-lg">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
