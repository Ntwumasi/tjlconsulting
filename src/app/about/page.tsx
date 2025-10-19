export default function About() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary-600">TJL Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering service businesses to grow smarter, not just bigger through data-driven strategies and practical scaling systems.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gradient-to-br from-secondary-900 to-black rounded-lg p-6 md:p-8 border border-secondary-800">
              <h3 className="text-2xl font-bold text-white mb-2">Tyler</h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">Marketing & Operations Expert</p>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a marketer-operator who helps service based businesses scale using modern scaling, marketing, and AI solutions. I built TJL Training from the ground up—growing to hundreds of clients, two physical locations, and a 100k+ social audience. That journey taught me the full stack of scaling: positioning your service, offers that convert, content, client acquisition that pays for itself, and the unsexy systems that make growth sustainable.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I then helped other basketball trainers replicate those results—running targeted ad campaigns, crafting offers that sell, and building simple pipelines that turn attention into bookings. Today I apply the same playbook to service-based businesses of all kinds, delivering reliable growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-900 to-black rounded-lg p-6 md:p-8 border border-secondary-800">
              <h3 className="text-2xl font-bold text-white mb-2">Nokio</h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">AI & Tech Expertise</p>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a cloud and software engineer specializing in building AI-powered solutions and scalable digital systems. With a background in AWS, Next.js, and automation, I design the tech frameworks that turn marketing strategies into reliable growth engines. From streamlining operations with AI to building secure, high-performance websites and data systems, I make sure businesses can scale with confidence and efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Competitive Edge</h2>
          <div className="bg-gradient-to-br from-secondary-900 to-black rounded-lg p-8 md:p-12 border border-secondary-800">
            <h3 className="text-2xl font-bold text-white mb-6">Holistic Approach</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We take a full-stack approach to business growth—blending product positioning, client acquisition, and customer journey design with seamless back-end tech optimization. From shaping an irresistible offer and refining the product itself to building systems that attract, convert, and retain clients, we cover every layer of the growth engine. The result is a reliable, scalable framework where marketing, operations, and technology all work together to drive sustainable success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Full-Stack Approach</h4>
                <p className="text-gray-300 text-sm">Marketing, operations, and technology working in harmony</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">AI-Powered Solutions</h4>
                <p className="text-gray-300 text-sm">Modern tech for efficient scaling and automation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Proven Results</h4>
                <p className="text-gray-300 text-sm">Systems tested and refined through real business growth</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-secondary-900 to-black border border-secondary-800 rounded-lg p-6 hover:border-primary-600 transition-colors">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Health & Wellness</h3>
              <p className="text-gray-300 text-sm">Fitness centers, wellness practices, and health service providers</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-900 to-black border border-secondary-800 rounded-lg p-6 hover:border-primary-600 transition-colors">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Home Services</h3>
              <p className="text-gray-300 text-sm">Contractors, cleaning services, and home maintenance providers</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-900 to-black border border-secondary-800 rounded-lg p-6 hover:border-primary-600 transition-colors">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Event Services</h3>
              <p className="text-gray-300 text-sm">Event planning, catering, and entertainment services</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-900 to-black border border-secondary-800 rounded-lg p-6 hover:border-primary-600 transition-colors">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Niche Services</h3>
              <p className="text-gray-300 text-sm">High-skilled specialized services and consultancies</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Scale With Confidence?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Join successful service businesses that have transformed their growth with our proven systems and strategies.
          </p>
          <a href="https://calendly.com/tyler-tjltraining/15minutecall" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
