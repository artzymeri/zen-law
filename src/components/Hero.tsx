'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years', sublabel: 'Experience' },
  { value: '5000+', label: 'Cases', sublabel: 'Won' },
  { value: '98%', label: 'Success', sublabel: 'Rate' },
  { value: '£50M+', label: 'Recovered', sublabel: 'For Clients' },
];

// Animated text that reveals letter by letter
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// 3D Card component that responds to mouse
function Card3D({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

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
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 1.2 + index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="cursor-pointer"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`
          relative p-6 md:p-8 rounded-2xl border transition-all duration-500
          ${isHovered 
            ? 'bg-white/[0.08] border-white/20 shadow-2xl shadow-white/5' 
            : 'bg-white/[0.02] border-white/10'
          }
        `}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
          }}
        />
        
        {/* Content */}
        <div className="relative" style={{ transform: 'translateZ(20px)' }}>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-white mb-1"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {stat.value}
          </motion.h3>
          <p className="text-white/70 text-sm font-medium">{stat.label}</p>
          <p className="text-white/40 text-xs">{stat.sublabel}</p>
        </div>

        {/* Floating reflection */}
        <div 
          className="absolute inset-x-0 -bottom-px h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main heading - minimalistic */}
          <div className="text-center mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 text-sm tracking-[0.3em] uppercase mb-6"
            >
              Personal Injury Specialists
            </motion.p>

            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <div className="overflow-hidden">
                <AnimatedText text="Fighting for" className="text-white/90" delay={0.4} />
              </div>
              <div className="overflow-hidden">
                <AnimatedText text="your justice" className="text-white/60" delay={0.7} />
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-10"
            >
              No win, no fee. Maximum compensation guaranteed.
            </motion.p>

            {/* Single CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-dark-950 font-medium rounded-full hover:bg-white/90 transition-all duration-300 group"
              >
                <span>Start Your Claim</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 3D Stats cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20"
            style={{ perspective: 1000 }}
          >
            {stats.map((stat, index) => (
              <Card3D key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
