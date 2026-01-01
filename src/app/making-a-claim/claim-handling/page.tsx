'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, FileText, CheckCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const simpleSteps = [
  {
    number: 1,
    text: 'Simply provide us with basic details of your road traffic accident claim via our Online Enquiry Form.',
  },
  {
    number: 2,
    text: 'We will immediately give you an honest assessment of your case and advise you.',
  },
  {
    number: 3,
    text: 'Your accident claim is dealt with on a no win, no fee basis.',
  },
  {
    number: 4,
    text: 'We negotiate the maximum level of compensation on your behalf.',
  },
  {
    number: 5,
    text: 'You will receive up to 75% of your accident compensation.',
  },
];

export default function ClaimHandlingPage() {
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
            Claim Handling
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
            How we handle your claim from start to finish
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
              src="/making-a-claim/claim-handling.jpg"
              alt="Claim Handling"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Client Care Pack Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <div className="flex items-start gap-4">
                <FileText className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Client Care Pack</h3>
                  <p className="text-white/70">
                    Once you have completed your Client Care Pack, please return everything to us as soon as possible. These documents will be sent to you after your initial enquiry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 
              className="text-3xl font-light text-white mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Simple Steps to Claim
            </h2>

            <div className="space-y-4">
              {simpleSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-500 font-bold">{step.number}</span>
                  </div>
                  <p className="text-white/70 pt-2">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <MessageSquare className="text-gold-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">We're Here to Help</h3>
                  <p className="text-white/70 mb-4">
                    Whatever the next steps are, your lawyer will keep you advised every step of the way. You can always contact your lawyer for advice or updates.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Phone size={16} className="text-gold-500" />
                      <span>Call your lawyer</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Mail size={16} className="text-gold-500" />
                      <span>Email for advice</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <CheckCircle size={16} className="text-gold-500" />
                      <span>Request a callback</span>
                    </div>
                  </div>
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
              Ready to Start?
            </h3>
            <p className="text-white/60 mb-6">
              Complete our Online Enquiry Form and we'll give you an honest assessment of your case. It's quick, easy, and completely free.
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
