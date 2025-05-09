"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, float, staggerContainer } from '../utils/animations';

const Content: React.FC = () => {
  const features = [
    {
      title: 'Zero Trading Fees',
      description: 'No fees or commissions on any trades executed through SolSwarm.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
          <path d="M12 2c-1.5 0-2.9.375-4.125 1.125S5.25 4.75 4.5 6.25 3 9.5 3 12s.5 4.75 1.5 6.25 2.25 2.625 3.375 3.375S10.5 22 12 22s2.9-.375 4.125-1.125 2.25-1.75 3-3.25S21 14.5 21 12s-.5-4.75-1.5-6.25-2.25-2.625-3.375-3.375S13.5 2 12 2Z" />
        </svg>
      )
    },
    {
      title: 'Lightning-Fast Execution',
      description: 'Execute trades with microsecond precision for optimal market timing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: 'Advanced Analytics',
      description: 'Real-time data analysis and visualization for informed trading decisions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    },
    {
      title: 'Open Source',
      description: 'Fully transparent codebase that anyone can review, modify, and improve.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    }
  ];


  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <motion.div 
            variants={fadeIn('right')} 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div 
              variants={fadeIn('up', 0.2)}
              className="inline-block px-4 py-1.5 mb-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200 dark:border-purple-900"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🚀 Seamless PumpFun Trading
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeIn('up', 0.3)}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">Zero-Fee</span> <br />
              <span className="text-gray-900 dark:text-white">Trading Bot</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn('up', 0.4)}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              SolSwarm is an open-source PumpFun trading bot with zero trading fees, designed for seamless and efficient trading with advanced strategies and real-time analytics.
            </motion.p>
            
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </Link>
              
              <Link href="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  View GitHub
                </motion.button>
              </Link>
            </motion.div>
            
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div
              variants={float}
              initial="initial"
              animate="animate"
              className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-1">
                <div className="flex space-x-1.5 px-3 py-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Trading Dashboard UI Preview */}
                <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">SolSwarm Dashboard</div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="text-xs text-green-500">Live</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white dark:bg-gray-800 rounded p-2 shadow-sm">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Active Trades</div>
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">24</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded p-2 shadow-sm">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Profit Today</div>
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">+12.6%</div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded p-3 shadow-sm">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span>Market Performance</span>
                        <span>24h</span>
                      </div>
                      <div className="h-20 flex items-end space-x-1">
                        {[35, 25, 45, 30, 50, 20, 40, 45, 55, 38, 60, 40, 45].map((h, i) => (
                          <div 
                            key={i} 
                            className="h-full flex-1 flex flex-col justify-end"
                          >
                            <div 
                              className={`w-full rounded-sm ${
                                i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'
                              }`}
                              style={{ height: `${h}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 w-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <div className="h-1.5 w-16 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute -z-10 w-72 h-72 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl opacity-20 -top-10 -right-10"></div>
            <div className="absolute -z-10 w-72 h-72 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full filter blur-3xl opacity-20 -bottom-10 -left-10"></div>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 md:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">The most advanced trading bot for PumpFun with powerful features to maximize your trading potential.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn('up', 0.2 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          variants={fadeIn('up', 1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 md:mt-32 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 opacity-20"></div>
          
          <div className="relative px-6 py-12 md:py-16 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to start trading smarter?</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">Join thousands of traders who are already using SolSwarm to maximize their profits with zero fees.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  Get Started for Free
                </motion.button>
              </Link>
              
              <Link href="/docs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-transparent border-2 border-white text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10"
                >
                  View Documentation
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
