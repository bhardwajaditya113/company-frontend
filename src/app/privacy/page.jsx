'use client';

import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      id: 1,
      title: 'Information We Collect',
      icon: FileText,
      content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us. This includes your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our services, including IP address, browser type, and pages visited.',
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: Eye,
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and comply with legal obligations. We may also use your information to send marketing communications, though you can opt-out at any time. We analyze usage patterns to understand customer preferences and improve our service offerings.',
    },
    {
      id: 3,
      title: 'Data Security',
      icon: Lock,
      content: 'We implement comprehensive security measures to protect your personal information. This includes encryption of data in transit and at rest, secure authentication mechanisms, regular security audits, and compliance with industry standards. Our security team continuously monitors for potential vulnerabilities and threats. However, no method of transmission over the internet is 100% secure, and we encourage you to use strong passwords and notify us of any suspicious activity.',
    },
    {
      id: 4,
      title: 'Your Privacy Rights',
      icon: Shield,
      content: 'You have the right to access, update, or delete your personal information at any time. We comply with applicable privacy laws including GDPR and CCPA. You can request a copy of your personal data, ask for corrections, or request deletion of your information. We will respond to verified requests within the timeframes required by law. You also have the right to opt-out of marketing communications and data sales.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm font-medium mb-6"
          >
            Your Privacy Matters
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Privacy <span className="gradient-text">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Last updated: January 2026. We're committed to protecting your privacy and being transparent about our data practices.
          </motion.p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#section-${section.id}`}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="text-gray-400 text-sm mb-2">{section.title}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={`section-${section.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8 md:p-12"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                        <Icon className="h-7 w-7 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6">{section.content}</p>
                      <div className="flex items-center space-x-2 text-sm text-blue-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>Updated regularly to reflect our practices</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our platform. These help us understand usage patterns, remember your preferences, and deliver relevant content. You can control cookie settings through your browser, though some features may not function properly if cookies are disabled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Third-Party Services</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We may use third-party service providers to perform functions on our behalf, including payment processors, analytics providers, and cloud infrastructure providers. These providers are contractually obligated to protect your information and only use it for the purposes we specify. We are not responsible for third-party services you access through links on our platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">International Data Transfers</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your information may be transferred to countries other than where you reside, including countries that may not provide the same level of data protection as your home country. By using our services, you consent to such transfers. We implement appropriate safeguards including standard contractual clauses and adequacy decisions where applicable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong>Email:</strong> privacy@company.com</p>
              <p><strong>Mailing Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
              <p><strong>Privacy Team:</strong> Available Monday-Friday, 9 AM - 5 PM PST</p>
            </div>
          </motion.div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default PrivacyPage;
