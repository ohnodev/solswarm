"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn, float, staggerContainer } from '../utils/animations';
import Image from 'next/image';

const Content: React.FC = () => {
  const features = [
    {
      title: 'Buy',
      description: 'Instantly buy pre-bonded PumpFun tokens on Solana.',
      image: '/assets/images/solswarm-bot-3.jpg', // Skating on bullish candles
    },
    {
      title: 'Sell',
      description: 'Crush the bears. Sell your tokens with a single command.',
      image: '/assets/images/solswarm-bot-2.jpg', // Crushing bears
    },
    {
      title: 'Bundle Buy & Sell',
      description: 'Bundle your buys and sells for max efficiency.',
      image: null,
    },
    {
      title: 'Create Bundle',
      description: 'Group tokens and manage your trades with ease.',
      image: null,
    },
    {
      title: 'Snipe New PumpFun Tokens',
      description: 'Be the first to snipe new pre-bonded PumpFun launches.',
      image: null,
    },
    {
      title: 'Pre-Bonded Only',
      description: 'Supports only pre-bonded PumpFun tokens for safety and speed.',
      image: null,
    },
    {
      title: 'Open Source & Rust',
      description: 'Blazing fast, offchain execution. Proudly written in Rust.',
      image: null,
    },
  ];

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center bg-background">
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
              className="animated-border-badge mb-6"
            >
              <span className="badge-inner text-sm font-medium text-[color:var(--primary)] dark:text-[var(--accent-foreground)]">
                🦾 SolSwarm: Meme Sniper Bot for PumpFun
              </span>
            </motion.div>
            <motion.h2 
              variants={fadeIn('up', 0.3)}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-300 dark:to-blue-400 bg-clip-text text-transparent">Solana Swarm Power</span> <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">Telegram PumpFun Sniper</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 text-gray-700 dark:text-gray-300"
            >
              Built for speed. Written in Rust. Open source. Simple, smooth, and only for pre-bonded PumpFun tokens. Surfing bulls, crushing bears, sniping the best tokens. Powered by OHNO Dev & Solana memes.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 font-medium rounded-lg transition-all duration-300 border-2 border-[color:var(--accent)] hover:border-[color:var(--primary)] hover:shadow-[0_0_16px_var(--accent)] backdrop-blur-md bg-[color:var(--card-background)] text-gray-900 dark:text-[var(--accent-foreground)] flex items-center justify-center gap-2"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/docs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 font-medium rounded-lg transition-all duration-300 border-2 border-[color:var(--accent)] hover:border-[color:var(--primary)] hover:shadow-[0_0_16px_var(--accent)] backdrop-blur-md bg-[color:var(--card-background)] text-gray-900 dark:text-[var(--accent-foreground)] flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  View Docs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left')}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex items-center justify-center relative"
          >
            <motion.div
              variants={float}
              initial="initial"
              animate="animate"
              className="relative z-10"
            >
              <Image
                src="/assets/images/solswarm-bot-1.png"
                alt="SolSwarm Bot Hero"
                width={400}
                height={400}
                className="mx-auto drop-shadow-2xl animate-pulse"
                priority
              />
            </motion.div>
            <div className="absolute -z-10 w-72 h-72 bg-gradient-to-r from-green-500 to-blue-600 rounded-full filter blur-3xl opacity-20 -top-10 -right-10"></div>
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
            <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--foreground)] mb-4">Key Features</h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">Simple, smooth, and built for speed. The only bot you need for PumpFun on Solana.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeIn('up', 0.2 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[color:var(--card-background)] rounded-xl p-6 shadow-lg hover:shadow-xl border border-[color:var(--accent)] transition-all duration-300 flex flex-col items-center text-center backdrop-blur-md"
                whileHover={{ y: -5 }}
              >
                {feature.image && (
                  <div className="w-20 h-20 mb-4 relative">
                    <Image src={feature.image} alt={feature.title} fill className="object-contain rounded-lg" />
                  </div>
                )}
                <h4 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">{feature.title}</h4>
                <p className="text-[color:var(--muted-foreground)]">{feature.description}</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 opacity-90"></div>
          <div className="absolute inset-0 opacity-20"></div>
          
          <div className="relative px-6 py-12 md:py-16 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Ready to join the swarm?</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">Built by OHNO Dev, powered by Solana. Open source, open memes. Rust inside.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 font-medium rounded-lg transition-all duration-300 border-2 border-[color:var(--accent)] hover:border-[color:var(--primary)] hover:shadow-[0_0_16px_var(--accent)] backdrop-blur-md bg-[color:var(--card-background)] text-gray-900 dark:text-[var(--accent-foreground)] flex items-center justify-center gap-2"
                >
                  Get Started for Free
                </motion.button>
              </Link>
              
              <Link href="/docs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 font-medium rounded-lg transition-all duration-300 border-2 border-[color:var(--accent)] hover:border-[color:var(--primary)] hover:shadow-[0_0_16px_var(--accent)] backdrop-blur-md bg-[color:var(--card-background)] text-gray-900 dark:text-[var(--accent-foreground)] flex items-center justify-center gap-2"
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
