'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesCarousel({ services }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            World-Class
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology and innovative strategies
          </p>
        </motion.div>

        {/* Swiper Carousel */}
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
              delay: 3000,
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
            className="services-swiper"
          >
            {services && services.map((service, index) => (
              <SwiperSlide key={service.id || index}>
                <div className="relative h-[450px] rounded-3xl glass p-8 overflow-hidden group cursor-pointer">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10 h-full flex flex-col">
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

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 mb-3 text-lg">
                        {service.tagline}
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-6">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform mt-6"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass text-white font-semibold hover:glow-blue transition-all"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .services-swiper {
          padding: 20px 20px 60px;
        }
        .services-swiper .swiper-pagination-bullet {
          background: rgba(59, 130, 246, 0.5);
          width: 12px;
          height: 12px;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          width: 32px;
          border-radius: 6px;
        }
        .services-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}
