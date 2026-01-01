'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, AlertTriangle, ArrowLeft, Info, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const symptoms = [
  'Persistent chest infections',
  'Increasing breathlessness',
  'Coughing up bloodstained phlegm',
  'Weight loss',
  'Difficulty expanding lungs normally',
  'Chest pain and discomfort',
];

const keyFacts = [
  'Indicates high levels of asbestos exposure',
  'Can develop after 20 years or more',
  'Can affect one or both lungs',
  'Caused by scarring of the lung lining (pleura)',
  'Can increase chances of developing more serious conditions',
  'Provisional damages allow for future claims if condition worsens',
];

export default function PleuralThickeningPage() {
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
            Pleural Thickening
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
            Scarring of the lung lining caused by asbestos exposure
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
              src="/industrial-diseases/pleural-thickening.jpg"
              alt="Pleural Thickening Claims"
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
              Pleural thickening can be caused by inhaling asbestos dust and fibres and indicates high levels of exposure to asbestos. Symptoms can include persistent chest infections, increasing breathlessness, coughing up bloodstained phlegm and weight loss, which can develop after about <strong className="text-white">20 years or more</strong>.
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Employers have a duty to protect their workers from hazardous substances and if you have developed pleural thickening as a result of your working conditions, then you may have a claim for compensation.
            </p>

            <p className="text-white/60 leading-relaxed">
              The asbestos fibres can be inhaled through the mouth or nose into the lungs and find their way to the membrane surrounding the lungs. This can cause scarring and thickening of the lining of the lung (the pleura). If these areas of thickening become widespread or cover large areas, it can cause respiratory difficulties — the condition is generally known as <strong className="text-white">diffuse pleural thickening</strong>.
            </p>

            <p className="text-white/60 leading-relaxed">
              Pleural thickening can affect one or both lungs and prevents the lungs from expanding normally, making the sufferer feel breathless. In some cases pleural thickening can be a painful and disabling condition by itself but it can also increase the chances of developing a more serious condition in later life.
            </p>

            {/* Compensation Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <Scale className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Compensation Assessment</h3>
                  <p className="text-white/60 text-sm">
                    The level of compensation is assessed on the level of disability and pain and suffering and can be affected by other conditions you are suffering from at the same time. For example, if you are diagnosed with lung cancer at a later stage and have been exposed to a heavy dose of asbestos dust but smoke cigarettes, the Court is likely to conclude that the lung cancer has been caused by the combined effect of the two substances. This means that you will recover compensation for your disease, although the Court may well reduce the compensation to reflect the fact that your smoking has also played a part in causing the condition.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Provisional Damages Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-xl bg-gold-500/10 border border-gold-500/20"
            >
              <div className="flex items-start gap-4">
                <Info className="text-gold-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Provisional Damages</h3>
                  <p className="text-white/60 text-sm">
                    If you have already been diagnosed with pleural thickening, there is a good chance that your condition will not deteriorate into something more serious. However, if it does deteriorate and you develop an even more serious asbestos-related condition such as <strong className="text-white">Asbestosis, lung cancer or Mesothelioma</strong> then it is possible to return to court for a further compensation award (the first award for pleural thickening is known as provisional damages).
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Symptoms & Key Facts */}
          <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            {/* Symptoms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 
                className="text-xl font-light text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Common Symptoms
              </h3>
              <div className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Facts */}
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
                Key Facts
              </h3>
              <div className="space-y-3">
                {keyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-white/70 text-sm">{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

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
              Diagnosed with Pleural Thickening?
            </h3>
            <p className="text-white/60 mb-6">
              If you've developed pleural thickening due to workplace asbestos exposure, we can help you claim compensation. Our provisional damages approach ensures you can return to court if your condition worsens.
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
