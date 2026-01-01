'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Mr M is wrongly accused of fraud',
    description: 'Our client was wrongly accused by the insurer of staging the accident. We fought the case and proved his innocence, securing full compensation.',
    image: '/our-case-studies/fraud.jpg',
  },
  {
    title: 'Mrs S is wrongly blamed',
    description: 'The defendant claimed our client was at fault. Through expert evidence and meticulous case preparation, we proved liability.',
    image: '/our-case-studies/blamed.jpg',
  },
  {
    title: "Mr W's insurers are found",
    description: 'Through our insurance archaeology expertise, we traced insurers from over 30 years ago to pursue a successful industrial disease claim.',
    image: '/our-case-studies/found.jpg',
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/50 text-sm tracking-[0.3em] uppercase mb-4 block">
            Success Stories
          </span>
          <h2 className="section-title mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-white">Our </span>
            <span className="text-white/80">Case Studies</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Real results for real people. See how we&apos;ve helped our clients secure the compensation they deserve.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Background Image */}
                <div className="relative h-48 flex-shrink-0">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="relative p-6 bg-dark-950/90 flex-grow flex flex-col">
                  <h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors leading-tight" 
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed flex-grow">
                    {study.description}
                  </p>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white text-sm flex items-center gap-2 font-medium transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a 
            href="#claim" 
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            <span>Start Your Claim Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
