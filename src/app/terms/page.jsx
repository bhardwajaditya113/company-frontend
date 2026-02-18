'use client';

import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { Gavel, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const TermsPage = () => {
  const terms = [
    {
      id: 1,
      title: 'Agreement to Terms',
      icon: Gavel,
      content: 'By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We may update these terms at any time without notice to you. Your continued use of the site following the posting of revised Terms of Service means that you accept and agree to the changes.',
    },
    {
      id: 2,
      title: 'Use License',
      icon: CheckCircle,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify the materials or use them for any commercial purpose or for any public display (commercial or non-commercial). You may not attempt to decompile, reverse engineer, or disassemble any software contained on the website.',
    },
    {
      id: 3,
      title: 'Disclaimer',
      icon: AlertCircle,
      content: 'The materials on our website are provided on an \'as is\' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    },
    {
      id: 4,
      title: 'Limitations',
      icon: XCircle,
      content: 'In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.',
    },
  ];

  const userResponsibilities = [
    'Comply with all applicable laws and regulations',
    'Provide accurate and complete information',
    'Maintain confidentiality of account credentials',
    'Accept full responsibility for account activity',
    'Not engage in unauthorized access or use',
    'Not transmit harmful or malicious content',
    'Not interfere with service operation',
    'Respect intellectual property rights',
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-orange-400 text-sm font-medium mb-6"
          >
            Legal Information
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Terms of <span className="gradient-text">Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Last updated: January 2026. Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gray-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {terms.map((term) => (
              <motion.a
                key={term.id}
                href={`#section-${term.id}`}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-4 text-center hover:border-orange-500/50 transition-colors"
              >
                <div className="text-gray-400 text-sm mb-2">{term.title}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {terms.map((term, index) => {
              const Icon = term.icon;
              return (
                <motion.div
                  key={term.id}
                  id={`section-${term.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8 md:p-12"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20">
                        <Icon className="h-7 w-7 text-orange-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{term.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6">{term.content}</p>
                      <div className="flex items-center space-x-2 text-sm text-orange-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span>Effective as of January 1, 2026</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">User Responsibilities</h3>
            <p className="text-gray-400 mb-6">As a user of our services, you agree to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {userResponsibilities.map((responsibility, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-orange-500/5"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{responsibility}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Intellectual Property Rights</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              All materials on our website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of our company or its content suppliers and are protected by international copyright laws.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Without limiting the foregoing, you may not: (a) reverse engineer, decompile, or disassemble our services; (b) remove or alter any proprietary notices or labels on the services; (c) rent, lease, or lend the services; (d) transfer, assign, or sublicense your rights; or (e) use the services for unlawful purposes.
            </p>
          </motion.div>

          {/* Service Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Service Availability</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We strive to maintain continuous service availability, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the services at any time without liability. Maintenance, updates, or unforeseen circumstances may result in temporary service interruptions.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              In no event shall our company, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use our services, even if we have been advised of the possibility of such damages. This limitation applies regardless of the legal theory upon which the claim is based.
            </p>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Termination</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your account and access to our services at any time, without notice or liability, for violations of these terms or any unlawful activity. Upon termination, your right to use the services ceases immediately.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Questions or Concerns?</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact our legal team at:
            </p>
            <div className="space-y-2 text-gray-400">
              <p><strong>Email:</strong> legal@company.com</p>
              <p><strong>Mailing Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
              <p><strong>Legal Team:</strong> Available Monday-Friday, 9 AM - 5 PM PST</p>
            </div>
          </motion.div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default TermsPage;
