'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OurExpertise from '@/components/OurExpertise';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Dynamically import 3D background to avoid SSR issues
const Background3D = dynamic(() => import('@/components/Background3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0" style={{ backgroundColor: '#0a0a0f' }} />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Always render Background3D but hide during loading */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Background3D />
      </div>
      
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <Header />
          <main className="relative z-10">
            <Hero />
            <OurExpertise />
            <About />
            <CaseStudies />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
