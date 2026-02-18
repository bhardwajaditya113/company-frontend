'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { ArrowLeft, CheckCircle2, Building2, Target, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/config';

export default function IndustryDetailClient({ slug }) {
  const [industry, setIndustry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustry = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/industries/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setIndustry(data);
        }
      } catch (error) {
        console.error('Error fetching industry:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchIndustry();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!industry) {
    return (
      <div className="min-h-screen bg-gray-900">
        <FuturisticNavbar />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Return to Homepage
            </Link>
          </div>
        </div>
        <FuturisticFooter />
      </div>
    );
  }

  const solutions = industry.solutions ? industry.solutions.split('\n').filter(s => s.trim()) : [];

  const highlights = [
    { icon: Target, label: 'Strategic Focus', value: 'Industry-Specific' },
    { icon: Award, label: 'Expertise Level', value: 'Expert' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Building2, label: 'Client Base', value: 'Global' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-cyan-900/20 to-blue-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-6">
                Industry Expertise
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {industry.name}
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                {industry.short_description || industry.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold glow-blue"
              >
                Explore Solutions
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                    <Building2 className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Industry Leadership</h3>
                  <p className="text-gray-400">
                    Transforming businesses with specialized solutions tailored for this industry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <highlight.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{highlight.value}</div>
                <div className="text-sm text-gray-400">{highlight.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Industry Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {industry.description}
                  </p>
                </div>

                {solutions.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Solutions</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-white/5"
                        >
                          <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{solution}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies Section */}
              <div className="glass rounded-3xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-white mb-6">Success Stories</h3>
                <p className="text-gray-400">
                  Discover how we've helped businesses in the {industry.name.toLowerCase()} industry achieve remarkable results.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 rounded-xl glass text-white font-semibold"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                <p className="text-gray-400 mb-6">
                  Ready to transform your {industry.name.toLowerCase()} business? Let's discuss your challenges.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-center glow-blue"
                >
                  Get Consultation
                </Link>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Why Choose Us</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Industry veterans</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Proven methodologies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Custom solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Measurable results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
}
