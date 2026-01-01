'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { searchSite, SearchPage } from '@/lib/search';

const personalInjuryItems = [
  { name: 'Road Traffic Accidents', href: '/road-traffic-accidents' },
  { name: 'Accidents at Work', href: '/accidents-at-work' },
  { name: 'Slips, Trips and Falls', href: '/slips-trips-falls' },
  { 
    name: 'Industrial Diseases', 
    href: '/industrial-diseases',
    subItems: [
      { 
        name: 'Asbestos Claims', 
        href: '/industrial-diseases/asbestos',
        subItems: [
          { name: 'Mesothelioma', href: '/industrial-diseases/asbestos/mesothelioma' },
          { name: 'Asbestosis', href: '/industrial-diseases/asbestos/asbestosis' },
          { name: 'Pleural Thickening', href: '/industrial-diseases/asbestos/pleural-thickening' },
          { name: 'Asbestos Related Lung Cancer', href: '/industrial-diseases/asbestos/lung-cancer' },
        ]
      },
      { name: 'Occupational Asthma', href: '/industrial-diseases/occupational-asthma' },
      { name: 'Pneumoconiosis and Silicosis', href: '/industrial-diseases/pneumoconiosis' },
      { name: 'Dermatitis', href: '/industrial-diseases/dermatitis' },
      { name: 'Vibration White Finger', href: '/industrial-diseases/vibration-white-finger' },
      { name: 'Repetitive Strain Injury', href: '/industrial-diseases/rsi' },
      { name: 'Carpal Tunnel Syndrome', href: '/industrial-diseases/carpal-tunnel' },
      { name: 'Occupational Deafness', href: '/industrial-diseases/deafness' },
      { name: 'Tinnitus', href: '/industrial-diseases/tinnitus' },
    ]
  },
  { name: 'Medical Negligence', href: '/medical-negligence' },
  { name: 'Criminal Injuries', href: '/criminal-injuries' },
  { name: 'Other Types of Claim', href: '/other-claims' },
];

const makingAClaimItems = [
  { name: 'RTA Guide', href: '/making-a-claim/rta-guide' },
  { name: 'Step By Step', href: '/making-a-claim/step-by-step' },
  { name: 'Claim Handling', href: '/making-a-claim/claim-handling' },
  { name: 'How Long Will My Claim Take?', href: '/making-a-claim/how-long' },
  { name: 'No Win No Fee?', href: '/making-a-claim/no-win-no-fee' },
  { name: 'Compensation?', href: '/making-a-claim/compensation' },
  { name: 'Paying For Your Claim', href: '/making-a-claim/paying' },
];

const aboutItems = [
  { name: 'Our People', href: '/about/our-people' },
  { name: 'Testimonials', href: '/about/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Personal Injury', href: '/personal-injury', hasDropdown: true },
  { name: 'Housing Disrepair', href: '/housing-disrepair' },
  { name: 'Making A Claim', href: '/making-a-claim', hasDropdown: true },
  { name: 'Compensation Calculator', href: '/compensation-calculator' },
  { name: 'About', href: '/about', hasDropdown: true },
  { name: 'News', href: '/news' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPersonalInjuryMenu, setShowPersonalInjuryMenu] = useState(false);
  const [showIndustrialDiseasesMenu, setShowIndustrialDiseasesMenu] = useState(false);
  const [showAsbestosMenu, setShowAsbestosMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMakingAClaimMenu, setShowMakingAClaimMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  
  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchPage[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Split nav items: first 6 visible, rest in dropdown
  const visibleItems = navItems.slice(0, 6);
  const moreItems = navItems.slice(6);

  const toggleMobileExpand = (name: string) => {
    setMobileExpandedItems(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  // Handle search
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = searchSite(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when search modal is open
  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen, isMobileMenuOpen]);

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
              <Image
                src="/zen-law-icon.png"
                alt="Zen Law Solicitors"
                width={174}
                height={57}
                className="h-8 md:h-10 w-auto"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {visibleItems.map((item, index) => (
                item.name === 'Personal Injury' ? (
                  /* Personal Injury dropdown */
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowPersonalInjuryMenu(true)}
                    onMouseLeave={() => {
                      setShowPersonalInjuryMenu(false);
                      setShowIndustrialDiseasesMenu(false);
                    }}
                  >
                    <motion.button
                      className="nav-link text-xs px-3 py-2 flex items-center gap-1 whitespace-nowrap"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={12} className={`transition-transform ${showPersonalInjuryMenu ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {showPersonalInjuryMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 py-2 min-w-[220px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                        >
                          {personalInjuryItems.map((subItem) => (
                            subItem.subItems ? (
                              /* Industrial Diseases with nested submenu */
                              <div 
                                key={subItem.name}
                                className="relative"
                                onMouseEnter={() => setShowIndustrialDiseasesMenu(true)}
                                onMouseLeave={() => {
                                  setShowIndustrialDiseasesMenu(false);
                                  setShowAsbestosMenu(false);
                                }}
                              >
                                <div className="w-full flex items-center justify-between px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors">
                                  <a href={subItem.href} className="flex-1">{subItem.name}</a>
                                  <ChevronRight size={12} />
                                </div>
                                
                                <AnimatePresence>
                                  {showIndustrialDiseasesMenu && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 10 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute left-full top-0 ml-1 py-2 min-w-[240px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                                    >
                                      {subItem.subItems.map((nestedItem) => (
                                        nestedItem.subItems ? (
                                          /* Asbestos Claims with its own submenu */
                                          <div 
                                            key={nestedItem.name}
                                            className="relative"
                                            onMouseEnter={() => setShowAsbestosMenu(true)}
                                            onMouseLeave={() => setShowAsbestosMenu(false)}
                                          >
                                            <div className="w-full flex items-center justify-between px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors">
                                              <a href={nestedItem.href} className="flex-1">{nestedItem.name}</a>
                                              <ChevronRight size={12} />
                                            </div>
                                            
                                            <AnimatePresence>
                                              {showAsbestosMenu && (
                                                <motion.div
                                                  initial={{ opacity: 0, x: 10 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  exit={{ opacity: 0, x: 10 }}
                                                  transition={{ duration: 0.2 }}
                                                  className="absolute left-full top-0 ml-1 py-2 min-w-[260px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                                                >
                                                  {nestedItem.subItems.map((asbestosItem) => (
                                                    <a
                                                      key={asbestosItem.name}
                                                      href={asbestosItem.href}
                                                      className="block px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors"
                                                    >
                                                      {asbestosItem.name}
                                                    </a>
                                                  ))}
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                          </div>
                                        ) : (
                                          <a
                                            key={nestedItem.name}
                                            href={nestedItem.href}
                                            className="block px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors"
                                          >
                                            {nestedItem.name}
                                          </a>
                                        )
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors"
                              >
                                {subItem.name}
                              </a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.name === 'Making A Claim' ? (
                  /* Making A Claim dropdown */
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowMakingAClaimMenu(true)}
                    onMouseLeave={() => setShowMakingAClaimMenu(false)}
                  >
                    <motion.button
                      className="nav-link text-xs px-3 py-2 flex items-center gap-1 whitespace-nowrap"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={12} className={`transition-transform ${showMakingAClaimMenu ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {showMakingAClaimMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 py-2 min-w-[240px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                        >
                          {makingAClaimItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.name === 'About' ? (
                  /* About dropdown */
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowAboutMenu(true)}
                    onMouseLeave={() => setShowAboutMenu(false)}
                  >
                    <motion.button
                      className="nav-link text-xs px-3 py-2 flex items-center gap-1 whitespace-nowrap"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={12} className={`transition-transform ${showAboutMenu ? 'rotate-180' : ''}`} />
                    </motion.button>
                    
                    <AnimatePresence>
                      {showAboutMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 py-2 min-w-[180px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl"
                        >
                          {aboutItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-xs text-white/70 hover:text-gold-500 hover:bg-white/5 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
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

            {/* Search Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/50 transition-all text-white/70 hover:text-gold-500"
              aria-label="Search"
            >
              <Search size={18} />
            </motion.button>

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

            {/* Mobile Search & Menu buttons */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-gold-500 transition-colors"
                aria-label="Search"
              >
                <Search size={22} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-gold-500 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl xl:hidden overflow-y-auto"
          >
            <nav className="container mx-auto px-6 py-24 min-h-full">
              {navItems.map((item, index) => (
                item.name === 'Personal Injury' ? (
                  <div key={item.name} className="border-b border-white/5">
                    <button
                      onClick={() => toggleMobileExpand('Personal Injury')}
                      className="w-full flex items-center justify-between py-3 text-base text-white/80 hover:text-gold-500 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${mobileExpandedItems.includes('Personal Injury') ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileExpandedItems.includes('Personal Injury') && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {personalInjuryItems.map((subItem) => (
                            subItem.subItems ? (
                              <div key={subItem.name}>
                                <div className="w-full flex items-center justify-between py-2 pl-4 text-sm text-white/60 hover:text-gold-500 transition-colors">
                                  <a 
                                    href={subItem.href} 
                                    className="flex-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </a>
                                  <button
                                    onClick={() => toggleMobileExpand('Industrial Diseases')}
                                    className="p-1 hover:text-gold-500"
                                  >
                                    <ChevronDown size={14} className={`transition-transform ${mobileExpandedItems.includes('Industrial Diseases') ? 'rotate-180' : ''}`} />
                                  </button>
                                </div>
                                
                                <AnimatePresence>
                                  {mobileExpandedItems.includes('Industrial Diseases') && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden"
                                    >
                                      {subItem.subItems.map((nestedItem) => (
                                        nestedItem.subItems ? (
                                          /* Asbestos Claims with third level */
                                          <div key={nestedItem.name}>
                                            <div className="w-full flex items-center justify-between py-2 pl-8 text-sm text-white/50 hover:text-gold-500 transition-colors">
                                              <a 
                                                href={nestedItem.href} 
                                                className="flex-1"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                              >
                                                {nestedItem.name}
                                              </a>
                                              <button
                                                onClick={() => toggleMobileExpand('Asbestos Claims')}
                                                className="p-1 hover:text-gold-500"
                                              >
                                                <ChevronDown size={14} className={`transition-transform ${mobileExpandedItems.includes('Asbestos Claims') ? 'rotate-180' : ''}`} />
                                              </button>
                                            </div>
                                            
                                            <AnimatePresence>
                                              {mobileExpandedItems.includes('Asbestos Claims') && (
                                                <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  className="overflow-hidden"
                                                >
                                                  {nestedItem.subItems.map((asbestosItem) => (
                                                    <a
                                                      key={asbestosItem.name}
                                                      href={asbestosItem.href}
                                                      className="block py-2 pl-12 text-sm text-white/40 hover:text-gold-500 transition-colors"
                                                      onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                      {asbestosItem.name}
                                                    </a>
                                                  ))}
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                          </div>
                                        ) : (
                                          <a
                                            key={nestedItem.name}
                                            href={nestedItem.href}
                                            className="block py-2 pl-8 text-sm text-white/50 hover:text-gold-500 transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                            {nestedItem.name}
                                          </a>
                                        )
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 pl-4 text-sm text-white/60 hover:text-gold-500 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.name === 'Making A Claim' ? (
                  <div key={item.name} className="border-b border-white/5">
                    <button
                      onClick={() => toggleMobileExpand('Making A Claim')}
                      className="w-full flex items-center justify-between py-3 text-base text-white/80 hover:text-gold-500 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${mobileExpandedItems.includes('Making A Claim') ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileExpandedItems.includes('Making A Claim') && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {makingAClaimItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 pl-4 text-sm text-white/60 hover:text-gold-500 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.name === 'About' ? (
                  <div key={item.name} className="border-b border-white/5">
                    <button
                      onClick={() => toggleMobileExpand('About')}
                      className="w-full flex items-center justify-between py-3 text-base text-white/80 hover:text-gold-500 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${mobileExpandedItems.includes('About') ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileExpandedItems.includes('About') && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {aboutItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 pl-4 text-sm text-white/60 hover:text-gold-500 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
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
                )
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

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            
            {/* Search Panel */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] pt-20 pb-8 px-4 overflow-y-auto"
            >
              <div className="container mx-auto max-w-2xl">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pages..."
                    className="w-full pl-12 pr-12 py-4 bg-dark-900 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-gold-500 text-lg"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-dark-900 border border-white/10 rounded-xl overflow-hidden"
                  >
                    {searchResults.map((result, index) => (
                      <Link
                        key={result.href}
                        href={result.href}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="flex items-center justify-between px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-b-0 transition-colors group"
                      >
                        <div>
                          <p className="text-white group-hover:text-gold-500 transition-colors font-medium">
                            {result.title}
                          </p>
                          <p className="text-white/40 text-sm">{result.category}</p>
                        </div>
                        <ChevronRight className="text-white/30 group-hover:text-gold-500 transition-colors" size={18} />
                      </Link>
                    ))}
                  </motion.div>
                )}

                {/* No Results */}
                {searchQuery.length >= 2 && searchResults.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-6 bg-dark-900 border border-white/10 rounded-xl text-center"
                  >
                    <p className="text-white/60">No pages found for "{searchQuery}"</p>
                    <p className="text-white/40 text-sm mt-1">Try different keywords</p>
                  </motion.div>
                )}

                {/* Search Hint */}
                {searchQuery.length < 2 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-white/40 text-sm"
                  >
                    Type at least 2 characters to search
                  </motion.p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
