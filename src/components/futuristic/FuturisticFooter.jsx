'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Youtube, ArrowRight, Sparkles } from 'lucide-react';
import { LEGACY_API_BASE_URL } from '@/config/config';

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const response = await fetch(`${LEGACY_API_BASE_URL}/sitesetting`);
        if (!response.ok) {
          throw new Error('Failed to fetch site settings');
        }
        const text = await response.text();
        // Handle empty response
        const data = text ? JSON.parse(text) : {};
        setSiteSettings(data || {});
      } catch (error) {
        console.error('Error fetching site settings:', error);
        // Set empty object on error to prevent undefined errors
        setSiteSettings({});
      }
    };
    fetchSiteSettings();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('submitting');
    
    // Simulate subscription (you can add actual API call here)
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }, 1000);
  };

  const footerLinks = {
    Services: [
      { name: 'Cloud & Infrastructure', href: '/services' },
      { name: 'Application Development', href: '/services' },
      { name: 'AI & Automation', href: '/services' },
      { name: 'Cybersecurity', href: '/services' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Industries', href: '/industries' },
      { name: 'Products', href: '/products' },
      { name: 'Support', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: siteSettings?.twitter || '#', label: 'Twitter' },
    { icon: Linkedin, href: siteSettings?.linkedin || '#', label: 'LinkedIn' },
    { icon: Github, href: siteSettings?.github || '#', label: 'Github' },
    { icon: Youtube, href: siteSettings?.youtube || '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl glow-blue flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">
                    Infinity Loop
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Transforming businesses with next-generation IT solutions. 
                  Building the digital infrastructure of tomorrow, today.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">{siteSettings?.email || 'info@infinityloop.com'}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">{siteSettings?.phone || '+1 (234) 567-890'}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-sm">{siteSettings?.address || 'Silicon Valley, CA'}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links], columnIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: columnIndex * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay ahead of the curve
                </h3>
                <p className="text-gray-400">
                  Get the latest insights and updates delivered to your inbox
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={subscribeStatus === 'submitting'}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold whitespace-nowrap disabled:opacity-50"
                >
                  {subscribeStatus === 'submitting' ? 'Subscribing...' : subscribeStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                {siteSettings?.footer_message || `© ${currentYear} Infinity Loop. All rights reserved.`}
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:glow-blue transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      </div>
    </footer>
  );
}
