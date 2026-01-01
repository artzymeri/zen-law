'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Road Traffic Accidents', href: '#services' },
    { name: 'Accidents at Work', href: '#services' },
    { name: 'Slips, Trips & Falls', href: '#services' },
    { name: 'Industrial Diseases', href: '#services' },
    { name: 'Medical Negligence', href: '#services' },
    { name: 'Housing Disrepair', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Case Studies', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Complaints Procedure', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: 'X', href: '#' },
  { name: 'Facebook', icon: 'f', href: '#' },
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'YouTube', icon: 'YT', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div>
                <h1 className="text-xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="gold-text">ZEN</span>
                  <span className="text-white ml-1">LAW</span>
                </h1>
                <p className="text-[10px] text-gold-500/60 tracking-[0.2em] uppercase -mt-1">Solicitors</p>
              </div>
            </Link>
            
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Manchester&apos;s leading personal injury specialists with over 20 years of legal experience. Fighting for justice and securing the compensation you deserve.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span className="text-white/60 text-sm">Virginia House, 5-7 Great Ancoats Street, Manchester, M4 5AD</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500" />
                <a href="tel:01618261126" className="text-gold-500 hover:text-gold-400 transition-colors text-sm">0161 826 1126</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500" />
                <a href="mailto:info@zenlaw.co.uk" className="text-gold-500 hover:text-gold-400 transition-colors text-sm">info@zenlaw.co.uk</a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/50 transition-colors"
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/50 hover:text-gold-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/50 hover:text-gold-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/50 hover:text-gold-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-center text-white/40 text-xs space-y-2">
            <p>
              Zen Law Solicitors, Virginia House, 5-7 Great Ancoats Street, Manchester, M4 5AD. 
              Telephone: 0161 826 1126 | Fax: 0161 826 1125 | Email: info@zenlaw.co.uk
            </p>
            <p>
              A list of Directors is available from the registered office. Registered in England No. 08128913.
            </p>
            <p>
              Zen Law Solicitors is a trading name of Zen Law Limited which is authorised and regulated by the Solicitors Regulation Authority under No. 569891.
            </p>
            <p>Zen Law Limited VAT Number: 143420449</p>
            <p className="pt-4">
              © {currentYear} Zen Law Solicitors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
