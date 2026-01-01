'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, FileText, Send, Stethoscope, CheckCircle, Clock, MapPin, Camera, Users, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const step1Info = [
  { icon: Clock, text: 'The time, date, weather, conditions and location of the accident' },
  { icon: Users, text: 'Information about any witnesses who saw the accident' },
  { icon: Camera, text: 'Photographs taken of the accident location' },
  { icon: AlertCircle, text: 'Details of the injuries you suffered as a result' },
  { icon: FileText, text: 'Information regarding the guilty party (the Defendant) including name, address and why you believe they are responsible' },
];

const steps = [
  {
    number: 1,
    title: 'We take some information regarding your accident',
    icon: FileText,
    content: 'The information we usually need includes details about your accident, witnesses, photographs, injuries, and the responsible party.',
    hasDetails: true,
  },
  {
    number: 2,
    title: 'We submit the claim to the other side',
    icon: Send,
    content: null,
    details: [
      'The Defendant (or their insurer) will have 21 days to reply, and may advise whether liability is being investigated.',
      'If the claim is being investigated, the Defendant will generally have 3 months in which to provide us with a decision on liability for the accident.',
      'Once liability is admitted we will proceed to obtain a medical report(s) in respect of the injuries you have sustained.',
      'If liability is denied, we will provide you with detailed advice regarding the prospects of success of your case and the next steps that we need to take.',
    ],
  },
  {
    number: 3,
    title: 'We arrange your medical appointment',
    icon: Stethoscope,
    content: null,
    details: [
      'Your medical appointment will be held at a time and place which is convenient for you.',
      'Your medical report will be assessed by your lawyer along with evidence in support of your claims for loss and expense, and your claim will be valued.',
      'We will submit your claim to the Defendant or their insurance company, where they will assess the value and either agree the settlement proposal or make a counter offer of settlement.',
    ],
  },
  {
    number: 4,
    title: 'Outcome of your case',
    icon: CheckCircle,
    content: null,
    details: [
      'The Defendant(s) accept liability for your injuries and pays you compensation that you are happy to accept.',
      'If we cannot agree the value of your claim or if the insurance company do not reply, we may have no option but to commence court proceedings (the \'litigation process\') against the other party.',
      'In the majority of cases you will not be required to attend court but we will require your full cooperation up until settlement.',
      'The date of settlement of your claim will then be the trial date, of which we will advise you in advance.',
    ],
  },
];

export default function StepByStepPage() {
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
            Step By Step
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
            Understanding the personal injury claims process
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
              src="/making-a-claim/step-by-step.jpg"
              alt="Step By Step Claims Process"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg text-white/70 leading-relaxed text-center">
              We have simplified the claims process to help you understand what is involved in a typical claim for personal injury.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-gold-500/50 to-gold-500/10 hidden md:block" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold-500">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="text-gold-500" size={24} />
                        <h3 
                          className="text-xl md:text-2xl font-light text-white"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      
                      {step.content && (
                        <p className="text-white/60 mb-4">{step.content}</p>
                      )}
                      
                      {/* Step 1 special details */}
                      {step.hasDetails && (
                        <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
                          <p className="text-white/70 text-sm mb-4">The information we usually need includes:</p>
                          <div className="space-y-3">
                            {step1Info.map((info, infoIndex) => {
                              const InfoIcon = info.icon;
                              return (
                                <div key={infoIndex} className="flex items-start gap-3">
                                  <InfoIcon size={16} className="text-gold-500 flex-shrink-0 mt-1" />
                                  <span className="text-white/60 text-sm">{info.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      
                      {/* Other steps details */}
                      {step.details && (
                        <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
                          <div className="space-y-4">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                                <span className="text-white/60 text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

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
              Our expert solicitors will guide you through every step of the process. Contact us today for a free, no-obligation consultation.
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
