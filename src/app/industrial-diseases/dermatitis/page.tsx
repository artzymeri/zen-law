'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const atRiskOccupations = [
  'Cleaners',
  'Healthcare workers',
  'Caterers',
  'Printers',
  'Engineers',
];

export default function DermatitisPage() {
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
            Dermatitis
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
              src="/industrial-diseases/dermatitis.jpg"
              alt="Dermatitis"
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
              Skin allergies or conditions such as dermatitis (or eczema) can be caused by chemical, biological or physical substances in the workplace. Dermatitis covers many different disorders that all result in a red, itchy rash and as the condition worsens, the skin can become swollen, flaky and cracked. Dermatitis is the skin&apos;s reaction to severe dryness, scratching, an irritating substance or an allergen.
            </p>

            {/* At Risk Occupations */}
            <div className="py-6">
              <p className="text-white/60 leading-relaxed mb-4">
                Dermatitis can occur in just about any workplace though it is most commonly suffered by:
              </p>
              <div className="flex flex-wrap gap-3">
                {atRiskOccupations.map((occupation, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm"
                  >
                    {occupation}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Types of Dermatitis */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Types of Occupational Dermatitis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Irritant Dermatitis</h3>
                  <p className="text-white/60 text-sm">
                    Caused by substances that dry out and damage the skin, such as oils, solvents and detergents.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">Allergic Contact Dermatitis</h3>
                  <p className="text-white/60 text-sm">
                    Caused by substances high in allergens such as foodstuffs, chemicals and building materials.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed pt-6">
              Regulations state that employers should protect their workers from any potentially harmful substance that might cause dermatitis or eczema. Employers are under a duty to provide Personal Protective Equipment such as gloves, overalls and masks. Dermatitis occurs where an employer fails to provide any Health &amp; Safety equipment or it is not suitable for that type of work.
            </p>

            <p className="text-white/60 leading-relaxed">
              For a claim for occupational dermatitis to be successful a link must be shown between your exposure to a skin irritant or allergen and subsequent symptoms. The symptoms may have only become apparent recently or if you already have dermatitis but your symptoms have been worsened by exposure, then you should seek both medical and legal advice immediately.
            </p>

            {/* Time Limit Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Time Limit for Claims</h3>
                  <p className="text-white/60 text-sm">
                    As with most industrial disease claims, time is of the essence as you have a <strong className="text-white">3 year period</strong> within which to bring a personal injury claim. The time limit generally runs from the date of diagnosis but this is not always the case and you should therefore act quickly and seek the appropriate advice.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Suffering from work-related dermatitis?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for dermatitis or eczema caused by workplace exposure to harmful substances.
            </p>
            <Link
              href="/industrial-diseases/dermatitis/claim"
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
