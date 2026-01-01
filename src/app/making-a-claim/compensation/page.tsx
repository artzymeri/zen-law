'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, AlertCircle, Info, Car, Briefcase, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const compensationTypes = [
  {
    icon: Briefcase,
    title: 'Non-RTA Cases',
    subtitle: 'Work accidents, slips, trips, industrial diseases',
    deduction: 'Up to 25%',
    youKeep: 'At least 75%',
    color: 'green',
  },
  {
    icon: Car,
    title: 'RTA Cases',
    subtitle: 'Road Traffic Accidents (post May 2021 reforms)',
    deduction: '40%',
    youKeep: '60%',
    color: 'amber',
  },
];

export default function CompensationPage() {
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
            Compensation?
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
            Understanding how compensation deductions work
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
              src="/making-a-claim/compensation.jpg"
              alt="Compensation"
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
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Important Information</h3>
                  <p className="text-white/70">
                    Due to recent legislation changes, we must now make a deduction from your compensation, but <strong className="text-white">only if your claim is successful</strong>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compensation Types */}
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
              What You Keep
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {compensationTypes.map((type, index) => {
                const Icon = type.icon;
                const borderColor = type.color === 'green' ? 'border-green-500/30' : 'border-amber-500/30';
                const bgColor = type.color === 'green' ? 'bg-green-500/10' : 'bg-amber-500/10';
                const textColor = type.color === 'green' ? 'text-green-500' : 'text-amber-500';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`p-6 rounded-xl ${bgColor} border ${borderColor}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={textColor} size={24} />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                        <p className="text-white/50 text-sm">{type.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-white/60 text-sm">Deduction</span>
                        <span className="text-white font-medium">{type.deduction}</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-white/60 text-sm">You Keep</span>
                        <span className={`font-bold text-lg ${textColor}`}>{type.youKeep}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RTA Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm">
                For RTA cases, due to <strong className="text-white">Whiplash Reforms of May 2021</strong> (where a solicitor is no longer paid by the Defendant for certain types of claim), we would need to make a damages deduction of 40% of your compensation as standard.
              </p>
            </div>
          </motion.div>

          {/* Claims Management Warning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-4">
                <Users className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Claims Management Companies</h3>
                  <p className="text-white/60 text-sm mb-3">
                    Sometimes you may have come to us through a Claims Management Company or a Marketing Company. In these instances, it may be necessary to cover the marketing costs of such companies and as such you may be charged an additional deduction out of your damages.
                  </p>
                  <p className="text-white/70 text-sm">
                    <strong className="text-white">It is always recommended that you approach a solicitor directly</strong> to ensure that you are able to keep more of your compensation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Remember</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Costs will only be deducted in the case of a <strong className="text-white">successful claim</strong></li>
                    <li>• You will ordinarily not pay any fees to us as part of your claim</li>
                    <li>• You will always be advised from the outset whether a success fee or damages deduction is payable</li>
                    <li>• All deductions will be set out in your paperwork before we take your case on</li>
                  </ul>
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
              Have Questions About Compensation?
            </h3>
            <p className="text-white/60 mb-6">
              Contact us directly for a free, no-obligation assessment. We'll explain exactly what you can expect to receive from your claim.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Contact Us Directly
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
