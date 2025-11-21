'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { GradientButton } from '@/components/ui/gradient-button';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const processSteps = [
    { step: 1, text: 'Free consultation call' },
    { step: 2, text: 'Comprehensive business diagnosis' },
    { step: 3, text: 'Customized growth proposal' }
  ];

  return (
    <div className="bg-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to transform your business? We'd love to hear from you. Contact us today to discuss your project and see how we can help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedCard>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-900/30 border border-green-600/50 text-green-200'
                      : 'bg-red-900/30 border border-red-600/50 text-red-200'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-800 text-white rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all backdrop-blur-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-800 text-white rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all backdrop-blur-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-800 text-white rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all backdrop-blur-sm"
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
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-800 text-white rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all backdrop-blur-sm"
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
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-800 text-white rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all backdrop-blur-sm"
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
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-900/50 border border-secondary-800 text-white rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none transition-all resize-none backdrop-blur-sm"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-primary-600/50 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </AnimatedCard>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedCard delay={0.2}>
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-6 text-center">Our Process</h4>
                <div className="space-y-4">
                  {processSteps.map((item) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item.step * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg shadow-primary-600/30">
                        {item.step}
                      </span>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-secondary-800/50">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h5 className="font-semibold text-white text-sm mb-2">Who We Serve</h5>
                    <p className="text-gray-400 text-sm">Service businesses ready to scale: law firms, medical practices, fitness centers, real estate agencies, and consulting firms.</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="bg-gradient-to-br from-primary-600/10 to-primary-800/10 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Ready to Grow Smarter?</h4>
              <p className="text-gray-400 text-sm mb-6">
                We typically respond within 24 hours with next steps for your free consultation.
              </p>
              <GradientButton
                href="https://calendly.com/tyler-tjltraining/15minutecall"
                className="w-full"
              >
                Schedule a Call
              </GradientButton>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
}
