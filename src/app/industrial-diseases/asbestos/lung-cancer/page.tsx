'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, AlertTriangle, ArrowLeft, Info, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const chestSymptoms = [
  'Persistent or changing cough',
  'Breathlessness',
  'Blood in the sputum',
  'Pain in the chest',
  'Wheezing from the affected side',
  'Weight loss',
];

const spreadSymptoms = [
  'Liver jaundice',
  'Bone pain or fracture',
  'Skin lumps',
  'Nerve or brain damage affecting walking',
  'Changes in talking or behaviour',
  'Memory problems',
];

export default function LungCancerPage() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/industrial-diseases/asbestos"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Asbestos Claims
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Asbestos Related Lung Cancer
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
            Lung cancer caused by workplace asbestos exposure
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
              src="/industrial-diseases/lung-cancer.jpg"
              alt="Asbestos Related Lung Cancer Claims"
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
              Lung cancer can be caused by exposure to asbestos dust, although there is no way of determining the precise cause, particularly if the sufferer is also a smoker. Medical evidence suggests that there must be <strong className="text-white">heavy exposure to asbestos</strong> to cause lung cancer and the amount of dust is similar, or even greater, than that necessary to cause Asbestosis.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Employers have a duty to protect their workers from hazardous substances and if you have developed a lung condition as a result of your working environment, then you may have a claim for compensation.
            </p>

            {/* Risk Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Combined Risk Factors</h3>
                  <p className="text-white/60 text-sm">
                    A smoker is at far greater risk of suffering lung cancer than a non-smoker and, similarly, a worker exposed to asbestos dust is at a far greater risk than someone who is not exposed. However, a worker who smoked and who was also exposed to asbestos is at a <strong className="text-white">greatly increased risk</strong> — some studies have assessed the risk at up to <strong className="text-white">50 times greater</strong> than those who did neither.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <Info className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Medical Evidence</h3>
                  <p className="text-white/60 text-sm">
                    Until recently, most doctors would only accept that asbestos exposure had caused lung cancer if the sufferer had also been diagnosed with Asbestosis. This is no longer the case and claims can be made based on evidence of heavy asbestos exposure alone.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Compensation Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
            >
              <div className="flex items-start gap-4">
                <Scale className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Smokers Can Still Claim</h3>
                  <p className="text-white/60 text-sm">
                    If you have been exposed to a heavy dose of asbestos dust and smoked cigarettes, the Court is likely to find that the lung cancer has been caused by the combined effect of the two substances. This means that <strong className="text-white">you will still recover compensation</strong> for your disease, although the Court may reduce the amount to reflect the fact that your smoking has also played a part in causing the condition.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Symptoms */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            {/* Chest Symptoms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 
                className="text-xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Chest Symptoms
              </h3>
              <div className="space-y-3">
                {chestSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Spread Symptoms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 
                className="text-xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                If Cancer Has Spread
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Where the tumour has spread outside the lungs, the first symptom may not come from the chest:
              </p>
              <div className="space-y-3">
                {spreadSymptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Diagnosed with Lung Cancer?
            </h3>
            <p className="text-white/60 mb-6">
              If you've been diagnosed with lung cancer and have a history of asbestos exposure at work, you may be entitled to compensation — even if you are or were a smoker. Contact us today for expert legal advice.
            </p>
            <Link
              href="/industrial-diseases/asbestos/claim"
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
