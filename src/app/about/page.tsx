'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { GradientButton } from '@/components/ui/gradient-button';

export default function About() {
  const team = [
    {
      name: 'Tyler',
      role: 'Marketing & Operations Expert',
      bio: [
        "I'm a marketer-operator who helps service based businesses scale using modern scaling, marketing, and AI solutions. I built TJL Training from the ground up—growing to hundreds of clients, two physical locations, and a 100k+ social audience. That journey taught me the full stack of scaling: positioning your service, offers that convert, content, client acquisition that pays for itself, and the unsexy systems that make growth sustainable.",
        "I then helped other basketball trainers replicate those results—running targeted ad campaigns, crafting offers that sell, and building simple pipelines that turn attention into bookings. Today I apply the same playbook to service-based businesses of all kinds, delivering reliable growth."
      ]
    },
    {
      name: 'Nokio',
      role: 'AI & Tech Expertise',
      bio: [
        "I'm a cloud and software engineer specializing in building AI-powered solutions and scalable digital systems. With a background in AWS, Next.js, and automation, I design the tech frameworks that turn marketing strategies into reliable growth engines. From streamlining operations with AI to building secure, high-performance websites and data systems, I make sure businesses can scale with confidence and efficiency."
      ]
    }
  ];

  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Full-Stack Approach',
      description: 'Marketing, operations, and technology working in harmony'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Solutions',
      description: 'Modern tech for efficient scaling and automation'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Proven Results',
      description: 'Systems tested and refined through real business growth'
    }
  ];

  const industries = [
    { name: 'Health & Wellness', icon: '❤️' },
    { name: 'Home Services', icon: '🏠' },
    { name: 'Event Services', icon: '📅' },
    { name: 'Niche Services', icon: '💡' }
  ];

  return (
    <div className="bg-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About TJL Consulting"
          subtitle="Empowering service businesses to grow smarter, not just bigger through data-driven strategies and practical scaling systems."
        />

        {/* Team Section */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Team</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 font-semibold mb-6">
                  {member.role}
                </p>
                {member.bio.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-400 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          >
            Our Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Edge</span>
          </motion.h2>

          <AnimatedCard className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">Holistic Approach</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              We take a full-stack approach to business growth—blending product positioning, client acquisition, and customer journey design with seamless back-end tech optimization. From shaping an irresistible offer and refining the product itself to building systems that attract, convert, and retain clients, we cover every layer of the growth engine. The result is a reliable, scalable framework where marketing, operations, and technology all work together to drive sustainable success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-600/30 group-hover:to-primary-800/30 transition-all duration-300"
                  >
                    {advantage.icon}
                  </motion.div>
                  <h4 className="font-semibold text-white mb-2">{advantage.title}</h4>
                  <p className="text-gray-400 text-sm">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>

        {/* Who We Serve */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          >
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Serve</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-secondary-900/80 to-secondary-950/80 backdrop-blur-xl border border-secondary-800/50 rounded-2xl p-8 h-full group-hover:border-primary-600/50 transition-all duration-300">
                  <div className="text-5xl mb-4 text-center">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white text-center">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedCard className="text-center bg-gradient-to-br from-primary-600/10 to-primary-800/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Confidence?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join successful service businesses that have transformed their growth with our proven systems and strategies.
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
