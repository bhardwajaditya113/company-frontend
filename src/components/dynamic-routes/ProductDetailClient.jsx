'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { ArrowLeft, CheckCircle2, Package, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/config';

export default function ProductDetailClient({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900">
        <FuturisticNavbar />
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Return to Homepage
            </Link>
          </div>
        </div>
        <FuturisticFooter />
      </div>
    );
  }

  const features = product.features ? product.features.split('\n').filter(f => f.trim()) : [];

  const stats = [
    { icon: Users, label: 'Active Users', value: '10K+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '250%' },
    { icon: Zap, label: 'Performance', value: '99.9%' },
    { icon: Package, label: 'Updates', value: 'Monthly' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors mb-8"
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
              <span className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm font-medium mb-6">
                Product Showcase
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {product.name}
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                {product.short_description || product.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold glow-purple"
                >
                  Try Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl glass text-white font-semibold"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <Package className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Premium Product</h3>
                  <p className="text-gray-400">
                    Experience the next generation of digital solutions designed for modern businesses.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
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
                <h2 className="text-3xl font-bold text-white mb-6">Product Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>

                {features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Product Features</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-4 rounded-xl bg-white/5"
                        >
                          <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <p className="text-gray-400 mb-6">
                  Transform your workflow with our cutting-edge product solution.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-center glow-purple"
                >
                  Request Demo
                </Link>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Full product access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Regular updates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Training resources</span>
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
