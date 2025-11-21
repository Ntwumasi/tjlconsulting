'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { GradientButton } from '@/components/ui/gradient-button';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      title: 'Marketing & Client Acquisition',
      description: 'We help service businesses attract and convert more qualified leads through strategic social media campaigns, targeted paid advertising, and optimized lead generation systems that deliver consistent, measurable results.',
      features: [
        'Social media strategy and content creation',
        'Paid advertising campaigns (Google, Facebook, LinkedIn)',
        'Lead generation and conversion optimization'
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Revenue Optimization',
      description: 'Maximize revenue from existing clients through strategic customer journey mapping, targeted upsell and cross-sell campaigns, and loyalty programs that increase customer lifetime value and retention.',
      features: [
        'Customer journey mapping and optimization',
        'Upsell and cross-sell strategy development',
        'Customer loyalty and retention programs'
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Operations & Scaling',
      description: 'Scale your business efficiently with optimized processes, standard operating procedures (SOPs), and strategic hiring and training systems that ensure consistent service delivery as you grow.',
      features: [
        'Process optimization and standardization',
        'Standard Operating Procedures (SOPs) development',
        'Strategic hiring and training programs'
      ]
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI & Tech Implementation',
      description: 'Leverage cutting-edge AI and automation tools to streamline operations, enhance marketing effectiveness, and improve overall business efficiency while maintaining the personal touch your clients expect.',
      features: [
        'Business process automation',
        'AI-assisted marketing and content creation',
        'Efficiency tools and workflow optimization'
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Core Services"
          subtitle="We combine marketing, operations, and AI-powered solutions to deliver measurable results for service-based businesses."
        />

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <AnimatedCard delay={0.2} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary-600/30"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white">{service.title.split('&')[0]}</h3>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <AnimatedCard className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Smarter?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Our proven systems help service businesses attract more clients, increase revenue, and scale efficiently.
            </p>
            <GradientButton href="https://calendly.com/tyler-tjltraining/15minutecall">
              Schedule Free Consultation
            </GradientButton>
          </AnimatedCard>
        </motion.div>
      </div>
    </div>
  );
}
