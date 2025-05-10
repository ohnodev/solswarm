"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'PumpFun',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      color: 'from-purple-500 to-indigo-700 dark:from-purple-400 dark:to-indigo-600',
      hoverColor: 'from-purple-600 to-indigo-800 dark:from-purple-500 dark:to-indigo-700',
      link: 'https://pumpfun.io/solswarm'
    },
    {
      name: 'Telegram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4 20-7Z" />
          <path d="M22 2 11 13" />
        </svg>
      ),
      color: 'from-blue-400 to-cyan-500 dark:from-blue-300 dark:to-cyan-400',
      hoverColor: 'from-blue-500 to-cyan-600 dark:from-blue-400 dark:to-cyan-500',
      link: 'https://t.me/solswarm'
    },
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      color: 'from-gray-700 to-gray-900 dark:from-gray-500 dark:to-gray-700',
      hoverColor: 'from-gray-800 to-black dark:from-gray-400 dark:to-gray-600',
      link: 'https://github.com/solswarm'
    },
    {
      name: 'X',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      color: 'from-black to-gray-700 dark:from-gray-200 dark:to-gray-400',
      hoverColor: 'from-black to-gray-800 dark:from-gray-100 dark:to-gray-300',
      link: 'https://x.com/solswarm'
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn('up')}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our community to stay updated with the latest features, updates, and trading strategies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn('up', 0.1 * index)}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-[color:var(--card-background)] border border-[color:var(--accent)]"
            >
              <div className="relative p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[color:var(--background)] border border-[color:var(--accent)]">
                  <span className="text-[color:var(--primary)] dark:text-[color:var(--primary)]">{platform.icon}</span>
                </div>
                <span className="font-medium text-[color:var(--foreground)] dark:text-[color:var(--foreground)]">{platform.name}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn('up', 0.4)}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Don't miss out on trading opportunities. Stay connected!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialLinks;
