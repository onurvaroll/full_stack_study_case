import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-avenir font-bold mb-6">
              Our Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-avenir max-w-3xl mx-auto leading-relaxed">
              Renart is a fully integrated group company, housing different brands under its roof. 
              Our different brands are all connected by a culture of innovation, collaboration and 
              a commitment to social and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-avenir font-bold text-gray-900 dark:text-white mb-6">
                Who are we?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-avenir leading-relaxed">
                At Renart, we are a team of curious individuals with diverse backgrounds and 
                various areas of expertise, all brought together by a shared can-do attitude. 
                By collaborating across different fields and areas of know-how, together, 
                we develop brands with unique value propositions and engineer sustainable, 
                seamlessly tailored shopping experiences for the evolving and dynamic needs 
                of modern-day customers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {/* Stats */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
                <div className="text-5xl font-bold text-yellow-gold mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400 font-avenir">Years of Experience</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
                <div className="text-5xl font-bold text-rose-gold mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400 font-avenir">Client Satisfaction</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center col-span-2">
                <div className="text-5xl font-bold text-white-gold mb-2">13+</div>
                <div className="text-gray-600 dark:text-gray-400 font-avenir">Brands Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-avenir font-bold text-gray-900 dark:text-white mb-16 text-center">
            Operational Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-yellow-gold text-4xl font-bold mb-4">01.</div>
              <h3 className="text-2xl font-avenir font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-gold transition-colors">
                End-to-End Ownership
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-avenir leading-relaxed">
                The very basic pillar of our operational philosophy is the principle of 
                end-to-end ownership. From the initial idea all the way to the final production, 
                marketing and after services, everything is done in-house.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-rose-gold text-4xl font-bold mb-4">02.</div>
              <h3 className="text-2xl font-avenir font-bold text-gray-900 dark:text-white mb-4 group-hover:text-rose-gold transition-colors">
                Cross-functional Collaboration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-avenir leading-relaxed">
                We are where the engineering mind meets the artistic soul. Collaboration and 
                collegiality are what makes our organization unique. We value different 
                intelligences, skills and perspectives, and foster a culture where teams from 
                different departments seamlessly come together.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="text-white-gold text-4xl font-bold mb-4">03.</div>
              <h3 className="text-2xl font-avenir font-bold text-gray-900 dark:text-white mb-4 group-hover:text-white-gold transition-colors">
                Dynamism and Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-avenir leading-relaxed">
                We want to engineer and reinvent the entire process of production and marketing 
                to create a seamless, sustainable, reliable and enjoyable experience for our 
                customers. That's why dynamism and innovation are at the core of our DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-avenir font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Locations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Renart HQ */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-avenir font-bold text-gray-900 dark:text-white mb-3">
                Renart HQ
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-avenir">
                Aytar Caddesi Fecri Ebcioğlu Sk. No:4 D:1<br/>
                Levent, Istanbul
              </p>
            </div>

            {/* Studio & Hub */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-avenir font-bold text-gray-900 dark:text-white mb-3">
                Renart Studio & Hub
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-avenir">
                Dudullu OSB İmes A/102 Sk. No:1<br/>
                Istanbul
              </p>
            </div>

            {/* New York Office */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🗽</div>
              <h3 className="text-xl font-avenir font-bold text-gray-900 dark:text-white mb-3">
                Renart New York Office
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-avenir">
                66 W 47th St, MZ-19<br/>
                New York, NY 10036 USA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-avenir font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 font-avenir mb-8">
            Let's create something amazing together
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-avenir font-semibold text-lg hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
