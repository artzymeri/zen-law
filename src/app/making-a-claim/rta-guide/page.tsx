'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, Camera, FileText, Users, Car, MapPin, Clock, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const collectAtScene = [
  { icon: Users, text: 'Names, addresses and contact details of all parties involved' },
  { icon: Car, text: 'Registration numbers of all vehicles involved' },
  { icon: FileText, text: 'Insurance details of the other driver(s)' },
  { icon: Users, text: 'Names and contact details of any witnesses' },
  { icon: Camera, text: 'Photographs of the accident scene, vehicle damage and any injuries' },
  { icon: MapPin, text: 'Exact location of the accident (road names, landmarks)' },
  { icon: Clock, text: 'Date and time of the accident' },
  { icon: FileText, text: 'Police reference number (if police attended)' },
];

const recallAfterAccident = [
  'Weather and road conditions at the time',
  'Speed you and other vehicles were travelling',
  'Direction of travel for all vehicles involved',
  'Any road signs, traffic lights or markings nearby',
  'Any statements made by other parties at the scene',
  'Sequence of events leading up to the accident',
  'Any injuries you noticed immediately or shortly after',
  'Details of any medical treatment received',
];

export default function RTAGuidePage() {
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
            Road Traffic Accident Guide
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
            Essential steps to maximise your chances of a successful claim
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
              src="/making-a-claim/rta-guide.jpg"
              alt="Road Traffic Accident Guide"
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
              If you have been involved in a Road Traffic Accident, you should report the accident to your insurer and gather as much information as possible. It is also useful to know what steps to take to maximise your chances of a successful claim.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              We suggest you use the following guidelines to make sure that you are in the best position to make a claim:
            </p>
          </motion.div>

          {/* Information at Scene */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Information to Collect at the Scene
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {collectAtScene.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-gold-500/10 flex-shrink-0">
                      <Icon className="text-gold-500" size={18} />
                    </div>
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Information to Recall */}
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
              Information to Recall After the Accident
            </h2>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="grid sm:grid-cols-2 gap-3">
                {recallAfterAccident.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={16} className="text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partial Fault Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Partially at Fault?</h3>
                  <p className="text-white/70">
                    Even if you believe you may have partially been at fault for the accident, <strong className="text-white">you can still claim for compensation</strong>. The more evidence you can produce in support of your claim, especially in relation to liability and the value of your claim, the more likely you are to succeed in recovering the maximum amount of compensation for your injuries and losses.
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
              Been in a Road Traffic Accident?
            </h3>
            <p className="text-white/60 mb-6">
              Our expert solicitors can help you claim the compensation you deserve. Contact us today for a free, no-obligation consultation.
            </p>
            <Link
              href="/road-traffic-accidents/claim"
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
