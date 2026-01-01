'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, X, AlertCircle, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const eligibilityCriteria = [
  'You have been injured seriously enough to qualify for at least the minimum award (£1,000)',
  'You were injured in an act of violence in England, Scotland or Wales',
  'The incident was reported to the police as soon as reasonably possible',
  'You did not provoke the attacker or cause the crime',
  'You have made your application within two years of the incident',
  'The incident was not a Road Traffic Accident',
];

const notEligible = [
  'You were injured before 1 August 1964',
  'You have already applied for compensation for the same injury',
  'The injury happened before 1 October 1979 and you lived with the person who injured you',
  'The injury and act of violence took place outside England, Scotland or Wales',
];

const reducedCompensation = [
  'Your behaviour before, during or after the incident',
  'Your criminal record or unspent convictions',
  'Your failure to co-operate with the police or with us',
  'Your delay in informing the police of the incident',
];

const likelyAwards = [
  { injury: 'Psychological injury', amount: '£1,000 +' },
  { injury: 'Damage to Teeth', amount: '£1,000 – £3,500' },
  { injury: 'Fractured Jaw', amount: '£1,500 – £6,200' },
  { injury: 'Scarring to the Face', amount: '£1,500 – £11,000' },
  { injury: 'Burns', amount: '£2,000 – £33,000' },
];

export default function CriminalInjuriesPage() {
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
            Criminal Injuries
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
            CICA claims for victims of violent crime on a No Win No Fee basis
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
              src="/our-expertise/criminal-injuries.jpg"
              alt="Criminal Injuries"
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
              As well as personal injury claims, we also specialise in Criminal Injuries Compensation Authority (CICA) claims. Similar to personal injury claims, these are dealt with on your behalf on a No Win No Fee basis.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              If you have been injured as a result of a criminal act, you may be entitled to compensation for your injuries. The effects of a criminal attack can be serious, with many victims suffering from lasting physical and psychological damage. The CICA is a government-funded scheme set up to compensate innocent victims of crime for injury and other losses such as cost of medical treatment and loss of earnings.
            </p>

            <p className="text-white/60 leading-relaxed">
              The scheme pays compensation where in a standard personal injury claim you would receive nothing. Under the scheme, you can claim for compensation because a loved one has died as a result of a violent crime and also for sexual offences. The compensation award varies depending on the severity of the injury, but can range from <strong className="text-white">£1,000 to £500,000</strong>.
            </p>

            {/* Medical Record Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Important</h3>
                  <p className="text-white/60 text-sm">
                    It is very important that there is a medical record of the injury, as they may be necessary to prove the extent of your injuries as a result of the crime. The compensation award is assessed on the basis of a fixed tariff and we can advise you better once we have more details relating to your injuries.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Eligibility Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 
              className="text-3xl font-light text-white mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Can I Apply?
            </h2>

            {/* Eligible */}
            <div className="mb-8">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                You may be eligible to apply if:
              </h3>
              <div className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                  >
                    <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{criteria}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Not Eligible */}
            <div className="mb-8">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <X className="text-red-500" size={20} />
                You will not be eligible if:
              </h3>
              <div className="space-y-3">
                {notEligible.map((criteria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    <X size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{criteria}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Level of Compensation */}
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
              Level of Compensation
            </h2>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Compensation may be reduced because of:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {reducedCompensation.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Scale className="text-gold-500" size={20} />
                Multiple Injuries
              </h3>
              <p className="text-white/60 text-sm">
                In cases of multiple injuries, the compensation will include the full amount allowed for the most serious injury, <strong className="text-white">30%</strong> of the amount allowed for the second most serious injury and <strong className="text-white">15%</strong> of the amount allowed for the third most serious injury (unless any psychological injury suffered is considered to be worth less than the most serious physical injury, in which case no additional award is likely).
              </p>
            </div>

            {/* Likely Awards Table */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="bg-gold-500/20 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">Likely Awards</h3>
              </div>
              <div className="divide-y divide-white/10">
                {likelyAwards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isContentInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-center justify-between px-6 py-4 bg-white/5"
                  >
                    <span className="text-white/70">{award.injury}</span>
                    <span className="text-gold-500 font-semibold">{award.amount}</span>
                  </motion.div>
                ))}
              </div>
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
              Have you been a victim of crime?
            </h3>
            <p className="text-white/60 mb-6">
              If you are unfortunate enough to have been the victim of a crime, such trauma can be very difficult to overcome and it is entirely appropriate that you should seek compensation. One of our specially trained lawyers will help you with your claim.
            </p>
            <Link
              href="/criminal-injuries/claim"
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
