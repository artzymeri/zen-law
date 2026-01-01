'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const causes = [
  'Heavy lifting',
  'Excessive repetitive movement',
  'Exposure to vibratory tools',
];

const symptoms = [
  'Tingling in fingers',
  'Pain in hands or wrists',
  'Weakness in grip',
  'Numbness',
];

const employerDuties = [
  'Prevent exposure to negligent levels of vibration',
  'Operate a safe system of work',
  'Reduce exposure to vibration and repetitive movements',
  'Reduce heavy lifting requirements',
  'Provide necessary training',
  'Supply correct tools to reduce risk of wrist injury',
];

export default function CarpalTunnelPage() {
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
            Carpal Tunnel Syndrome
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
              src="/industrial-diseases/carpal-tunnel.jpg"
              alt="Carpal Tunnel Syndrome"
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
              Carpal tunnel syndrome has many causes and can frequently be caused by heavy lifting, excessive repetitive movement or exposure to vibratory tools at work. If you work with vibrating tools/equipment for any length of time and now find your fingers are tingling or you experience pain, weakness or numbness, you may be suffering from carpal tunnel syndrome.
            </p>

            {/* Causes and Symptoms Grid */}
            <div className="py-8 grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 
                  className="text-xl font-light text-white mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Common Causes
                </h2>
                <div className="flex flex-wrap gap-2">
                  {causes.map((cause, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm"
                    >
                      {cause}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h2 
                  className="text-xl font-light text-white mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Symptoms
                </h2>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                    >
                      {symptom}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Employer Duties */}
            <div className="pt-8 border-t border-white/10">
              <h2 
                className="text-2xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Employer Responsibilities
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                An employer has a duty to prevent exposure of an employee to negligent levels of vibration and to operate a safe system of work. This includes:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {employerDuties.map((duty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{duty}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Medical Advice Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 mt-8"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Seek Advice Immediately</h3>
                  <p className="text-white/60 text-sm">
                    Carpal tunnel syndrome can be very prolonged and painful. It is important to seek medical advice immediately and ensure that you are receiving the correct medical treatment to reduce your symptoms. You should also seek legal advice to ascertain whether or not you may have a claim against your employer.
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
              Suffering from carpal tunnel syndrome?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team can help you claim compensation for carpal tunnel syndrome caused by your working conditions.
            </p>
            <Link
              href="/industrial-diseases/carpal-tunnel/claim"
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
