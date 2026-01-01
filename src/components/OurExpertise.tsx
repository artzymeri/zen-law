'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const expertiseAreas = [
  {
    title: 'Road Traffic Accidents',
    subtitle: 'Expert representation for all collision types',
    image: '/our-expertise/road-traffic-accidents.jpg',
  },
  {
    title: 'Accidents at Work',
    subtitle: 'Workplace injury and employer negligence',
    image: '/our-expertise/accidents-at-work.jpg',
  },
  {
    title: 'Slips, Trips & Falls',
    subtitle: 'Public liability and premises claims',
    image: '/our-expertise/slips-trips-and-falls.jpg',
  },
  {
    title: 'Industrial Diseases',
    subtitle: 'Occupational illness compensation',
    image: '/our-expertise/industrial-desieses.jpg',
  },
  {
    title: 'Medical Negligence',
    subtitle: 'Healthcare malpractice claims',
    image: '/our-expertise/medical-negligence.jpg',
  },
  {
    title: 'Criminal Injuries',
    subtitle: 'CICA claims for crime victims',
    image: '/our-expertise/criminal-injuries.jpg',
  },
  {
    title: 'Housing Disrepair',
    subtitle: 'Claims against negligent landlords',
    image: '/our-expertise/housing-disrepair.jpg',
  },
];

const DESKTOP_CARD_WIDTH = 300;
const DESKTOP_CARD_HEIGHT = 420;
const MOBILE_CARD_WIDTH = 200;
const MOBILE_CARD_HEIGHT = 280;
const GAP = 20;
const ITEMS_COUNT = expertiseAreas.length;

// Triple the items for infinite scroll effect
const infiniteItems = [...expertiseAreas, ...expertiseAreas, ...expertiseAreas];

export default function OurExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [centerIndex, setCenterIndex] = useState(ITEMS_COUNT + 3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isResettingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive card dimensions
  const CARD_WIDTH = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
  const CARD_HEIGHT = isMobile ? MOBILE_CARD_HEIGHT : DESKTOP_CARD_HEIGHT;

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate scroll position to determine center card + infinite scroll reset
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isResettingRef.current) return;
      const scrollContainer = scrollRef.current;
      const cardTotalWidth = CARD_WIDTH + GAP;
      const scrollCenter = scrollContainer.scrollLeft + scrollContainer.clientWidth / 2;
      const firstCardCenter = scrollContainer.clientWidth / 2;
      const newCenterIndex = Math.round((scrollCenter - firstCardCenter) / cardTotalWidth);
      setCenterIndex(Math.max(0, Math.min(infiniteItems.length - 1, newCenterIndex)));

      // Infinite scroll: reset to middle set when reaching edges
      const oneSetWidth = ITEMS_COUNT * cardTotalWidth;
      const middleStart = oneSetWidth;
      const middleEnd = oneSetWidth * 2;

      if (scrollContainer.scrollLeft < middleStart - cardTotalWidth) {
        isResettingRef.current = true;
        scrollContainer.scrollLeft += oneSetWidth;
        setCenterIndex(prev => prev + ITEMS_COUNT);
        requestAnimationFrame(() => { isResettingRef.current = false; });
      } else if (scrollContainer.scrollLeft > middleEnd) {
        isResettingRef.current = true;
        scrollContainer.scrollLeft -= oneSetWidth;
        setCenterIndex(prev => prev - ITEMS_COUNT);
        requestAnimationFrame(() => { isResettingRef.current = false; });
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial scroll to center of middle set
      setTimeout(() => {
        const cardTotalWidth = CARD_WIDTH + GAP;
        scrollContainer.scrollLeft = cardTotalWidth * (ITEMS_COUNT + 3);
      }, 100);
    }

    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, [CARD_WIDTH]);

  // Mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };



  return (
    <section 
      id="expertise" 
      className="relative py-32o"
      ref={containerRef}
    >
      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Personal Injury <span className="gold-text">Specialists</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We handle all types of personal injury claims with expertise, dedication, and a commitment to securing maximum compensation.
          </p>
        </motion.div>

        {/* Horizontal scrolling cards container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing py-10"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: `calc(50vw - ${CARD_WIDTH / 2}px)`,
              paddingRight: `calc(50vw - ${CARD_WIDTH / 2}px)`,
              gap: `${GAP}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {infiniteItems.map((item, index) => {
              const offset = index - centerIndex;
              const isCenter = Math.abs(offset) < 0.5;
              const rotateY = offset * -12;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex-shrink-0 relative"
                  style={{ 
                    scrollSnapAlign: 'center',
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    perspective: '1200px',
                    zIndex: isCenter ? 100 : 50 - Math.abs(offset),
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                    }}
                    animate={{
                      rotateY,
                      scale: isCenter ? 1.05 : 0.88,
                      opacity: isCenter ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.2),
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="300px"
                      priority={index < 5}
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                    {/* Card border and shadow - simplified on mobile */}
                    <div 
                      className="absolute inset-0 rounded-2xl transition-all duration-500"
                      style={{
                        border: isCenter ? '1px solid rgba(201, 162, 39, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: isMobile 
                          ? 'none'
                          : isCenter 
                            ? '0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(201, 162, 39, 0.15)' 
                            : '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
                      }}
                    />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 
                        className="text-white text-xl font-semibold mb-2 leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Active card glow - desktop only */}
                    {isCenter && !isMobile && (
                      <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.08) 0%, transparent 50%)',
                        }}
                      />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
