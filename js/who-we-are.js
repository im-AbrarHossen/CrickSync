// pages/who-we-are.js
export default function WhoWeAre() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Who We Are
      </h1>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About CrickSync</h2>
        <p className="text-lg leading-relaxed">
          The CrickSync academi is one of the largest cricket excellence academy of Bangladesh. Our academy symbolize the highest levels of training where aspiring cricketers receive the finest coaching and resources to excel in the sport.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            To groom every cricketer from grassroots to the highest standards with world-class infrastructure, fitness, and passion in every city.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To develop well-trained sport champions through multidimensional training and foster a healthy, active lifestyle in Bangladeshi Culture.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Accountability", "Synergy & Teamwork", "Respect", "Integrity"].map((v) => (
            <div key={v} className="text-center">
              <h3 className="text-xl font-semibold mb-3">{v}</h3>
              <p className="text-gray-600">
                {v === "Accountability" && "We deliver outstanding results for individuals and community."}
                {v === "Synergy & Teamwork" && "Collaboration drives our success."}
                {v === "Respect" && "We honor diversity and individual rights."}
                {v === "Integrity" && "Honesty, ethics, and fairness guide everything we do."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}