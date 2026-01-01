'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const accordionData = [
  {
    title: 'AS A DRIVER',
    content: {
      intro: 'As a driver of a vehicle in a non-fault accident, you may be able to claim for',
      items: [
        'Your injuries',
        'Damage to your vehicle',
        'Storage and recovery charges',
        'Repair and credit hire charges',
        'Policy excess',
        'Loss of earnings',
        'Cost of treatment and travel expenses',
        'Any other losses (such as damaged clothing)',
      ],
    },
  },
  {
    title: 'AS A PASSENGER',
    content: {
      intro: 'Equally, as an innocent passenger in a car, on a bicycle/motorbike (which may be as a result of a manufacturing fault, third party vehicle or defect in the road) or on a bus, you can claim compensation for your injuries. Fortunately, most Road Traffic Accidents result in a whiplash injury (which can even be suffered through low velocity impacts (LVI) resulting in soft tissue damage).',
      items: [],
    },
  },
];

function AccordionItem({ item, isOpen, onClick }: { item: typeof accordionData[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-4">
      <button
        onClick={onClick}
        className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/5 transition-colors"
      >
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${isOpen ? 'border-gold-500 text-gold-500' : 'border-white/30 text-white/50'}`}>
          <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <span className="text-xl text-white/90 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
          {item.title}
        </span>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pl-20">
          <p className="text-white/60 leading-relaxed mb-4">
            {item.content.intro}
          </p>
          {item.content.items.length > 0 && (
            <ul className="space-y-2">
              {item.content.items.map((listItem, index) => (
                <li key={index} className="flex items-start gap-3 text-white/60">
                  <span className="text-gold-500 mt-1">•</span>
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function RoadTrafficAccidentsPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

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
            Road Traffic Accidents
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
              src="/our-expertise/road-traffic-accidents.jpg"
              alt="Road Traffic Accidents"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Zen Law Solicitors have specialist road traffic accident lawyers who can help you whether you or your children were involved in an accident as a driver, passenger, motorcyclist, cyclist or a pedestrian. If you have suffered an injury in a Road Traffic Accident in the last 3 years, we can help you obtain compensation.
            </p>
            <p className="text-white/60 leading-relaxed">
              Remember, all of our claims are dealt with on a &apos;No Win No Fee&apos; basis which means you pay nothing to us (win or lose).
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={item.title}
                item={item}
                isOpen={openAccordion === index}
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
              />
            ))}
          </motion.div>

          {/* Additional Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p className="text-white/60 leading-relaxed">
              However, in the event of serious injury, your claim may involve organising a specialist in your injury, nursing care/rehabilitation experts and any other professionals who can assist in helping you recover from your injury. If a member of your family has unfortunately died as a result of a Road Traffic Accident, then this may result in the loss of the main source of income for a family.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              After such an accident a family needs the care and attention of highly-trained lawyers to help them through the difficult circumstances. Following a fatal accident, there may be a potential claim for a bereavement award, funeral expenses and special damages compensation if the family&apos;s income has been affected following the accident.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Hopefully, you will never need our services. In the event that you do, Zen Law Solicitors will achieve the best possible compensation award for you – and quickly.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Due to the Whiplash Reforms which came into force on 31 May 2021, we now have to deduct up to 40% of your damages compensation as fees for RTA cases.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              If you have been involved in an accident which was not your fault, please complete our{' '}
              <Link href="#contact" className="text-gold-500 hover:text-gold-400 transition-colors">
                Online Enquiry Form
              </Link>{' '}
              so that we can help.
            </p>
            
            <p className="text-white font-semibold text-lg mt-8">
              If you are ready to start your claim, please click the &apos;Start my RTA claim&apos; button below.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8"
            >
              <Link
                href="/road-traffic-accidents/claim"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-all duration-300 hover:gap-4"
              >
                <span>START MY RTA CLAIM</span>
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
