'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { Target, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';
import { API_BASE_URL } from '@/config/config';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const response = await fetch(`${API_BASE_URL}/aboutpage`);
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Users, label: 'Setup & Growth', value: aboutData?.setup_growth || '250', suffix: '+' },
    { icon: Award, label: 'Problem Solving', value: aboutData?.problem_solving || '98', suffix: '%' },
    { icon: TrendingUp, label: 'Passive Income', value: aboutData?.passive_income || '50', suffix: 'M+' },
    { icon: Target, label: 'Goal Achiever', value: aboutData?.goal_achiever || '100', suffix: '%' },
  ];

  const values = [
    { icon: Shield, title: 'Security First', description: 'Enterprise-grade security in everything we build' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for maximum efficiency' },
    { icon: Target, title: 'Client Focused', description: 'Your success is our primary mission' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering world-class solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-6"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {aboutData?.title || 'About Infinity Loop'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {aboutData?.description || 'Leading the digital transformation revolution'}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover-lift"
              >
                <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To empower businesses worldwide with cutting-edge technology solutions that drive innovation,
                efficiency, and growth. We believe in creating lasting partnerships built on trust, excellence,
                and measurable results.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Through our comprehensive suite of services and products, we help organizations navigate
                the complexities of digital transformation and emerge as leaders in their industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 glow-blue">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default AboutPage;