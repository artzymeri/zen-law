'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const substancesCausingAsthma = [
  'Dust from flour and grain used in baking, farm work and grain transport',
  'Dust from latex rubber found in latex gloves used in nursing and dentistry',
  'Wood dust from carpentry, joinery and saw milling work',
  'Chemicals found in soldering fumes, glues, some cleaners used in electronic equipment and the electrical industry',
  'Chemicals found in spray painting, foam moulding, adhesives, making foundry cores and surface coatings',
];

export default function OccupationalAsthmaPage() {
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
            Occupational Asthma
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
              src="/industrial-diseases/occupational-asthma.jpg"
              alt="Occupational Asthma"
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
              Asthma is a condition that affects a large proportion of both the adult and child population. It is an inflammation of the lungs causing narrowing of the airways, chest tightness and wheezing. This condition, although most of the time naturally occurring, can be triggered by exposure to pollutants in the workplace.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Employers have a duty to protect their workers from hazardous substances and if you have developed occupational asthma as a result of your working environment, then you may have a claim for compensation.
            </p>

            <p className="text-white/60 leading-relaxed">
              Certain dusts, vapours, gases and fumes can cause occupational asthma. Some of the substances known to be capable of causing asthma are:
            </p>

            {/* Substances List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="py-6"
            >
              <ul className="space-y-4">
                {substancesCausingAsthma.map((item, index) => (
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
              Occupational asthma can take weeks, months and sometimes years to develop and can lead to serious breathing problems. If you suspect a substance at work as the cause of your asthma, then you should ask yourself whether during the working week your asthma gets worse, although not necessarily at work itself. Additionally, you should also ask yourself whether your asthma is worse after work, whether your sleep is disturbed and whether your symptoms get better when you are away from work e.g. on holiday.
            </p>

            <p className="text-white/60 leading-relaxed">
              If you believe that you suffer from occupational asthma then you should consult your GP as soon as possible. Your GP may be able to refer you to a specialist to determine whether or not you are suffering from occupational asthma.
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
              Suffering from work-related asthma?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for occupational asthma caused by workplace exposure to harmful substances.
            </p>
            <Link
              href="/industrial-diseases/occupational-asthma/claim"
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
