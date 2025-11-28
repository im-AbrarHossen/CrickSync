// pages/contact-us.js
export default function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg" required />
            <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg" required />
            <input type="tel" placeholder="Phone" className="w-full p-4 border rounded-lg" />
            <textarea rows={6} placeholder="Message" className="w-full p-4 border rounded-lg" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>

        {/* Details */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-lg"><strong>Email:</strong> info@cricksync.bd</p>
            <p className="text-lg"><strong>Dhaka</strong> 01883914663</p>
            <p className="text-lg"><strong>Other Centers:</strong> 01623756522</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Head Office</h3>
            <p className="text-lg">
              CrickSync Academy<br />
              Near SBNCS<br />
              Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}