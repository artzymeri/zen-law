'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rsiTypes = [
  'Tendonitis',
  'Carpal tunnel syndrome',
  'Rotator cuff syndrome',
  'Writer\'s cramp',
  'Tennis/golf elbow',
];

const causes = [
  'Prolonged periods of typing',
  'Poor posture',
  'Repetitive movements of the wrists, elbows, hands, neck or back',
  'Regular forceful movement of the wrist',
  'Forceful gripping',
];

const symptoms = [
  'Aching and painful arms or wrists',
  'Weakness of grip',
  'Discomfort in the forearms',
  'Long term pain and discomfort',
];

const atRiskOccupations = [
  'Office workers',
  'Power tool operators',
  'Production line workers',
  'Meat and poultry preparation workers',
];

export default function RepetitiveStrainInjuryPage() {
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
            Repetitive Strain Injury
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
              src="/industrial-diseases/rsi.jpg"
              alt="Repetitive Strain Injury"
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
              Repetitive strain injury (RSI) is a collective term used to describe many different types of soft tissue injury. RSI can also be diagnosed as work-related upper limb disorder (WRULD).
            </p>

            {/* Types of RSI */}
            <div className="py-6">
              <h2 
                className="text-2xl font-light text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Types of RSI
              </h2>
              <div className="flex flex-wrap gap-3">
                {rsiTypes.map((type, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm"
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Causes and Symptoms Grid */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 
                    className="text-xl font-light text-white mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Common Causes
                  </h2>
                  <ul className="space-y-3">
                    {causes.map((cause, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-gold-500" />
                        </div>
                        <span className="text-white/70 text-sm">{cause}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 
                    className="text-xl font-light text-white mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Symptoms
                  </h2>
                  <ul className="space-y-3">
                    {symptoms.map((symptom, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
                        <span className="text-white/70 text-sm">{symptom}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed pt-6">
              The condition continues to affect thousands of people every year and affects people working in a wide range of industries.
            </p>

            {/* At Risk Section */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Who is at Risk?
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                A significant number of individuals with RSI do not have symptoms which can easily be diagnosed and most do not realise their condition is related to their work. The people most at risk are:
              </p>
              <div className="flex flex-wrap gap-3">
                {atRiskOccupations.map((occupation, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {occupation}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="text-white/60 leading-relaxed pt-6">
              The condition can be triggered by badly designed workstations, poorly designed tools or because of excessive repetition or force required to undertake an activity.
            </p>

            {/* Medical Advice */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Seeking Medical Assistance</h3>
              <p className="text-white/60 text-sm">
                If you believe you are suffering from RSI then you should seek medical assistance immediately. The condition is usually treated by painkillers and physiotherapy although surgery may be necessary in some cases.
              </p>
            </div>
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
              Suffering from repetitive strain injury?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for RSI or WRULD caused by your working conditions.
            </p>
            <Link
              href="/industrial-diseases/rsi/claim"
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
