import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-avenir font-bold mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-avenir max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or need expert marketing solutions? We're here to help!
            Reach out to us, and let's start crafting strategies that drive real results.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Social Media Links */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-avenir font-bold text-gray-900 dark:text-white mb-8">
              Follow Us
            </h2>
            <div className="flex justify-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/renartglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <p className="mt-3 text-sm font-avenir text-gray-700 dark:text-gray-300">@renartglobal</p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/renartglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-16 h-16 bg-[#0A66C2] rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <p className="mt-3 text-sm font-avenir text-gray-700 dark:text-gray-300">Renart Global</p>
              </a>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-16">
            <h2 className="text-4xl font-avenir font-bold text-gray-900 dark:text-white mb-12 text-center">
              Our Offices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Renart HQ - Istanbul */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-avenir font-bold text-gray-900 dark:text-white mb-4">
                  Renart HQ
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-avenir">
                    Aytar Caddesi<br/>
                    Fecri Ebcioğlu Sk. No:4 D:1<br/>
                    Levent, Istanbul<br/>
                    Turkey
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-avenir">
                    🇹🇷 Headquarters
                  </p>
                </div>
              </div>

              {/* Renart Studio & Hub - Istanbul */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-avenir font-bold text-gray-900 dark:text-white mb-4">
                  Renart Studio & Hub
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-avenir">
                    Dudullu OSB<br/>
                    İmes A/102 Sk. No:1<br/>
                    Istanbul<br/>
                    Turkey
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-avenir">
                    🇹🇷 Studio & Production
                  </p>
                </div>
              </div>

              {/* Renart New York Office */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">🗽</div>
                <h3 className="text-2xl font-avenir font-bold text-gray-900 dark:text-white mb-4">
                  Renart New York Office
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-avenir">
                    66 W 47th St, MZ-19<br/>
                    New York, NY 10036<br/>
                    United States
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-avenir">
                    🇺🇸 USA Office
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-avenir font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-avenir mb-8">
            Let's craft strategies that drive real results together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/renartglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-avenir font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/renartglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white px-8 py-4 rounded-lg font-avenir font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
