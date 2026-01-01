'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, AlertTriangle, ArrowLeft, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const symptoms = [
  'Shortness of breath',
  'Tiredness and fatigue',
  'Persistent cough',
  'Abnormal chest sounds ("crackles")',
  'Lung tissue scarring and thickening',
  'Respiratory failure (in severe cases)',
];

const atRiskOccupations = [
  'Laggers',
  'Shipyard workers',
  'Factory workers',
  'Industrial plumbers',
  'Roofers',
  'Demolition workers',
];

export default function AsbestosisPage() {
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
          >
            <Link 
              href="/industrial-diseases/asbestos"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Asbestos Claims
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Asbestosis
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-32 bg-gradient-to-r from-gold-500 to-transparent mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/70 max-w-3xl"
          >
            Lung fibrosis caused by asbestos exposure in the workplace
          </motion.p>
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
              src="/industrial-diseases/asbestosis.jpg"
              alt="Asbestosis Claims"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              Asbestosis is only one of the diseases which can be caused by exposure to asbestos and is often confused for other diseases. Asbestosis is a form of <strong className="text-white">lung fibrosis</strong> caused by inhaling asbestos fibres which can irritate the lungs causing scarring, thickening to the lung tissue and abnormal chest sounds known as 'crackles'.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              As with any asbestos-related condition, employers have a duty to protect their workers from hazardous substances and if you have developed Asbestosis as a result of your working conditions then we can help you to trace your employer and/or their insurer to make a claim.
            </p>

            {/* Info Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">High Exposure Condition</h3>
                  <p className="text-white/60 text-sm">
                    There is a direct link between the amount of exposure to asbestos dust and Asbestosis. Unlike Mesothelioma, Asbestosis normally only affects people who have had <strong className="text-white">high exposure over long periods of time</strong>. If you were only exposed to a low level of asbestos dust, then it is likely that your fibrosis was caused by something other than asbestos.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Warning Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Increased Risk of Lung Cancer</h3>
                  <p className="text-white/60 text-sm">
                    Asbestosis often puts the victim at a much greater risk of developing other respiratory problems including lung cancer. The vast majority of sufferers diagnosed with Asbestosis will have been exposed to high levels of asbestos dust and fibres during the course of their employment.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Symptoms & At-Risk Occupations */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            {/* Symptoms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 
                className="text-xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Common Symptoms
              </h3>
              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* At-Risk Occupations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 
                className="text-xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                At-Risk Occupations
              </h3>
              <div className="space-y-3">
                {atRiskOccupations.map((occupation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-white/70 text-sm">{occupation}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
          >
            <h3 
              className="text-2xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Diagnosed with Asbestosis?
            </h3>
            <p className="text-white/60 mb-6">
              If you've developed Asbestosis due to workplace exposure, we can help you trace your employer and their insurer to claim the compensation you deserve. All claims handled on a No Win No Fee basis.
            </p>
            <Link
              href="/industrial-diseases/asbestos/claim"
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
