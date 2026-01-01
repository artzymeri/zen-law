'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Clock, AlertCircle, Car, HardHat, Footprints, HeartPulse, FileCheck, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const timelineItems = [
  {
    icon: Car,
    title: 'Road Traffic Accidents',
    duration: '6 to 12 weeks',
    description: 'Where the injuries are largely confined to whiplash, lower back and shoulder pain.',
    color: 'blue',
  },
  {
    icon: HardHat,
    title: 'Accidents at Work',
    duration: '4 to 12 months',
    description: '4 to 8 months where there is no fracture type injury. Up to 12 months where fractures are involved.',
    color: 'amber',
  },
  {
    icon: Footprints,
    title: 'Slip & Trip Accidents',
    duration: '4 to 12 months',
    description: 'Depending on the complexity of liability and the nature of your injuries.',
    color: 'green',
  },
  {
    icon: HeartPulse,
    title: 'Serious Accidents & Complex Injuries',
    duration: 'Up to 3 years',
    description: 'Largely due to the number of experts that need to be instructed and the detailed assessment of nursing, housing, care costs and future losses.',
    color: 'red',
  },
];

const whyLonger = [
  'Wait for your medical condition to stabilise or reach "maximum medical improvement"',
  'Instruct multiple medical experts to assess the full extent of your injuries',
  'Calculate future losses including care needs, lost earnings, and rehabilitation costs',
  'Obtain expert reports on housing adaptations and equipment needs',
  'Negotiate with defendants and insurers to achieve the best possible settlement',
];

export default function HowLongPage() {
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
            How Long Will My Claim Take?
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
            Understanding claim timelines and what factors affect the duration of your case
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
              src="/making-a-claim/how-long.jpg"
              alt="How Long Will My Claim Take"
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
              It is impossible to give an accurate time estimate as each case is different. There are two main factors which will affect the length of time your case will take:
            </p>

            {/* Two Key Factors */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
              >
                <div className="flex items-start gap-4">
                  <FileCheck className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">1. Whether Liability is Disputed</h3>
                    <p className="text-white/70 text-sm">
                      It will not be possible to conclude your case until the Defendant accepts or is found responsible for causing your injury.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
              >
                <div className="flex items-start gap-4">
                  <Activity className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">2. The Severity of Your Injuries</h3>
                    <p className="text-white/70 text-sm">
                      It is very difficult to conclude the level of compensation you are entitled to if your injury is likely to affect you in the future.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Typical Timelines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Typical Claim Timelines
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {timelineItems.map((item, index) => {
                const colorClasses = {
                  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
                  green: 'bg-green-500/10 border-green-500/20 text-green-400',
                  red: 'bg-red-500/10 border-red-500/20 text-red-400',
                };
                const bgClass = colorClasses[item.color as keyof typeof colorClasses];
                
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`p-6 rounded-xl border ${bgClass.split(' ').slice(0, 2).join(' ')}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${bgClass.split(' ')[0]}`}>
                        <item.icon className={bgClass.split(' ')[2]} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="text-gold-500" size={16} />
                          <span className="text-gold-500 font-semibold">{item.duration}</span>
                        </div>
                        <p className="text-white/60 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Why Some Claims Take Longer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why Do Some Claims Take Longer?
            </h2>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/70 mb-6">
                Complex cases involving serious injuries often take longer because we need to:
              </p>
              <div className="space-y-3">
                {whyLonger.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Important</h3>
                  <p className="text-white/70">
                    We never rush your claim. We wait until you've fully recovered or your condition has stabilised before settling, to ensure you receive the maximum compensation you're entitled to.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
          >
            <h3 
              className="text-2xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get a Free Case Assessment
            </h3>
            <p className="text-white/60 mb-6">
              Contact us today for a free, no-obligation discussion about your claim and an estimated timeline based on your specific circumstances.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Contact Us Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
