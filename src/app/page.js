import Link from "next/link";
import HeroSection from "./components/HeroSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const practiceItems = [
    "4 Practice Sessions a Week of 3 Hours Each",
    "2 Match Days",
    "Net Practice Sessions for improving in Batting & Bowling",
    "On-field drills and sessions for Fielding and Wicket-keeping",
    "Physical, Mental Fitness and Motivation Sessions",
  ];

  const differentItems = [
    {
      title: "Certified Coaches",
      desc: "Our panel of coaches comprises of renowned former players and BCB certified coaches",
    },
    {
      title: "Customized Modules",
      desc: "Our coaching modules are customized as per age and ability",
    },
    {
      title: "Hands-On Approach",
      desc: "Our approach towards coaching is hands-on and our coaches are available at every step for the players",
    },
    {
      title: "In-Depth Analysis",
      desc: "We provide an in-depth video analysis to correct and improve the technical aspects of the game",
    },
    {
      title: "Lifestyle Guidance",
      desc: "Detailed information and guidance are provided about balanced diet and lifestyle",
    },
    {
      title: "Treatment and Training",
      desc: "Treatment and training by certified physios and trainers",
    },
    {
      title: "Sessions and Tests",
      desc: "Coaching includes mental conditioning sessions, fitness sessions and fitness tests",
    },
    {
      title: "International Exposure",
      desc: "International exposure is provided through frequent coaching camps and tournaments",
    },
  ];

  const tours = [
    {
      img: "/assets/images/Srilanka.webp",
      title: "Sri Lanka Tour",
      desc: "Play on spin-friendly pitches, face quality bowling, and experience island cricket culture.",
      link: "#",
    },
    {
      img: "/assets/images/England.webp",
      title: "England Tour",
      desc: "Seam & swing challenge on green tracks – perfect for fast bowlers and resilient batsmen.",
      link: "#",
    },
    {
      img: "/assets/images/Australia.webp",
      title: "Australia Tour",
      desc: "Bouncy pitches, world-class facilities, and competitive matches Down Under.",
      link: "#",
    },
  ];

  const blogPosts = [
    {
      img: "/assets/images/Shakib.webp",
      date: "25 Nov 2025",
      title: "How to Play Spin Like Shakib Al Hasan",
      desc: "Learn footwork, grip, and mindset secrets directly from our coaches.",
      link: "#",
    },
    {
      img: "/assets/images/Mustafiz.webp",
      date: "18 Nov 2025",
      title: "Building Express Pace - Bangladesh Style",
      desc: "Step-by-step training plan used by Taskin Ahmed & Mustafizur Rahman.",
      link: "#",
    },
    {
      img: "/assets/images/mushfiq.webp",
      date: "10 Nov 2025",
      title: "Mental Toughness Secrets of Bangladesh Tigers",
      desc: "How our U-19 players learn to stay calm in pressure situations.",
      link: "#",
    },
  ];
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="pb-10">
        {/* 1. Practice & Matches Section */}
        <section className="max-w-6xl mx-auto my-16 bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8 uppercase">Practice Sessions & Matches</h2>
          <p className="text-center mb-6">We believe that practice makes a man perfect. Our sessions include:</p>
          <ul className="list-disc list-inside space-y-3 max-w-xl mx-auto">
            {practiceItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-center"><strong>Coach to student ratio 1:20</strong></p>
        </section>

        {/* 2. What Makes Us Different Section */}
        <section className="bg-linear-to-b from-gray-800 to-gray-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-12 uppercase">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {differentItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. High-Performance Camps */}
        <section className="max-w-6xl mx-auto my-16 bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8 uppercase">High-Performance Camps</h2>
          <p className="mb-6">
            Special camps to develop technical skills, physical fitness, and mental toughness under BCB certified coaches.
          </p>
          <ul className="list-disc list-inside space-y-3 max-w-xl mx-auto">
            <li>Strength & conditioning drills</li>
            <li>Batting, bowling, fielding & wicket-keeping sessions</li>
            <li>Mental conditioning for pressure situations</li>
            <li>Match awareness & strategy training</li>
          </ul>
        </section>

        {/* 4. Domestic & International Tours */}
        <section className="max-w-6xl mx-auto my-16">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-10 uppercase">International Tours</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-800 transform hover:-translate-y-2 transition">
                <img src={tour.img} alt={tour.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{tour.title}</h3>
                  <p className="mb-4">{tour.desc}</p>
                  <a href={tour.link} className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition">Join Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Blogs & Insights */}
        <section className="max-w-6xl mx-auto my-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10 uppercase">Latest Blogs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-red-600 transform hover:-translate-y-2 transition">
                <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-blue-900 text-sm font-semibold mb-2 flex items-center gap-2"><i className="far fa-calendar"></i> {blog.date}</span>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{blog.title}</h3>
                  <p className="mb-4">{blog.desc}</p>
                  <a href={blog.link} className="text-red-600 font-bold hover:text-blue-900">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Enrollment Section */}
        <section id="enroll" className="max-w-5xl mx-auto my-16 bg-white p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 uppercase">Enroll With Us</h2>
          <p className="mb-6">Join CrickSync Academy and become part of the next generation of Bangladesh cricket stars.</p>
          <form className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name *" required className="p-3 border rounded" />
            <input type="email" placeholder="Email *" required className="p-3 border rounded" />
            <input type="text" placeholder="Phone *" required className="p-3 border rounded" />
            <input type="text" placeholder="Division *" required className="p-3 border rounded" />
            <textarea placeholder="Message" className="p-3 border rounded md:col-span-2"></textarea>
            <button className="md:col-span-2 bg-red-600 text-white p-3 rounded font-bold hover:bg-blue-800 transition">Submit</button>
          </form>
        </section>

        {/* 7. Contact Info Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
            <div className="flex items-center justify-center gap-4">
              <i className="fas fa-phone text-red-600 text-2xl"></i>
              <div>
                <h4 className="font-bold text-blue-800">Phone</h4>
                +880 1883914663
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <i className="fas fa-envelope text-red-600 text-2xl"></i>
              <div>
                <h4 className="font-bold text-blue-800">Email</h4>
                info@cricksync.in
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <i className="fas fa-map-marker-alt text-red-600 text-2xl"></i>
              <div>
                <h4 className="font-bold text-blue-800">Address</h4>
                Mirpur, Dhaka (Near Shere Bangla National Cricket Stadium)
              </div>
            </div>
          </div>
        </section>

        {/* 8. Social Media Section */}
        <section className="text-center py-10">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 uppercase">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center text-xl hover:bg-red-600 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center text-xl hover:bg-blue-800 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-300 text-white rounded-full flex items-center justify-center text-xl hover:bg-red-600 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </section>

        {/* 9. Testimonials / Achievements */}
        <section className="max-w-6xl mx-auto my-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10 uppercase">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-2">50+</h3>
              <p>District Players Represented</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-2">30+</h3>
              <p>Graduates in BCB HP Units</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-2">10+</h3>
              <p>National Call-ups (U19 & Senior)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
