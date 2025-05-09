"use client";

import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Content />
      <SocialLinks />
      <Footer />
    </main>
  );
}