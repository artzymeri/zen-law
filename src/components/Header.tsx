'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Personal Injury', href: '#services' },
  { name: 'Housing Disrepair', href: '#services' },
  { name: 'Making A Claim', href: '#claim' },
  { name: 'Calculator', href: '#calculator' },
  { name: 'Insurance Archaeology', href: '#insurance' },
  { name: 'FAQ', href: '#faq' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'News', href: '#news' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Split nav items: first 6 visible, rest in dropdown
  const visibleItems = navItems.slice(0, 6);
  const moreItems = navItems.slice(6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Unified glassmorphism header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/30' 
            : 'bg-black/20 backdrop-blur-xl border-b border-white/5'
        }`}
      >
        {/* Main navigation */}
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div>
                <h1 className="text-lg font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="gold-text">ZEN</span>
                  <span className="text-white ml-1">LAW</span>
                </h1>
                <p className="text-[9px] text-gold-500/60 tracking-[0.15em] uppercase -mt-1">Solicitors</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {visibleItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-xs px-3 py-2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* More dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowMoreMenu(true)}
                onMouseLeave={() => setShowMoreMenu(false)}
              >
                <button className="nav-link text-xs px-3 py-2 flex items-center gap-1 whitespace-nowrap">
                  <span>More</span>
                  <ChevronDown size={12} className={`transition-transform ${showMoreMenu ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {showMoreMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 py-2 min-w-[160px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                    >
                      {moreItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden md:block flex-shrink-0"
            >
              <a
                href="#claim"
                className="premium-button text-xs px-5 py-3"
              >
                Start My Claim
              </a>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-white hover:text-gold-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/10 xl:hidden overflow-y-auto max-h-[80vh]"
          >
            <nav className="container mx-auto px-6 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-base text-white/80 hover:text-gold-500 transition-colors border-b border-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#claim"
                className="mt-4 block text-center premium-button text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start My Claim
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
