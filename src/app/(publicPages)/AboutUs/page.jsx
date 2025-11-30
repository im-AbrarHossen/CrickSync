export default function AboutUs() {
    return (
        <div className="bg-gray-100 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* About Title */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-600">About Us</h2>
                </div>

                {/* Who We Are */}
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">Who We Are?</h1>

                <h2 className="text-xl font-semibold text-blue-600 mt-6">Why CrickSync Academy?</h2>
                <p className="mt-2 leading-relaxed">
                    Our academy symbolize the highest levels of training where rising cricketers receive
                    the finest coaching and resources to improvement in the sport of cricket. These
                    academy represent the principle of cricket development, guided by some of our excellent coaches.
                </p>

                {/* Vision */}
                <h2 className="text-xl font-semibold text-blue-600 mt-6">Our Vision</h2>
                <p className="mt-2 leading-relaxed">
                    Our Vision is to help every cricketer groom from a grass root level to the highest
                    standards along with fitness & passion. We want to make accessible the best infrastructure
                    for cricket aspirants in every city and bring best opportunities for every legend.
                </p>

                {/* Goal */}
                <h2 className="text-xl font-semibold text-blue-600 mt-6">Our Goal</h2>
                <p className="mt-2 leading-relaxed">
                    Our Goal is to make minimum 500 cricketers per year who will represent Bangladesh Cricket
                    Team in near future by do some step by step processes.
                </p>

                {/* Values */}
                <h1 className="text-3xl font-bold text-blue-600 text-center mt-10 mb-4">Our Value</h1>

                <h2 className="text-xl font-semibold text-blue-600 mt-4">Accountability</h2>
                <p className="mt-2 leading-relaxed">
                    We are accountable for using and developing our individual and collective capabilities to
                    achieve outstanding results both for the individual and for the community.
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mt-4">Respect</h2>
                <p className="mt-2 leading-relaxed">
                    We honor sensitively the values, rights, and needs of others and embrace the diversity
                    provided by each individual irrespective of culture, orientation, race, class or gender.
                </p>

                {/* Team Section */}
                <h1 className="text-3xl font-bold text-blue-600 text-center mt-10">Our Team</h1>

                <div className="flex flex-wrap justify-center gap-8 mt-8">

                    {/* Member 1 */}
                    <div className="text-center">
                        <img
                            src="/assets/images/Abrar_Vai.webp"
                            alt="Md Abrar Hossain"
                            className="h-28 w-28 rounded-full object-cover mx-auto"
                        />
                        <p className="font-bold mt-2">Md. Abrar Hossen</p>
                        <span className="text-gray-700">Founder</span>
                    </div>

                    {/* Member 2 */}
                    <div className="text-center">
                        <img
                            src="/assets/images/Wadud.webp"
                            alt="Abdul Wadud"
                            className="h-28 w-28 rounded-full object-cover mx-auto"
                        />
                        <p className="font-bold mt-2">Abdul Wadud</p>
                        <span className="text-gray-700">Co-Founder</span>
                    </div>

                    {/* Member 3 */}
                    <div className="text-center">
                        <img
                            src="/assets/images/Rifat_Vai.webp"
                            alt="Rifat Mahmud"
                            className="h-28 w-28 rounded-full object-cover mx-auto"
                        />
                        <p className="font-bold mt-2">Rifat Mahmud</p>
                        <span className="text-gray-700">CEO</span>
                    </div>

                    {/* Member 4 */}
                    <div className="text-center">
                        <img
                            src="/assets/images/Burhan_Vai.webp"
                            alt="Burhan Uddin"
                            className="h-28 w-28 rounded-full object-cover mx-auto"
                        />
                        <p className="font-bold mt-2">Burhan Uddin</p>
                        <span className="text-gray-700">Manager</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
