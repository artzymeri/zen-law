'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const vibratoryTools = [
  'Pneumatic drills',
  'Nut guns',
  'Chainsaws',
  'Power wrenches',
  'Power saws',
  'Grinders',
];

const atRiskIndustries = [
  'Mechanics',
  'Heavy engineering',
  'Mines',
  'Road maintenance',
  'Foundries',
];

const symptoms = [
  'Tingling',
  'Numbness',
  'Whiteness',
  'Blanching',
  'Lack of grip strength',
  'Loss of finger control',
];

export default function VibrationWhiteFingerPage() {
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
            Vibration White Finger
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
              src="/industrial-diseases/vibration-white-finger.jpg"
              alt="Vibration White Finger"
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
              Vibration white finger (VWF) or hand-arm vibration syndrome (HAVS) is a disabling condition which affects the blood vessels and nerves which supply the fingers. This causes tingling, numbness, whiteness, blanching and a lack of grip strength or control of your fingers (which are more severe in cold conditions).
            </p>

            {/* Symptoms */}
            <div className="py-6">
              <h2 
                className="text-2xl font-light text-white mb-4"
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
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {symptom}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools and Industries */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 
                    className="text-xl font-light text-white mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Vibratory Tools
                  </h2>
                  <p className="text-white/60 text-sm mb-4">
                    The condition is commonly associated with the use of:
                  </p>
                  <ul className="space-y-2">
                    {vibratoryTools.map((tool, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                        className="flex items-center gap-3 text-white/70 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {tool}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 
                    className="text-xl font-light text-white mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    At-Risk Industries
                  </h2>
                  <p className="text-white/60 text-sm mb-4">
                    Those employed in these industries are most at risk:
                  </p>
                  <ul className="space-y-2">
                    {atRiskIndustries.map((industry, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="flex items-center gap-3 text-white/70 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {industry}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed pt-6">
              As a result, many sufferers of the condition may be in a position to make a VWF claim or HAVS claim against either their current or a previous employer.
            </p>

            {/* Employer Knowledge Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Date of Guilty Knowledge</h3>
                  <p className="text-white/60 text-sm">
                    The commonly accepted date of guilty knowledge for employers is <strong className="text-white">1976</strong>, which means that after this date employers ought to have been aware of the risks involved with the use of vibratory tools. This date can however vary from industry to industry and you should seek legal advice without delay.
                  </p>
                </div>
              </div>
            </motion.div>

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
              Suffering from vibration white finger?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for VWF or HAVS caused by workplace exposure to vibratory tools.
            </p>
            <Link
              href="/industrial-diseases/vibration-white-finger/claim"
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
