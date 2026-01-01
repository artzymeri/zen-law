'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, Shield, AlertCircle, FileText, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const benefits = [
  'Initial advice about your claim costs you nothing',
  'Security and peace of mind when making a claim',
  'If unsuccessful, we will not be paid',
  'Adverse costs usually not payable if claim is genuine',
  'Options for legal expenses cover under home or motor policy',
  'After-The-Event (ATE) Policy available for additional protection',
];

const conditions = [
  'Your claim must not be frivolous, vexatious or fraudulent',
  'You must comply with the No Win No Fee agreement',
  'You must cooperate with us in progressing your claim',
  'You should accept reasonable settlement offers (with our advice)',
];

export default function NoWinNoFeePage() {
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
            No Win No Fee?
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
            Understanding conditional fee agreements and how they work
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
              src="/making-a-claim/no-win-no-fee.jpg"
              alt="No Win No Fee"
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
              We are aware that the idea of making a claim can be a daunting experience. We are here to help you through the process and explain how the claims process works, from start to finish.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Contacting us for initial advice about your claim will cost you nothing. If we advise you to pursue a claim, we will review with you all the options for funding your claim, including 'No Win No Fee' which is usually the most popular option. We will advise you clearly and impartially on the best options to fund your claim without any cost to you.
            </p>

            {/* What is CFA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What is a Conditional Fee Agreement?</h3>
                  <p className="text-white/70">
                    A 'No Win No Fee' agreement, also known as a <strong className="text-white">conditional fee agreement (CFA)</strong>, gives you security and peace of mind when making a personal injury claim. We will assess the likelihood of your claim being successful and decide if we are able to offer you a no win no fee agreement.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* How It Works */}
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
              How Does It Work?
            </h2>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <p className="text-white/70">
                If you decide to accept our offer, we will deal with your claim on the basis that <strong className="text-white">if the claim is unsuccessful we will not be paid</strong> and any adverse costs of the other party will not usually be payable.
              </p>
              
              <p className="text-white/60">
                These costs, however, may be covered by any legal expenses cover you may have under your home or motor policy or if you opt to take out an <strong className="text-white">After-The-Event (ATE) Policy</strong> to protect against such costs. You will be advised of your option to do this from the outset.
              </p>

              <p className="text-white/60">
                You will usually not have to pay any costs providing you comply with the 'No Win No Fee' agreement and cooperate with us in progressing your claim. On occasion, you may be charged a success fee although you will be advised of this and it will also be set out in your paperwork before we take your case on.
              </p>
            </div>
          </motion.div>

          {/* Benefits & Conditions Grid */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-green-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-green-500" size={24} />
                <h3 
                  className="text-xl font-light text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Benefits
                </h3>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-white/70 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-amber-500" size={24} />
                <h3 
                  className="text-xl font-light text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Conditions
                </h3>
              </div>
              <div className="space-y-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

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
              Get Free Initial Advice
            </h3>
            <p className="text-white/60 mb-6">
              Contact us today for a free, no-obligation assessment of your claim. We'll explain all your funding options and help you understand if No Win No Fee is right for you.
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
