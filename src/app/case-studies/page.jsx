'use client';

import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Cloud Migration Success: Enterprise Transformation',
      client: 'Global Financial Services Corp',
      industry: 'Finance',
      icon: '🏛️',
      challenge: 'Legacy on-premise infrastructure causing scaling bottlenecks',
      solution: 'Complete cloud migration strategy with zero downtime deployment',
      results: [
        { metric: '78%', description: 'Cost Reduction' },
        { metric: '99.99%', description: 'Uptime Achieved' },
        { metric: '3x', description: 'Faster Deployment' },
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      testimonial: 'The migration was seamless. Our operations team was impressed with the zero-downtime approach.',
      author: 'CTO, Global Financial Services',
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Platform Launch',
      client: 'E-Commerce Innovation Inc',
      industry: 'Retail',
      icon: '🛍️',
      challenge: 'Need real-time customer behavior analytics at scale',
      solution: 'Built custom AI pipeline processing 10M+ events daily',
      results: [
        { metric: '45%', description: 'Revenue Increase' },
        { metric: '2.3s', description: 'Query Response' },
        { metric: '5x', description: 'Insight Discovery' },
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'PostgreSQL'],
      testimonial: 'The insights generated have transformed our marketing strategy entirely.',
      author: 'Head of Analytics, E-Commerce Inc',
    },
    {
      id: 3,
      title: 'Security Overhaul for Healthcare Provider',
      client: 'MedCare Health Systems',
      industry: 'Healthcare',
      icon: '⚕️',
      challenge: 'HIPAA compliance gaps and security vulnerabilities',
      solution: 'Zero-trust architecture implementation with encryption-everywhere',
      results: [
        { metric: '100%', description: 'HIPAA Compliant' },
        { metric: '0', description: 'Security Incidents' },
        { metric: '24/7', description: 'Threat Monitoring' },
      ],
      technologies: ['Azure', 'HashiCorp Vault', 'SIEM', 'Encryption'],
      testimonial: 'We now have peace of mind knowing our patient data is protected with enterprise-grade security.',
      author: 'CISO, MedCare Health Systems',
    },
    {
      id: 4,
      title: 'Mobile App Architecture Modernization',
      client: 'TechStartup Ventures',
      industry: 'Technology',
      icon: '📱',
      challenge: 'Legacy monolithic mobile app causing poor performance',
      solution: 'Refactored to microservices with React Native cross-platform',
      results: [
        { metric: '85%', description: 'Faster Load Time' },
        { metric: '4.8', description: 'App Store Rating' },
        { metric: '500K', description: 'Active Users' },
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      testimonial: 'The new architecture allows us to iterate faster and deploy features weekly.',
      author: 'VP Engineering, TechStartup Ventures',
    },
    {
      id: 5,
      title: 'Data Pipeline Automation for Logistics',
      client: 'ShipGlobal Logistics',
      industry: 'Logistics',
      icon: '🚚',
      challenge: 'Manual data processing causing 2-day reporting delays',
      solution: 'Built end-to-end ETL pipeline with real-time dashboards',
      results: [
        { metric: '95%', description: 'Automation Rate' },
        { metric: '2hrs', description: 'Reporting Time' },
        { metric: '60%', description: 'Ops Cost Saving' },
      ],
      technologies: ['Apache Airflow', 'Python', 'Redshift', 'Tableau'],
      testimonial: 'Real-time visibility into our shipments has improved customer satisfaction significantly.',
      author: 'Operations Director, ShipGlobal',
    },
    {
      id: 6,
      title: 'IoT Platform Development for Smart Cities',
      client: 'UrbanTech Solutions',
      industry: 'Smart Cities',
      icon: '🏙️',
      challenge: 'Connect 100K+ IoT devices with real-time processing',
      solution: 'Built distributed IoT platform handling 5M+ data points/minute',
      results: [
        { metric: '100K+', description: 'Connected Devices' },
        { metric: '99.95%', description: 'Reliability' },
        { metric: '10M+', description: 'Data Points Daily' },
      ],
      technologies: ['MQTT', 'EdgeX', 'InfluxDB', 'Grafana'],
      testimonial: 'The platform enables us to create smarter, more efficient city infrastructure.',
      author: 'Founder, UrbanTech Solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <FuturisticNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-green-900/20 to-emerald-900/20">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass text-green-400 text-sm font-medium mb-6"
          >
            Success Stories
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Real Results from <span className="gradient-text">Real Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Discover how we've helped enterprises transform their operations and achieve remarkable growth
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full glass rounded-3xl overflow-hidden hover-lift flex flex-col">
                  {/* Header */}
                  <div className="p-8 pb-4">
                    <div className="text-5xl mb-4">{study.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{study.client}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      {study.industry}
                    </span>
                  </div>

                  <div className="px-8 py-2">
                    <p className="text-gray-400 text-sm line-clamp-2">{study.challenge}</p>
                  </div>

                  {/* Results Grid */}
                  <div className="px-8 py-4 grid grid-cols-3 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-green-400 font-bold text-lg">{result.metric}</div>
                        <div className="text-gray-500 text-xs">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="px-8 py-2 flex flex-wrap gap-2">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-400">
                        +{study.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Testimonial */}
                  <div className="flex-1 px-8 py-6 flex flex-col justify-end border-t border-white/10">
                    <p className="text-gray-300 text-sm italic mb-3">"{study.testimonial}"</p>
                    <p className="text-gray-500 text-xs">— {study.author}</p>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 flex items-end justify-center pb-6 pointer-events-none rounded-3xl"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-xl glass text-white font-semibold hover:glow-green transition-all"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our Impact Across Industries
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: '50+', label: 'Successful Projects' },
              { icon: Users, value: '100+', label: 'Happy Clients' },
              { icon: Award, value: '200M+', label: 'Revenue Generated' },
              { icon: Zap, value: '99.95%', label: 'Uptime Average' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-3xl p-8 text-center"
                >
                  <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default CaseStudiesPage;
