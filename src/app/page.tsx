import { getHomepage, getServices } from '../../lib/sanity.client'
import { Homepage, Service } from '../../lib/sanity.types'

export default async function Home() {
  // Fallback data in case Sanity is not configured yet
  const fallbackHomepage: Partial<Homepage> = {
    heroTitle: 'Scale With Confidence',
    heroSubtitle: 'TJL Business Consulting is a full service-based business that attracts the right clients that convert at a higher rate, and scale profitably through tested marketing, operations, and AI solutions.',
    primaryButtonText: 'Free Consultation',
    secondaryButtonText: 'View Case Studies',
    servicesTitle: 'Our Core Services',
    servicesSubtitle: 'We combine marketing, operations, and AI-powered solutions to deliver measurable results for service businesses',
    whoWeServeTitle: 'Who We Serve',
    whoWeServeSubtitle: 'We specialize in helping service businesses achieve sustainable growth through proven systems and strategies.',
    targetMarkets: [
      'Health and wellness businesses',
      'Home service businesses',
      'Event services',
      'High skilled niche services',
      'And more'
    ],
    ctaTitle: 'Ready to Grow Smarter?',
    ctaSubtitle: 'Join successful service businesses that have transformed their growth with our proven systems',
    ctaButtonText: 'Schedule Free Consultation'
  }

  let homepage: Homepage | null = null
  let services: Service[] = []

  try {
    homepage = await getHomepage()
    services = await getServices()
  } catch (error) {
    console.log('Sanity not configured yet, using fallback data')
  }

  // Use Sanity data if available, otherwise use fallback
  const data = homepage || fallbackHomepage
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              {data.heroTitle || 'Scale With Confidence'}
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-4xl mx-auto">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                {data.primaryButtonText || 'Free Consultation'}
              </button>
              <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold">
                {data.secondaryButtonText || 'View Case Studies'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              {data.servicesTitle || 'Our Core Services'}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {data.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Client Acquisition</h3>
              <p className="text-secondary-600">Social media content, paid advertising and lead generation systems</p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Revenue Optimization</h3>
              <p className="text-secondary-600">Customer journey mapping, upsell/cross-sell and retention strategies</p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Operations and Scaling</h3>
              <p className="text-secondary-600">Growth models, process optimization, SOPs, hiring and training systems</p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-secondary-50 hover:bg-secondary-100 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Website and AI Implementation</h3>
              <p className="text-secondary-600">Website design, AI automation, and efficiency tools to make your work more efficient</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Who We Serve
              </h2>
              <p className="text-xl text-secondary-600 mb-6">
                We specialize in helping service businesses achieve sustainable growth through proven systems and strategies.
              </p>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Health and wellness businesses
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Home service businesses
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Event services
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  High skilled niche services
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  And more
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Ready to Scale?</h3>
                <p className="text-secondary-600">Get a free business diagnosis and customized growth plan</p>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Step 1</span>
                  <span className="text-secondary-600">Free consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Step 2</span>
                  <span className="text-secondary-600">Business diagnosis</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Step 3</span>
                  <span className="text-secondary-600">Customized proposal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Ready to Grow Smarter?
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Join successful service businesses that have transformed their growth with our proven systems
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}