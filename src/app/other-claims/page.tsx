'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Users, Flame, AlertTriangle, Plane, Baby, Brain, Skull, Clock, Package, Gavel, Sword } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const claimTypes = [
  { icon: Package, title: 'Defective Products', description: 'Claims for injuries caused by faulty or dangerous products' },
  { icon: Gavel, title: 'Actions Against the Police', description: 'Claims for unlawful arrest, assault or misconduct' },
  { icon: Sword, title: 'Military Accidents', description: 'Injuries sustained during military service or training' },
  { icon: Flame, title: 'Burns and Lacerations', description: 'Serious burn injuries and deep cuts from accidents' },
  { icon: Shield, title: 'Abuse Claims', description: 'Compensation for victims of physical or sexual abuse' },
  { icon: AlertTriangle, title: 'Carbon Monoxide Poisoning', description: 'Injuries from faulty appliances or negligent landlords' },
  { icon: Plane, title: 'Accidents or Illness Whilst Abroad', description: 'Holiday accidents and illnesses overseas' },
  { icon: Users, title: 'Adventure Activity Claims', description: 'Injuries during organised adventure or sports activities' },
  { icon: Baby, title: 'Accidents Involving Children', description: 'Claims on behalf of injured minors' },
  { icon: Brain, title: 'Stress, Bullying and Harassment Claims', description: 'Workplace psychological injury claims' },
  { icon: Skull, title: 'Fatal Accidents', description: 'Claims following the death of a loved one' },
  { icon: Clock, title: 'Delayed Flight Claims', description: 'Compensation for significant flight delays' },
];

export default function OtherClaimsPage() {
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
            Other Types of Claim
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
            We handle all types of personal injury claims on a No Win No Fee basis
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
              src="/our-expertise/other-claims.jpg"
              alt="Other Types of Claims"
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
              Our personal injury lawyers undertake accident and personal injury claims on a no win, no fee basis. This means that you receive <strong className="text-white">up to 75% of the compensation</strong> that you are awarded and you pay nothing to us, win or lose.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              At Zen Law Solicitors, we handle all types of personal injury claims and can help you receive compensation even where you think you may not have a claim or were partially to blame. We appreciate that not all accidents fit into the categories we have so far identified.
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
                If you can show that you have been injured in an accident that is <strong className="text-white">someone else's fault</strong>, that <strong className="text-white">could have been avoided</strong>, then you may have a claim.
              </p>
            </motion.div>
          </motion.div>

          {/* Claim Types Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Types of Claims We Handle
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {claimTypes.map((claim, index) => {
                const Icon = claim.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
                        <Icon className="text-gold-500" size={22} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{claim.title}</h3>
                        <p className="text-white/50 text-sm">{claim.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
              Not sure if you have a claim?
            </h3>
            <p className="text-white/60 mb-6">
              Even if your accident doesn't fit into a specific category, we may still be able to help. Contact us today for a free, no-obligation assessment of your case.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Get Free Advice
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
