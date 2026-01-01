'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const typesOfPneumoconiosis = [
  'Asbestosis',
  'Byssinosis (also known as \'Brown Lung Disease\')',
  'Coal Worker\'s Pneumoconiosis (also known as \'Black Lung\')',
  'Kaolin Pneumoconiosis',
  'Siderosis (also known as \'Welder\'s Lung\')',
  'Silicosis',
];

const symptoms = [
  'Shortness of breath',
  'Persistent cough',
  'Cyanosis',
  'Bronchitis',
  'Emphysema',
];

export default function PneumoconiosisPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Link 
              href="/industrial-diseases" 
              className="text-gold-500 hover:text-gold-400 transition-colors text-sm flex items-center gap-2"
            >
              ← Back to Industrial Diseases
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pneumoconiosis & Silicosis
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-32 bg-gradient-to-r from-gold-500 to-transparent"
          />
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-16">
        <div className="container mx-auto px-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden aspect-[16/9]"
          >
            <Image
              src="/industrial-diseases/pneumoconiosis.jpg"
              alt="Pneumoconiosis and Silicosis"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              Pneumoconiosis is the name for a wide range of lung diseases caused by inhaling different kinds of dust. People who work in dusty environments such as miners, foundry workers, stone cutters, ship builders and construction workers are at most risk.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              The main types of pneumoconiosis are:
            </p>

            {/* Types List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="py-6"
            >
              <ul className="space-y-3">
                {typesOfPneumoconiosis.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-gold-500" />
                    </div>
                    <span className="text-white/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <p className="text-white/60 leading-relaxed">
              The inhalation of different types of dust increases the risk of developing a particular type of Pneumoconiosis.
            </p>

            {/* Silicosis Section */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Silicosis
              </h2>
              
              <p className="text-white/60 leading-relaxed mb-4">
                Silicosis is a type of pneumoconiosis and a rare and incurable disease caused by the inhalation of silica dust. There are several types of silicosis:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-semibold">•</span>
                  <span className="text-white/60"><strong className="text-white/80">Chronic Silicosis</strong> - caused by long-term exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-semibold">•</span>
                  <span className="text-white/60"><strong className="text-white/80">Accelerated Silicosis</strong> - caused by a higher level of exposure to silica dust over a shorter period of time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-semibold">•</span>
                  <span className="text-white/60"><strong className="text-white/80">Acute Silicosis</strong> - caused after a short period of exposure to very high levels of silica dust</span>
                </li>
              </ul>
            </div>

            {/* Symptoms Section */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Symptoms
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {symptoms.map((symptom, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {symptom}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="text-white/60 leading-relaxed pt-6">
              If you believe you are suffering from Pneumoconiosis or Silicosis you should seek medical advice immediately from your doctor. If you are awarded Industrial Injuries Disablement Benefit for your asbestos-related Pneumoconiosis, you may be entitled to a one-off lump sum payment from the government.
            </p>

            <p className="text-white/60 leading-relaxed">
              Zen Law Solicitors are experienced industrial disease lawyers and experts in tracing old employers (even if you are struggling to remember who these were, we can still trace them) or their insurers to help you bring your claim and maximise your compensation.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
          >
            <h3 
              className="text-2xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Suffering from a dust-related lung disease?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for pneumoconiosis or silicosis caused by workplace dust exposure.
            </p>
            <Link
              href="/industrial-diseases/pneumoconiosis/claim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Start Your Claim
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
