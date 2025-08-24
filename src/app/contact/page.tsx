export default function Contact() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to transform your business? We&apos;d love to hear from you. Contact us today to discuss your project and see how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
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
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
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
          
          <div>
            <div className="bg-secondary-50 rounded-lg p-8 h-fit">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Get Started Today</h3>
              
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">Our Process</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span className="text-secondary-600">Free consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span className="text-secondary-600">Business diagnosis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span className="text-secondary-600">Customized proposal</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Investment Levels</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Monthly Retainers:</span>
                      <span className="font-medium">$3,000 - $10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">One-off Projects:</span>
                      <span className="font-medium">$1,500 - $5,000</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h5 className="font-semibold text-secondary-900 text-sm">Who We Serve</h5>
                      <p className="text-secondary-600 text-sm">Service businesses ready to scale: law firms, medical practices, fitness centers, real estate agencies, and consulting firms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-primary-600 text-white rounded-lg p-6 text-center">
              <h4 className="font-semibold mb-2">Ready to Grow Smarter?</h4>
              <p className="text-primary-100 text-sm mb-4">
                We typically respond within 24 hours with next steps for your free consultation.
              </p>
              <div className="text-2xl font-bold">35-40% ROI Target</div>
              <div className="text-primary-200 text-sm">Our proven profit margins</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}