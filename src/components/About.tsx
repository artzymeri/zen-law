'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const guarantees = [
  {
    title: 'No Win, No Fee',
    description: "It won't cost you a thing, win or lose. We only get paid when you do.",
  },
  {
    title: 'Expert Lawyers',
    description: 'Professional, experienced and friendly lawyers at your service from day one.',
  },
  {
    title: 'Honest Advice',
    description: 'Simple and straightforward advice from start to finish.',
  },
  {
    title: 'National Coverage',
    description: 'We can deal with your case however you choose - post, email, or phone.',
  },
  {
    title: '20 Years Experience',
    description: 'Two decades of legal expertise in personal injury claims.',
  },
  {
    title: 'Your Needs First',
    description: 'We are committed to helping you and putting your needs first.',
  },
];

// 3D Card component
function Card3D({ guarantee, index, isInView }: { guarantee: typeof guarantees[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: 0.4 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="cursor-default"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`
          relative p-6 rounded-xl border transition-all duration-500
          ${isHovered 
            ? 'bg-white/[0.06] border-gold-500/30' 
            : 'bg-white/[0.02] border-white/10'
          }
        `}
      >
        <h3 
          className="text-white font-semibold text-lg mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {guarantee.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {guarantee.description}
        </p>
        
        {/* Subtle corner accent */}
        <div 
          className={`absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-xl transition-all duration-500 ${
            isHovered ? 'border-gold-500/50' : 'border-transparent'
          }`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-6 block"
            >
              About Us
            </motion.span>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-[1.1]" 
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-white">Why Choose </span>
              <span className="gold-text">Zen Law?</span>
            </h2>
            
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Zen Law Solicitors in Manchester are an innovative and friendly law firm with 20 years&apos; legal experience. We are a personal injury practice with expertise in all types of injury including road traffic accidents, slips and trips, accidents at work and industrial diseases.
            </p>
            
            <p className="text-white/50 leading-relaxed mb-10">
              We pride ourselves on our open, friendly approach and in providing clear and straightforward advice. Above all, we are committed to helping you and putting your needs first.
            </p>

            {/* Quote */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative pl-6 border-l-2 border-gold-500/50"
            >
              <p 
                className="text-white/70 italic text-lg" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                &ldquo;You will speak to a specialist lawyer from day one. We will work on your case on a no-win no-fee basis, so there&apos;s no risk to you.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right content - Guarantees grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {guarantees.map((guarantee, index) => (
              <Card3D 
                key={guarantee.title} 
                guarantee={guarantee} 
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
