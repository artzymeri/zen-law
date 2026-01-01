'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
  { 
    name: 'X', 
    href: 'https://x.com/zensolicitors',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/ZenLawSolicitors',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/zen-law-solicitors',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  { 
    name: 'YouTube', 
    href: 'https://www.youtube.com/channel/UCJmdrQMtmCjhZI8v5FCr2og',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
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
              <Image
                src="/zen-law-icon.png"
                alt="Zen Law Solicitors"
                width={174}
                height={57}
                className="h-12 w-auto"
                unoptimized
              />
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
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold-500 hover:border-gold-500/50 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
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
