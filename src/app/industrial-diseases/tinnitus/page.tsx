'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tinnitusSounds = [
  'Ringing',
  'Whistling',
  'Buzzing',
  'Humming',
];

const workplaceCauses = [
  'Noisy industrial and factory machinery',
  'Loud music',
  'Telephones and call centre equipment',
  'Noisy construction tools or equipment',
  'Drills and saws',
  'Acoustic shock from call centre equipment',
];

const impactsOnLife = [
  'Sleepless nights',
  'Irritability',
  'Depression',
  'Permanent hearing damage',
  'Sensitivity to normally tolerable sounds',
];

export default function TinnitusPage() {
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
            Tinnitus
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
              src="/industrial-diseases/tinnitus.jpg"
              alt="Tinnitus"
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
              Tinnitus is a serious condition which affects the hearing, typically causing a ringing, whistling, buzzing or humming in your ear(s). It can be caused by exposure to noise over many years or even decades, or short-term exposure to very loud noise. The excessive levels of noise at work to which you may have been exposed can cause this condition and also permanent hearing damage.
            </p>

            {/* Tinnitus Sounds */}
            <div className="py-6">
              <h2 
                className="text-2xl font-light text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Common Symptoms
              </h2>
              <p className="text-white/60 mb-4">Tinnitus typically manifests as:</p>
              <div className="flex flex-wrap gap-3">
                {tinnitusSounds.map((sound, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {sound} in ears
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Impact on Life */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Impact on Quality of Life</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Tinnitus can be very distressing, leading to:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {impactsOnLife.map((impact, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs"
                      >
                        {impact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workplace Causes */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Workplace Causes
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Tinnitus can be caused by a number of issues in the workplace, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {workplaceCauses.map((cause, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{cause}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-white/60 leading-relaxed pt-6">
              The use of call centre equipment can also result in acoustic shock which can lead to tinnitus, permanent hearing loss or sensitivity to normally tolerable sounds.
            </p>

            {/* Employer Duty */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">Employer&apos;s Duty of Care</h3>
              <p className="text-white/60 text-sm">
                Employers have a duty to protect their employees from the risk of hearing problems such as tinnitus. In most cases, this requires the employer to provide some form of protective equipment, such as ear plugs or ear muffs but the protection varies depending upon the work environment. Where this duty to protect employees is neglected, the implications for employees can be severe and permanent.
              </p>
            </div>

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
              Suffering from tinnitus?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for tinnitus caused by workplace noise exposure.
            </p>
            <Link
              href="/industrial-diseases/tinnitus/claim"
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
