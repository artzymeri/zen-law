'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Check, Users, FileText, Stethoscope, Home, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const compensationRates = [
  { type: 'Most Cases', rate: '75%', description: 'Work accidents, slips, trips, industrial diseases' },
  { type: 'RTA Cases', rate: '60%', description: 'Road Traffic Accidents' },
];

const expertServices = [
  { icon: Search, title: 'Investigators', description: 'To help establish facts, gather evidence or locate and interview witnesses' },
  { icon: Stethoscope, title: 'Medical Experts', description: 'To examine you and provide detailed reports about your injury' },
  { icon: Users, title: 'Occupational Therapists', description: 'To assess your needs and rehabilitation requirements' },
  { icon: Home, title: 'Architects', description: 'To establish costs for home adaptations if needed due to your injury' },
];

export default function PayingForClaimPage() {
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
            Paying For Your Claim
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
            How we fund your claim without any cost to you
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
              src="/making-a-claim/paying.jpg"
              alt="Paying For Your Claim"
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
            <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <div className="flex items-start gap-4">
                <Shield className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Commitment</h3>
                  <p className="text-white/70">
                    At Zen Law Solicitors, we firmly believe that the costs risk of your claim <strong className="text-white">should not be borne by you</strong>. That is why we undertake work on a 'No Win No Fee' basis, which is usually the most popular option.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed">
              We will advise you clearly and impartially on the best options to fund your claim without any cost to you. A 'No Win No Fee' agreement, also known as a conditional fee agreement (CFA), gives you security and peace of mind when making a personal injury claim.
            </p>
          </motion.div>

          {/* Compensation Rates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What You Receive
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {compensationRates.map((rate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <h3 className="text-lg font-medium text-white mb-2">{rate.type}</h3>
                  <p className="text-5xl font-bold text-gold-500 mb-2">{rate.rate}</p>
                  <p className="text-white/50 text-sm">{rate.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-3">
                <Check className="text-green-500 flex-shrink-0" size={20} />
                <p className="text-white/70 text-sm">
                  You will not have to pay any costs providing you comply with the terms of the 'No Win No Fee' agreement, as these will be claimed from the other party's solicitors.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Expert Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-4 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Expert Services We Provide
            </h2>
            <p className="text-white/60 text-center mb-8">
              We will enlist the help of whoever will best meet the needs of your claim
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gold-500/10 flex-shrink-0">
                      <Icon className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{service.title}</h3>
                      <p className="text-white/50 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Cost Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <FileText className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Costs Are Covered</h3>
                  <p className="text-white/70">
                    Their charges are <strong className="text-white">payable by the other side if you win</strong> and can usually be covered by insurance in case you lose. In this way, the right experts can be employed without you having to worry about the cost.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
          >
            <h3 
              className="text-2xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Start Your Claim?
            </h3>
            <p className="text-white/60 mb-6">
              Contact us today for a free, no-obligation assessment. We'll explain all your funding options and ensure you understand exactly what to expect.
            </p>
            <Link
              href="/contact"
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
