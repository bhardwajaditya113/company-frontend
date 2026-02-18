'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function IndustriesSection({ industries }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-blue-900/30 via-gray-900 to-purple-900/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powering
            <span className="gradient-text"> Every Sector</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering tailored solutions across diverse industries worldwide
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries && industries.map((industry, index) => (
            <motion.div
              key={industry.id || index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group"
            >
              <Link href={`/industries/${industry.slug}`}>
                <div className="relative glass rounded-2xl p-6 text-center hover-lift h-full">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-3xl"
                    >
                      {industry.icon === 'building' && '🏢'}
                      {industry.icon === 'heart' && '❤️'}
                      {industry.icon === 'factory' && '🏭'}
                      {industry.icon === 'shopping-cart' && '🛒'}
                      {!['building', 'heart', 'factory', 'shopping-cart'].includes(industry.icon) && '⚡'}
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white group-hover:gradient-text transition-all">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
