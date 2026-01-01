'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Info, Volume2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const noisyIndustries = [
  'Printing',
  'Pressing',
  'Engineering',
  'Mining',
  'Road drilling',
  'Factories',
  'Machinery operation',
  'Manufacturing',
  'Food processing',
];

const warningSignsOfDeafness = [
  'Having to turn the volume on your television up',
  'Trouble following conversations with background noise',
  'Having to shout to colleagues only a couple of metres away',
  'Ringing or buzzing noise in your ear (tinnitus)',
];

export default function OccupationalDeafnessPage() {
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
            Occupational Deafness
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
              src="/industrial-diseases/deafness.jpg"
              alt="Occupational Deafness"
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
              If you have worked in a noisy environment for any length of time and find that you have to turn the volume on your television up or have trouble following a conversation where there is background noise, you may be suffering from occupational deafness. This is also known as noise-induced hearing loss (NIHL). Developing a hearing problem can be a real shock and often leads to changes in the quality of your life.
            </p>

            <p className="text-white/60 leading-relaxed">
              Occupational deafness is usually caused by prolonged exposure to excessive levels of noise at work. It can be caused by exposure to noise over many years or even decades, or one-time exposure to a loud noise. The excessive levels of noise at work to which you may have been exposed can cause permanent hearing damage and may also cause tinnitus (a ringing/buzzing noise in your ear).
            </p>

            {/* Warning Signs */}
            <div className="py-8">
              <h2 
                className="text-2xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Warning Signs
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {warningSignsOfDeafness.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <Volume2 size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{sign}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Noisy Industries */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                High-Risk Industries
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                There are many noisy industries within which a sufferer may have worked, including:
              </p>
              <div className="flex flex-wrap gap-3">
                {noisyIndustries.map((industry, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Date of Knowledge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 mt-8"
            >
              <div className="flex items-start gap-4">
                <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Date of Employer Knowledge</h3>
                  <p className="text-white/60 text-sm">
                    If you have worked within any noisy environment at any time since <strong className="text-white">1963</strong>, you may have a claim as that date is generally accepted as the time when employers ought to have assessed noise levels and taken reasonable steps to minimise the noise exposure to employees.
                  </p>
                </div>
              </div>
            </motion.div>

            <p className="text-white/60 leading-relaxed pt-6">
              If you worked in an environment where you had to shout to colleagues who were only a couple of metres away, then it is very likely that you were exposed to excessive noise levels. Additionally, if you were not made aware of the dangers of excessive noise or were not provided with the appropriate hearing protection, then you may be able to make a claim for compensation.
            </p>

            <p className="text-white/60 leading-relaxed">
              Any successful claim is dependent on how many years of excessive noise you suffered and how many responsible employers and/or their insurers can be found. Zen Law Solicitors are experienced industrial disease lawyers and experts in tracing old employers (even if you are struggling to remember who these were, we can still trace them) or their insurers to help you bring your claim and maximise your compensation.
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
              Suffering from hearing loss?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for occupational deafness or noise-induced hearing loss caused by your working conditions.
            </p>
            <Link
              href="/industrial-diseases/deafness/claim"
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
