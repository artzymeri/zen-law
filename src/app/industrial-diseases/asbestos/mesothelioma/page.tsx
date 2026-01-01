'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, AlertTriangle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const keyFacts = [
  'Caused almost exclusively by asbestos exposure',
  'Can develop up to 50 years after exposure',
  'Found on the lungs, abdomen, or heart',
  'Can develop from even low levels of exposure',
  'All types of asbestos are dangerous (white, brown, or blue)',
  'There are no safe limits for exposure',
];

const symptoms = [
  'Chest pain',
  'Shortness of breath',
  'Tiredness and fatigue',
  'Persistent cough',
  'Loss of appetite',
  'Unexplained weight loss',
];

export default function MesotheliomaPage() {
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
            Mesothelioma
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
            Expert legal support for mesothelioma victims and their families
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
              src="/industrial-diseases/mesothelioma.jpg"
              alt="Mesothelioma Claims"
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
              Mesothelioma is an aggressive, treatment-resistant type of cancer caused only by exposure to asbestos (except in very rare cases). Mesothelioma is usually found on any of the abdomen, the heart or most commonly, the lungs. Symptoms usually include chest pain, shortness of breath and tiredness, which can develop <strong className="text-white">up to 50 years after exposure</strong> to asbestos dust.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Employers have a duty to protect workers from hazardous substances and if you develop an asbestos-related disease such as Mesothelioma as a result of exposure at work (however little), we can help you trace and bring to justice the people responsible for your condition.
            </p>

            {/* Warning Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">A Terminal Diagnosis</h3>
                  <p className="text-white/60 text-sm">
                    Receiving a diagnosis of Mesothelioma can have a devastating effect on you and your loved ones. There is no cure for Mesothelioma and after diagnosis victims may only have a short life expectancy. Mesothelioma is considered to be a terminal illness and if you have been diagnosed with Mesothelioma or a family member has been diagnosed you may be entitled to make a compensation claim.
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-white/60 leading-relaxed">
              Unlike the other asbestos-related conditions, Mesothelioma can develop after receiving only low levels of exposure and only over relatively short exposure periods. There are no safe limits for exposure (and all types of asbestos is considered dangerous, be it white, brown or blue) and you may be entitled to bring an action for minimal exposure if you have been diagnosed with this condition.
            </p>
          </motion.div>

          {/* Key Facts & Symptoms */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            {/* Key Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 
                className="text-xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Key Facts
              </h3>
              <div className="space-y-3">
                {keyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-white/70 text-sm">{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>

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
          </div>

          {/* How We Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
          >
            <h3 
              className="text-xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              How We Can Help
            </h3>
            <p className="text-white/70">
              Zen Law Solicitors are experts at tracing former employers (even where the premises no longer exist) or their insurers and will ensure that you have the best chance of achieving the maximum compensation settlement that you are entitled to receive.
            </p>
          </motion.div>

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
              Diagnosed with Mesothelioma?
            </h3>
            <p className="text-white/60 mb-6">
              Time is of the essence. Contact us today for urgent, compassionate legal support. We handle all claims on a No Win No Fee basis.
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
