'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, Scale, Clock, Award, HeartHandshake } from 'lucide-react';

const guarantees = [
  {
    icon: Shield,
    title: 'No Win, No Fee',
    description: "It won't cost you a thing, win or lose. We only get paid when you do.",
  },
  {
    icon: Users,
    title: 'Expert Lawyers',
    description: 'Professional, experienced and friendly lawyers at your service from day one.',
  },
  {
    icon: Scale,
    title: 'Honest Advice',
    description: 'Simple and straightforward advice from start to finish.',
  },
  {
    icon: Clock,
    title: 'National Coverage',
    description: 'We can deal with your case however you choose - post, email, or phone.',
  },
  {
    icon: Award,
    title: '20 Years Experience',
    description: 'Two decades of legal expertise in personal injury claims.',
  },
  {
    icon: HeartHandshake,
    title: 'Your Needs First',
    description: 'We are committed to helping you and putting your needs first.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block"
            >
              About Us
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-white">Why Choose </span>
              <span className="gold-text">Zen Law?</span>
            </h2>
            
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Zen Law Solicitors in Manchester are an innovative and friendly law firm with 20 years&apos; legal experience. We are a personal injury practice with expertise in all types of injury including road traffic accidents, slips and trips, accidents at work and industrial diseases.
            </p>
            
            <p className="text-white/60 leading-relaxed mb-8">
              We pride ourselves on our open, friendly approach and in providing clear and straightforward advice. Above all, we are committed to helping you and putting your needs first.
            </p>

            <div className="glass-card p-6 border-l-4 border-gold-500">
              <p className="text-white/80 italic text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                &ldquo;You will speak to a specialist lawyer from day one. We will work on your case on a no-win no-fee basis, so there&apos;s no risk to you.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right content - Guarantees grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <guarantee.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{guarantee.title}</h3>
                  <p className="text-white/50 text-sm">{guarantee.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Memberships / Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-gold-500/60 text-sm tracking-[0.2em] uppercase mb-8">Memberships & Accreditations</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['SRA', 'Law Society', 'APIL', 'CILEx'].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="glass-card px-8 py-4 hover:border-gold-500/30 transition-colors"
              >
                <span className="text-white/60 font-semibold tracking-wider">{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
