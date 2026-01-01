'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, AlertTriangle, Home, Droplets, Flame, Zap, Bug, Camera } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const disrepairTypes = [
  { icon: Droplets, title: 'Rising damp leading to mould' },
  { icon: Droplets, title: 'Penetrating damp leading to mould' },
  { icon: Flame, title: 'Non-functioning or unsafe heating system or boiler' },
  { icon: Home, title: 'Unsafe flooring or staircases' },
  { icon: Home, title: 'Rotten doors or window frames' },
  { icon: Droplets, title: 'Leaking pipes or cracked sanitation equipment' },
  { icon: Zap, title: 'Faulty electrics' },
  { icon: Home, title: 'Loose tiles or brickwork' },
  { icon: Bug, title: 'Vermin or insect infestation' },
];

const evidenceChecklist = [
  'Keep a careful diary of all complaints sent to your landlord',
  'Save all correspondence - letters, emails, and text messages',
  'Keep records of any visits for repairs',
  'Take regular photographs of the issues',
  'Record videos showing the persisting problems',
  'Document follow-up correspondence',
];

export default function HousingDisrepairPage() {
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
            Housing Disrepair
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
            Claims against negligent landlords on a No Win No Fee basis
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
              src="/our-expertise/housing-disrepair.jpg"
              alt="Housing Disrepair"
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
              Our housing disrepair lawyers can help you if you have suffered as a result of your landlord's failure to carry out repairs to your property. Our team undertake claims against negligent landlords on a no win, no fee basis for a <strong className="text-white">25% Success Fee</strong> which is only payable if the claim is successful.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              This means that you receive <strong className="text-white">up to 75% of the compensation</strong> that you are awarded and you pay nothing to us, win or lose.
            </p>

            {/* Key Rule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
            >
              <h3 className="text-lg font-semibold text-white mb-2">The General Rule</h3>
              <p className="text-white/70">
                If you can show that you have <strong className="text-white">reported the disrepair to your landlord</strong> (and have proof of this) and have given your landlord ample opportunity to carry out those repairs and they have failed to do so, we can help you pursue a claim to ensure the repairs are done and you also receive the compensation you deserve.
              </p>
            </motion.div>
          </motion.div>

          {/* Types of Disrepair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What You Can Claim For
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {disrepairTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gold-500/10">
                      <Icon className="text-gold-500" size={18} />
                    </div>
                    <span className="text-white/70 text-sm">{type.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Evidence Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <Camera className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Important: Gather Your Evidence</h3>
                  <p className="text-white/60 text-sm mb-4">
                    It is important that you keep very careful records so they can be produced as evidence:
                  </p>
                  <div className="space-y-3">
                    {evidenceChecklist.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
              Living with disrepair issues?
            </h3>
            <p className="text-white/60 mb-6">
              If your landlord has failed to carry out repairs despite your complaints, we can help you get the repairs done and claim compensation for your suffering. Contact us today for a free assessment.
            </p>
            <Link
              href="/housing-disrepair/claim"
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
