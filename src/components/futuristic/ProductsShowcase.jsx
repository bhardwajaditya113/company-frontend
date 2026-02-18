'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ExternalLink, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function ProductsShowcase({ products }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Overlays */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-purple-400 text-sm font-medium mb-4">
            Product Ventures
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Innovation
            <span className="gradient-text"> That Scales</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Revolutionary product platforms built for the modern digital economy
          </p>
        </motion.div>

        {/* Products Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="products-swiper"
          >
            {products && products.map((product, index) => (
              <SwiperSlide key={product.id || index}>
                <Link href={`/products/${product.slug}`}>
                  {/* Card Container */}
                  <div className="relative h-[450px] glass rounded-3xl p-8 overflow-hidden hover-lift group cursor-pointer">
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
                      <p className="text-sm text-blue-400 mb-4 font-medium">
                        {product.category || 'Platform'}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
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
                            <ExternalLink className="w-4 h-4 text-blue-400" />
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
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden glow-purple"
            >
              <span className="relative z-10">Explore All Products</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .products-swiper {
          padding: 20px 20px 60px;
        }
        .products-swiper .swiper-pagination-bullet {
          background: rgba(168, 85, 247, 0.5);
          width: 12px;
          height: 12px;
        }
        .products-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #a855f7, #ec4899);
          width: 32px;
          border-radius: 6px;
        }
        .products-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}
