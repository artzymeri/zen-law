'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const bodyParts = [
  { id: 'head', name: 'Head Injury', href: '/compensation-calculator/head' },
  { id: 'face', name: 'Face Injury', href: '/compensation-calculator/face' },
  { id: 'neck', name: 'Neck Injury', href: '/compensation-calculator/neck' },
  { id: 'shoulder', name: 'Shoulder Injury', href: '/compensation-calculator/shoulder' },
  { id: 'chest', name: 'Chest Injury', href: '/compensation-calculator/chest' },
  { id: 'arm', name: 'Arm Injury', href: '/compensation-calculator/arm' },
  { id: 'back', name: 'Back Injury', href: '/compensation-calculator/back' },
  { id: 'elbow', name: 'Elbow Injury', href: '/compensation-calculator/elbow' },
  { id: 'wrist', name: 'Wrist Injury', href: '/compensation-calculator/wrist' },
  { id: 'hand', name: 'Hand Injury', href: '/compensation-calculator/hand' },
  { id: 'organ', name: 'Organ Injury', href: '/compensation-calculator/organ' },
  { id: 'hip', name: 'Hip & Pelvis Injury', href: '/compensation-calculator/hip' },
  { id: 'leg', name: 'Leg Injury', href: '/compensation-calculator/leg' },
  { id: 'knee', name: 'Knee Injury', href: '/compensation-calculator/knee' },
  { id: 'ankle', name: 'Ankle Injury', href: '/compensation-calculator/ankle' },
  { id: 'foot', name: 'Foot Injury', href: '/compensation-calculator/foot' },
];

const otherInjuries = [
  {
    title: 'Work Related Upper Limb Injury',
    ranges: [
      { description: 'Complete Recovery within Months', amount: '£1,575 to £2,500' },
      { description: 'Recovery up to 3 Years', amount: '£6,175 to £7,700' },
      { description: 'Continuing Disability and Loss of Employment', amount: '£10,600 to £16,500' },
    ],
  },
  {
    title: 'Paralysis Claim',
    ranges: [
      { description: 'Tetraplegia (also known as Quadriplegia)', amount: '£232,000 to £288,500' },
      { description: 'Paraplegia', amount: '£156,750 to £203,000' },
    ],
  },
  {
    title: 'Fatal Accident Claim',
    ranges: [
      { description: 'Death – Immediate unconsciousness to awareness for up to 5 weeks', amount: '£1,000 to £17,000' },
    ],
  },
  {
    title: 'Chronic Pain',
    ranges: [
      { description: 'Ongoing Symptoms and Fibromyalgia', amount: '£15,000 to £45,000' },
      { description: 'Complex Regional Pain Syndrome (CRPS)', amount: '£20,000 to £60,000' },
    ],
  },
  {
    title: 'Scarring to Other Parts of the Body',
    ranges: [
      { description: 'Laceration, Surgical Burns', amount: '£1,680 to £75,000' },
    ],
  },
  {
    title: 'Damage to Hair',
    ranges: [
      { description: 'Defective waving, tinting, burning, skin grafting', amount: '£2,800 to £7,850' },
    ],
  },
];

export default function CompensationCalculatorPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const [expandedOther, setExpandedOther] = useState<number | null>(null);

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
            Compensation Calculator
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
            Find out how much your injury claim could be worth
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
              src="/compensation-calculator.jpg"
              alt="Compensation Calculator"
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
              At Zen Law Solicitors, we are committed to helping people understand their personal injury claims, including the amount of compensation they can expect for their injury.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Although each and every case is different (for example, someone you know may have received compensation for a similar injury but the amount of compensation will nearly always vary), our Compensation Calculator below will help you to understand what your claim could be worth.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
            >
              <div className="flex items-start gap-4">
                <Calculator className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Get a More Accurate Estimate</h3>
                  <p className="text-white/70 text-sm">
                    Use our Online Enquiry Form for one of our lawyers to call you back and provide you with a more accurate estimation of how much you can claim.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Body Parts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Select Your Injury Type
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {bodyParts.map((part, index) => (
                <motion.div
                  key={part.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
                >
                  <Link
                    href={part.href}
                    className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 transition-all text-center group"
                  >
                    <span className="text-white/70 group-hover:text-gold-500 transition-colors text-sm font-medium">
                      {part.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Injuries Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <p className="text-white/60 text-center mb-8">
              If your injury is not listed above, you can still make a claim.
            </p>

            <h2 
              className="text-3xl font-light text-white mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Other Types of Injuries
            </h2>

            <div className="space-y-4">
              {otherInjuries.map((injury, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  className="rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedOther(expandedOther === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white font-medium">{injury.title}</span>
                    {expandedOther === index ? (
                      <ChevronUp className="text-gold-500" size={20} />
                    ) : (
                      <ChevronDown className="text-white/50" size={20} />
                    )}
                  </button>
                  
                  {expandedOther === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 bg-white/5"
                    >
                      <div className="pt-4 space-y-3">
                        {injury.ranges.map((range, rangeIndex) => (
                          <div key={rangeIndex} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                            <span className="text-white/60 text-sm">{range.description}</span>
                            <span className="text-gold-500 font-semibold text-sm">{range.amount}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
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
              Need a Personalised Assessment?
            </h3>
            <p className="text-white/60 mb-6">
              Our expert solicitors can provide you with a more accurate estimation based on the specific details of your case. Contact us today for a free, no-obligation consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Get Your Free Assessment
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
