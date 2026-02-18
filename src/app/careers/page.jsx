'use client';

import { motion } from 'framer-motion';
import FuturisticNavbar from '@/components/futuristic/FuturisticNavbar';
import FuturisticFooter from '@/components/futuristic/FuturisticFooter';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';
import Link from 'next/link';

const CareersPage = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Cloud Architect',
      department: 'Cloud Infrastructure',
      location: 'Silicon Valley, CA',
      type: 'Full-time',
      salary: '$180K - $220K',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: ['5+ years AWS/Azure experience', 'Leadership skills', 'Cloud certifications'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Application Development',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120K - $160K',
      description: 'Build modern web and mobile applications using latest technologies.',
      requirements: ['3+ years fullstack development', 'React/Node.js expertise', 'Problem solving'],
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      department: 'Data & AI',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$150K - $200K',
      description: 'Develop AI and machine learning solutions for business intelligence.',
      requirements: ['ML frameworks expertise', 'Data science background', 'Python proficiency'],
    },
    {
      id: 4,
      title: 'Security Consultant',
      department: 'Cybersecurity',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$130K - $170K',
      description: 'Provide cybersecurity consulting and implement security solutions.',
      requirements: ['Security certifications', 'Penetration testing', 'Risk assessment'],
    },
  ];

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
            Join Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Careers at <span className="gradient-text">Infinity Loop</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Join a team of innovators transforming the digital landscape
          </motion.p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore exciting career opportunities and grow with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass rounded-3xl p-8 hover:shadow-2xl transition-all"
              >
                <div className="grid md:grid-cols-4 gap-6 items-start mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                      {job.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{job.department}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-purple-400" />
                      {job.type}
                    </div>
                  </div>
                  <div className="flex items-center text-green-400 font-semibold">
                    <DollarSign className="w-5 h-5 mr-1" />
                    {job.salary}
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{job.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 font-semibold mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold glow-purple"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Join Infinity Loop?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Work on cutting-edge technologies and solve complex problems' },
              { title: 'Growth', desc: 'Continuous learning and professional development opportunities' },
              { title: 'Culture', desc: 'Collaborative team environment with work-life balance' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default CareersPage;
