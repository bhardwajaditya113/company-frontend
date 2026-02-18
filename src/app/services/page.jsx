'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/config';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/services`);
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

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
            Our Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Transform Your Business With <span className="gradient-text">Our Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions tailored to drive innovation and growth
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="relative h-full glass rounded-3xl p-8 overflow-hidden hover-lift">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500" />
                    
                    {/* Glow Effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 glow-blue"
                      >
                        <span className="text-3xl">
                          {service.icon === 'cloud' && '☁️'}
                          {service.icon === 'code' && '💻'}
                          {service.icon === 'brain' && '🧠'}
                          {service.icon === 'shield' && '🛡️'}
                          {service.icon === 'lightbulb' && '💡'}
                          {!['cloud', 'code', 'brain', 'shield', 'lightbulb'].includes(service.icon) && '⚡'}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                        {service.name}
                      </h3>

                      {/* Tagline */}
                      {service.tagline && (
                        <p className="text-blue-400 mb-4 font-medium">
                          {service.tagline}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6 line-clamp-4">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {services.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default ServicesPage;
