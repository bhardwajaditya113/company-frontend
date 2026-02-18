'use client';

import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: 'The Future of Cloud Computing in 2026',
      excerpt: 'Exploring emerging trends and technologies shaping the cloud landscape',
      author: 'Sarah Johnson',
      date: '2026-01-08',
      category: 'Cloud',
      image: '☁️',
      slug: 'future-cloud-2026',
    },
    {
      id: 2,
      title: 'AI Integration: Best Practices for Enterprises',
      excerpt: 'A comprehensive guide to implementing AI solutions in your organization',
      author: 'Michael Chen',
      date: '2026-01-05',
      category: 'AI & ML',
      image: '🤖',
      slug: 'ai-integration-best-practices',
    },
    {
      id: 3,
      title: 'Cybersecurity Threats: What You Need to Know',
      excerpt: 'Latest security vulnerabilities and how to protect your infrastructure',
      author: 'Emma Williams',
      date: '2026-01-02',
      category: 'Security',
      image: '🔒',
      slug: 'cybersecurity-threats-2026',
    },
    {
      id: 4,
      title: 'Microservices Architecture Deep Dive',
      excerpt: 'Understanding microservices and their role in modern application development',
      author: 'David Kumar',
      date: '2025-12-28',
      category: 'Development',
      image: '🏗️',
      slug: 'microservices-architecture',
    },
    {
      id: 5,
      title: 'DevOps Evolution: From CI/CD to GitOps',
      excerpt: 'How GitOps is revolutionizing DevOps practices and infrastructure management',
      author: 'Lisa Anderson',
      date: '2025-12-25',
      category: 'DevOps',
      image: '⚙️',
      slug: 'devops-evolution-gitops',
    },
    {
      id: 6,
      title: 'Data Privacy: GDPR Compliance and Beyond',
      excerpt: 'Navigating data privacy regulations and implementing compliant solutions',
      author: 'John Smith',
      date: '2025-12-20',
      category: 'Compliance',
      image: '📋',
      slug: 'data-privacy-gdpr',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-blue-400 text-sm font-medium mb-6"
          >
            Our Blog
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Latest Insights & <span className="gradient-text">Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Industry trends, best practices, and insights from our expert team
          </motion.p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full glass rounded-3xl overflow-hidden hover-lift flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl">{article.image}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-3">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 rounded-xl glass text-white font-semibold flex items-center justify-center space-x-2 hover:glow-blue transition-all"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default BlogPage;