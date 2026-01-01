'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SlipsTripsFallsPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Slips, Trips & Falls
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-32 bg-gradient-to-r from-gold-500 to-transparent"
          />
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
              src="/our-expertise/slips-trips-and-falls.jpg"
              alt="Slips, Trips and Falls"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              Zen Law Solicitors are specialists in public liability claims and can assess the prospects of your claim very quickly at no cost and no obligation to you.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              If you have been injured as a result of a slipping or tripping over then you may be entitled to claim compensation against the person, party or public organisation responsible for the area that caused the accident.
            </p>

            {/* Public Footway Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="my-10 p-8 border-l-4 border-gold-500 bg-white/5 rounded-r-xl"
            >
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Public Footway Accidents
              </h3>
              <p className="text-white/60 leading-relaxed">
                If your accident occurred on a public footway, e.g. a pavement, path or a public road you would need to make a claim against the local highway authority (normally the local council). To succeed with such a claim you need to show that a defect is large enough to constitute a hazard to public users and that it has also been in that dangerous state for an unreasonable period of time.
              </p>
            </motion.div>

            {/* Private Premises Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="my-10 p-8 border-l-4 border-white/20 bg-white/5 rounded-r-xl"
            >
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Private Premises Accidents
              </h3>
              <p className="text-white/60 leading-relaxed">
                Other examples of cases may include accidents on privately-owned premises such as a supermarket, a pub, a restaurant, a gym or a shop. In these cases, the owner/occupiers are legally responsible for your safety whilst you are on their premises and have a duty to ensure that hazardous obstacles and spillages are managed to avoid the risk of injury to the public. You can therefore bring a claim for compensation if you have suffered an injury as a result of their failure to take reasonable steps to ensure your safety.
              </p>
            </motion.div>

            {/* Dog Attack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-10 p-8 border-l-4 border-white/20 bg-white/5 rounded-r-xl"
            >
              <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Dog Attacks
              </h3>
              <p className="text-white/60 leading-relaxed">
                Another type of accident you may suffer in a public place may be a dog attack. Dog owners have a responsibility to ensure that their dogs are kept under control and do not pose a threat to the public. If you have been attacked by a dog, we may be able to help you pursue a claim.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-all duration-300 hover:gap-4"
              >
                <span>START MY CLAIM</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
