'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { ExternalLink, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/config';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm font-medium mb-6"
          >
            Our Products
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Innovation That <span className="gradient-text">Scales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Revolutionary product platforms built for the modern digital economy
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative h-full glass rounded-3xl p-8 overflow-hidden hover-lift">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-pink-600/20 group-hover:to-blue-600/20 transition-all duration-500" />
                    
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          Active
                        </span>
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Rocket className="w-5 h-5 text-purple-400" />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                        {product.name}
                      </h3>

                      {/* Category */}
                      {product.category && (
                        <p className="text-sm text-purple-400 mb-4 font-medium">
                          {product.category}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6 line-clamp-4">
                        {product.description}
                      </p>

                      {/* Stats/Features */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="glass rounded-xl p-3">
                          <div className="flex items-center space-x-2 mb-1">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span className="text-xs text-gray-400">Growth</span>
                          </div>
                          <p className="text-lg font-bold text-white">+250%</p>
                        </div>
                        <div className="glass rounded-xl p-3">
                          <div className="flex items-center space-x-2 mb-1">
                            <ExternalLink className="w-4 h-4 text-purple-400" />
                            <span className="text-xs text-gray-400">Users</span>
                          </div>
                          <p className="text-lg font-bold text-white">10K+</p>
                        </div>
                      </div>

                      {/* CTA Link */}
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-semibold">
                        Learn More
                        <motion.div
                          className="ml-2"
                          whileHover={{ x: 4 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default ProductsPage;
