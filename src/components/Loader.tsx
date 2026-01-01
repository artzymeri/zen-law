'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2800;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onLoadingComplete, 1000);
        }, 400);
      }
      setProgress(Math.min(currentProgress, 100));
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0a0a0f' }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(30, 30, 40, 0.8) 0%, rgba(10, 10, 15, 1) 70%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* 3D Floating planes/waves */}
          <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0"
                style={{
                  height: '200px',
                  top: `${20 + i * 15}%`,
                  background: `linear-gradient(90deg, transparent, rgba(${60 + i * 10}, ${60 + i * 10}, ${70 + i * 10}, ${0.03 + i * 0.01}), transparent)`,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ 
                  rotateX: 75,
                  y: 100,
                  opacity: 0,
                }}
                animate={{ 
                  rotateX: 75,
                  y: [100, -50],
                  opacity: [0, 0.5, 0],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  backgroundColor: `rgba(${150 + Math.random() * 50}, ${150 + Math.random() * 50}, ${160 + Math.random() * 50}, ${0.2 + Math.random() * 0.3})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -200 - Math.random() * 200],
                  x: [0, (Math.random() - 0.5) * 100],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          {/* 3D rotating ring */}
          <motion.div
            className="absolute"
            style={{
              width: '300px',
              height: '300px',
              perspective: '800px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="w-full h-full rounded-full border border-white/5"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ 
                rotateX: [60, 60],
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border border-white/10"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ 
                rotateX: [60, 60],
                rotateZ: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border border-white/5"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ 
                rotateX: [60, 60],
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Logo and brand */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10"
          >
            <Image
              src="/zen-law-icon.png"
              alt="Zen Law Solicitors"
              width={348}
              height={115}
              className="h-16 md:h-20 w-auto"
              priority
              unoptimized
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="h-[1px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <motion.p
                className="text-white/20 text-[10px] tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Loading
              </motion.p>
              <motion.p
                className="text-white/40 text-[10px] tracking-wider font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </div>
          </motion.div>

          {/* Corners decoration */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
