'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AccidentsAtWorkPage() {
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
            Accidents at Work
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
              src="/our-expertise/accidents-at-work.jpg"
              alt="Accidents at Work"
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
              Zen Law Solicitors are experienced in dealing with all types of workplace accidents. If you have been injured in a workplace accident in the last 3 years, we can help you obtain compensation. Zen Law Solicitors will maximise your compensation whilst finalising your accident claim as soon as possible.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              If you have been injured as a result of an workplace accident whilst employed in the UK, then you may be entitled to claim compensation against your employer or any other person, party or organisation responsible for the accident. To succeed with a workplace accident compensation claim you need to show that the employer (or someone for whom the employer was responsible) was at fault.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Industrial injuries can occur when using machinery such as forklift trucks in the workplace, which can be hazardous for both the operator and the people who work around the operator. Employers are legally required to supply training and safety equipment for all staff. Accidents can also occur when using other equipment such as ladders and scaffolding (including dropping objects from a height or failing to secure properly to a vehicle), which can follow from an employer&apos;s failure to provide proper training, routine inspections and maintenance.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              It is also the employer&apos;s duty to ensure that your working environment including floors and working areas are safe and free from hazards. Further, many people are employed where their duties may include some manual work; this may involve pushing, pulling or lifting items from one place to another.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Almost one third of accidents in the workplace involve an accident caused by a person carrying or moving an excessive weight. The most common type of injury caused by improper training or an excessive workload are back injuries. Adequate training must be given, together with adequate supervision. Employees should not be asked to perform tasks that are beyond their physical capabilities and where possible employers must supply the adequate tools for the job (pallet trucks / trolleys etc).
            </p>
            
            <p className="text-white/60 leading-relaxed">
              You may have suffered a long-tail industrial disease such as noise-induced hearing loss. Zen Law Solicitors are experienced industrial disease lawyers and experts in tracing old employers (even if you are struggling to remember who these were, we can still trace them) or their insurers to help you bring your claim. Please{' '}
              <Link href="/industrial-diseases" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-4">
                click here
              </Link>{' '}
              for more information.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
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
