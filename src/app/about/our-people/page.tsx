'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Parvez Anwar',
    role: 'Director',
    image: '/our-people/parvez-anwar.jpg',
    bio: 'Parvez has many years of experience in dealing with high-value industrial disease claims when acting for Defendant Insurers.',
  },
  {
    name: 'Umran Aziz',
    role: 'Director',
    image: '/our-people/umran-aziz.jpg',
    bio: 'Umran is an experienced solicitor with years of experience in handling a wide range of Fast Track and Multi Track claims.',
  },
];

export default function OurPeoplePage() {
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
            Our People
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
            Meet the experienced legal professionals dedicated to fighting for your rights
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section ref={contentRef} className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/30 transition-colors group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 
                    className="text-2xl font-light text-white mb-1"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-gold-500 font-medium mb-4">{member.role}</p>
                  <p className="text-white/60 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <h2 
              className="text-3xl font-light text-white mb-8 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Commitment to You
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Experience', desc: 'Years of expertise in personal injury and industrial disease claims' },
                { title: 'Dedication', desc: 'Committed to achieving the best possible outcome for every client' },
                { title: 'Compassion', desc: 'Understanding and supportive throughout your entire claim journey' },
              ].map((value, index) => (
                <div key={value.title} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                  <h3 className="text-lg font-semibold text-gold-500 mb-2">{value.title}</h3>
                  <p className="text-white/60 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
              Get in Touch
            </h3>
            <p className="text-white/60 mb-6">
              Our team is ready to help with your personal injury claim. Contact us today for a free, no-obligation consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
