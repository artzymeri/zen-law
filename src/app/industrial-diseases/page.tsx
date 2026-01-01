'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const specializations = [
  'Asbestos-related conditions including Asbestosis, Mesothelioma and lung cancer',
  'Lung conditions such as Occupational Asthma, Pneumoconiosis and Silicosis',
  'Dermatitis and skin conditions such as latex allergies and chemical burns',
  'Vibration White Finger, Repetitive Strain Injury and Carpal Tunnel Syndrome',
  'Occupational Deafness and Tinnitus',
];

export default function IndustrialDiseasesPage() {
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Industrial Diseases
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
              src="/our-expertise/industrial-desieses.jpg"
              alt="Industrial Diseases"
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
              Industrial diseases are illnesses which result from exposure to harmful substances over a long period of time, usually as a result of unsafe working practices. Many thousands of people develop an illness through contact with dust, chemicals, fumes, noise and vibration exposure.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Zen Law Solicitors specialise in all types of industrial claims including:
            </p>

            {/* Specializations List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="py-6"
            >
              <ul className="space-y-4">
                {specializations.map((item, index) => (
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
              There is a presumption that specific diseases (such as asbestos-related diseases) are caused by an individual being in the work environment, and often the exposure is over a long period of time i.e. where individuals started working in the 1960&apos;s and 1970&apos;s. It is also evident that symptoms also develop after a very late stage after exposure – this is especially true of asbestos-related conditions and also others such as noise exposure, where the individual has only recently started noticing their deafness and wearing hearing aids.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Over the years, there have been many rules and regulations in place to prevent unsafe working practices and protect the welfare of the employee. Unfortunately, the standards of Health & Safety were not adhered to as well as they are today, and many employers failed to comply with the relevant rules and regulations. This ultimately means that if you have an illness which you believe is connected to your past work history, you should seek immediate medical advice.
            </p>

            {/* Highlighted Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-10 p-8 border-l-4 border-gold-500 bg-white/5 rounded-r-xl"
            >
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How we differ at Zen Law Solicitors
              </h3>
              <p className="text-white/60 leading-relaxed">
                Our specialist expertise in tracing employers from as early as the 1960&apos;s and 1970&apos;s in order to hold them accountable for the illness which you have suffered. Where the employer is no longer trading, we have further expertise in tracing the Employers Liability insurers of the employer. What this means for you is that your chances of tracing a party to compensate you for your injuries are maximised and there is much less risk of a different firm advising you that the employer or insurer could not be traced and the matter cannot be progressed any further.
              </p>
            </motion.div>
            
            <p className="text-white/60 leading-relaxed">
              The additional advantage of using Zen Law Solicitors is that the more employers or insurers are traced, the higher will be your level of compensation. There is little benefit to you if your solicitor is only able to trace a funder for a small fraction of what you are entitled to for your injuries.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-all duration-300 hover:gap-4"
              >
                <span>START MY CLAIM</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
