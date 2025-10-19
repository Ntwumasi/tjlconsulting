export default function Contact() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? We&apos;d love to hear from you. Contact us today to discuss your project and see how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-secondary-900 border border-secondary-800 text-white rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-secondary-900 border border-secondary-800 text-white rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-800 text-white rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-800 text-white rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-800 text-white rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="marketing">Marketing & Client Acquisition</option>
                  <option value="revenue">Revenue Optimization</option>
                  <option value="operations">Operations & Scaling</option>
                  <option value="ai">AI & Tech Implementation</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary-900 border border-secondary-800 text-white rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-colors resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-secondary-900 to-black rounded-lg p-6 md:p-8 border border-secondary-800">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>

              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Our Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                      <span className="text-gray-300 text-left">Free consultation call</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                      <span className="text-gray-300 text-left">Comprehensive business diagnosis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                      <span className="text-gray-300 text-left">Customized growth proposal</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-lg p-6 border border-secondary-800">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h5 className="font-semibold text-white text-sm mb-2">Who We Serve</h5>
                      <p className="text-gray-300 text-sm">Service businesses ready to scale: law firms, medical practices, fitness centers, real estate agencies, and consulting firms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-600 text-white rounded-lg p-6 md:p-8 text-center">
              <h4 className="text-xl font-semibold mb-2">Ready to Grow Smarter?</h4>
              <p className="text-primary-100 text-sm mb-6">
                We typically respond within 24 hours with next steps for your free consultation.
              </p>
              <a href="https://calendly.com/tyler-tjltraining/15minutecall" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold w-full">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
