import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AdmissionContact() {
    return (
        <div className="bg-gray-100 text-black py-20">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 text-center uppercase mb-10">
                    For Admission
                </h1>

                {/* ENROLL WITH US SECTION */}
                <section className="bg-white py-16 px-4 md:px-10 text-center border-t-4 border-red-600 border-b border-b-gray-200 rounded-xl">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-blue-600">
                        Enroll With Us Today!
                    </h2>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto mb-10">
                        <div className="flex items-start gap-4 min-w-[220px] text-left">
                            <FaPhone className="text-red-600 text-2xl mt-1" />
                            <div>
                                <strong className="block text-blue-600 mb-1">Phone</strong>
                                +880 1883914663
                            </div>
                        </div>

                        <div className="flex items-start gap-4 min-w-[220px] text-left">
                            <FaEnvelope className="text-red-600 text-2xl mt-1" />
                            <div>
                                <strong className="block text-blue-600 mb-1">Email</strong>
                                info@cricksync.in
                            </div>
                        </div>

                        <div className="flex items-start gap-4 min-w-[220px] text-left">
                            <FaMapMarkerAlt className="text-red-600 text-2xl mt-1" />
                            <div>
                                <strong className="block text-blue-600 mb-1">Address</strong>
                                Mirpur, Dhaka <br />
                                (Near Shere Bangla National Cricket Stadium)
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-5">
                        <a href="#" className="w-12 h-12 bg-gray-300 text-gray-600 flex items-center justify-center rounded-full text-lg hover:bg-red-600 hover:text-white transition-transform transform hover:-translate-y-1">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-12 h-12 bg-gray-300 text-gray-600 flex items-center justify-center rounded-full text-lg hover:bg-red-600 hover:text-white transition-transform transform hover:-translate-y-1">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-12 h-12 bg-gray-300 text-gray-600 flex items-center justify-center rounded-full text-lg hover:bg-red-600 hover:text-white transition-transform transform hover:-translate-y-1">
                            <FaInstagram />
                        </a>
                    </div>
                </section>

                {/* CONTACT FORM SECTION */}
                <section className="max-w-2xl mx-auto mt-20 px-4 md:px-0">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-4 text-blue-600">
                        Send a Message
                    </h2>
                    <p className="text-center text-sm mb-8">
                        Your email address will not be published. Required fields are marked <span className="text-red-600">*</span>
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-semibold mb-1">
                                Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-semibold mb-1">
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block font-semibold mb-1">
                                Subject <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-semibold mb-1">
                                Message <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="8"
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto bg-red-600 text-white font-bold text-lg uppercase px-10 py-4 rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}
