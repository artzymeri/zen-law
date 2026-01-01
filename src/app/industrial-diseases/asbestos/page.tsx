'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const asbestosConditions = [
  { name: 'Mesothelioma', href: '/industrial-diseases/asbestos/mesothelioma' },
  { name: 'Asbestosis', href: '/industrial-diseases/asbestos/asbestosis' },
  { name: 'Pleural Thickening', href: '/industrial-diseases/asbestos/pleural-thickening' },
  { name: 'Asbestos Related Lung Cancer', href: '/industrial-diseases/asbestos/lung-cancer' },
];

export default function AsbestosClaimsPage() {
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
            Asbestos Claims
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
              src="/industrial-diseases/asbestos.jpg"
              alt="Asbestos Claims"
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
              There are different types of asbestos-related diseases which can affect an individual&apos;s health in many ways. The various conditions are listed below and vary in severity. It is therefore very important to establish from the outset which asbestos condition has been diagnosed.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Exposure to asbestos fibres has been recognised as an occupational health hazard particularly since the 1930&apos;s. It was used widely in the industry through to the 1970&apos;s as a fireproof material. Exposure occurs when asbestos fibres are released into the air and it is often very difficult to recall whether or not you were exposed to asbestos during your work. You may not have necessarily disturbed asbestos but you may have been near someone else who did.
            </p>

            <p className="text-white/60 leading-relaxed">
              As well as those who were exposed to asbestos at work, family members and others living with anyone employed in an asbestos contaminated workplace may have an increased risk of developing asbestos-related lung cancer or Mesothelioma. The risk usually arises from secondary exposure to asbestos dust brought home on the clothing and hair of workers who have been exposed to asbestos.
            </p>

            <p className="text-white/60 leading-relaxed">
              If it can be proven that a condition was caused by exposure to asbestos by a negligent party, then the victim of that exposure may be able to make a claim (with the exception of pleural plaques). In order to make a successful claim, it must be proven that the employer owed you a duty of care, that duty was breached and that it resulted in damage to you.
            </p>

            <p className="text-white/60 leading-relaxed">
              Zen Law Solicitors are also specialists in tracing employers and/or their insurers going back to the 1950&apos;s, even where you cannot necessarily recall the full name of their employer. Zen Law Solicitors have the necessary expertise in finding accountable party for the injuries you have suffered. This greatly increases your chances of making a claim for compensation and the level of award you will receive in the event of a successful claim.
            </p>
          </motion.div>

          {/* Asbestos Conditions Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl md:text-4xl font-light text-white mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Types of Asbestos Conditions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {asbestosConditions.map((condition, index) => (
                <motion.div
                  key={condition.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={condition.href}
                    className="group block p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white group-hover:text-gold-500 transition-colors">
                        {condition.name}
                      </span>
                      <ArrowRight size={18} className="text-white/40 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
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
              Have you been affected by asbestos exposure?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist team understands the complexities of asbestos claims and will guide you through the entire process with care and expertise.
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
