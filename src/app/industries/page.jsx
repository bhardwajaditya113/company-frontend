'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { Building2, ArrowRight, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/config';

const IndustriesPage = () => {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/industries`);
        if (response.ok) {
          const data = await response.json();
          setIndustries(data);
        }
      } catch (error) {
        console.error('Error fetching industries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  const industryIcons = [Building2, Target, Users, Award];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-cyan-900/20 to-blue-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-6"
          >
            Industries We Serve
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Transforming <span className="gradient-text">Every Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Specialized solutions tailored to the unique challenges of your industry
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industryIcons[index % industryIcons.length];
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="relative h-full glass rounded-3xl p-8 overflow-hidden hover-lift">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-cyan-600/20 group-hover:via-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500" />
                      
                      {/* Glow Effect */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 glow-blue"
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
                          {industry.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-6 line-clamp-4">
                          {industry.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                            <span>Industry-specific solutions</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                            <span>Expert consultation</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                            <span>Proven track record</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 font-semibold">
                          Explore Solutions
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>

                      {/* Corner Decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {industries.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No industries available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default IndustriesPage;
