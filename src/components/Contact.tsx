'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, CircleDot } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Large background text */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 pointer-events-none overflow-hidden">
        <h2 
          className="text-[12vw] font-bold text-white/[0.03] tracking-wider select-none"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          CONTACT
        </h2>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <CircleDot className="w-4 h-4 text-white/50" />
              <span className="text-white/70 text-sm">Contact</span>
            </div>

            {/* Heading */}
            <h2 
              className="text-4xl md:text-5xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get in touch
            </h2>
            <p className="text-white/50 mb-12 max-w-md">
              Have questions or ready to start your claim? We&apos;re here to help you get the compensation you deserve.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {/* Email */}
              <a 
                href="mailto:info@zenlaw.co.uk"
                className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email us</p>
                    <p className="text-white/50 text-sm">info@zenlaw.co.uk</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:01onal618261126"
                className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call us</p>
                    <p className="text-white/50 text-sm">0161 826 1126</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Location */}
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Our location</p>
                    <p className="text-white/50 text-sm">Manchester, UK</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={8}
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/40 focus:border-white/30 focus:outline-none transition-colors resize-none"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-white text-dark-950 font-semibold py-4 rounded-xl hover:bg-white/90 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
