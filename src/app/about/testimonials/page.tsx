'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    name: 'Filiz Mustafa',
    text: 'Thank you Umran for everything and for all your hard work on this case. You are a credit to Zen Law Solicitors.',
  },
  {
    name: 'Peter Woodhouse',
    text: 'I found Zen Law to be courteous and efficient and they dealt with my case very promptly.',
  },
  {
    name: 'Joanna Owen',
    text: "The service which I received from Zen Law was outstanding. They were very sympathetic with an additional situation I was in looking after my mother who had a stroke when my accident claim was halfway through. They gave me more time and help which I am very grateful for.",
  },
  {
    name: 'Somna Khizar',
    text: "I was very pleased with Zen Law's services and Umran Aziz. He is a really nice person and I would like to thank him for his help.",
  },
  {
    name: 'Sarah Mbarire',
    text: "I do thank you guys for your hard work you've put into my case. And also I will recommend your firm to my friends/colleagues about your good service.",
  },
  {
    name: 'Michelle Nkwochachukwu',
    text: 'I will definitely recommend you to somebody else as you took care of every aspect of the case professionally. Thank you.',
  },
  {
    name: 'John Robert Spencer',
    text: 'I find Zen Law Solicitors very good and very professional in their dealings with me and would not hesitate to use them again if the occasion demanded.',
  },
  {
    name: 'Jeffrey Humphries',
    text: "If you give all your clients the same first class service I have received you will be the number one solicitors to contact when needed. A big thank you to all at Zen Law, and a personal thank you to Mr Umran Aziz. You kept me informed of progress on my case at every stage. I'm delighted, thank you.",
  },
  {
    name: 'Nanette Neal',
    text: 'I am very pleased to say, the way in which my case was handled was quick and efficient with no stress or worries on my part. I thank Zen Law Solicitors for their help.',
  },
  {
    name: 'Richard Neal',
    text: 'Brilliant service, quick and easy without problems. I would recommend Zen Law to help with any claim.',
  },
  {
    name: 'Nhamo Kajese',
    text: 'Because I was going through a lot with my injury I asked Zen Law to deal with my daughter for any correspondence, true to their word they did. It was a smooth process. Made me feel like I was the only client special treatment, I will recommend to anyone.',
  },
  {
    name: 'Roy Collins',
    text: 'If I needed a solicitor again I would surely look to use Zen Law again. Very pleased with the total service.',
  },
  {
    name: 'Eric Waring',
    text: 'My case was dealt with swiftly and professionally. I was kept up to date with proceedings at regular intervals by competent staff. I would recommend Zen Law to my friends.',
  },
  {
    name: 'Mr Alan Nicoleson',
    text: 'I thought the service was very good and the lady that first spoke to me was also very good and made it easy for me to understand.',
  },
  {
    name: 'Caroline Harris',
    text: 'Simple, easy and quick – no-hassle cheque received without a fuss. Highly recommended.',
  },
  {
    name: 'Linda Waring',
    text: 'My claim was dealt with very promptly and professionally. I was kept in touch with proceedings very regularly and things were explained to me clearly and precisely.',
  },
  {
    name: 'Monika Levrinc',
    text: "I'm thankful to Zen Law Solicitors, because after my accident I did not know at all that I was eligible for compensation and they helped me a lot in my case.",
  },
  {
    name: 'Kathryn Hazelhurst',
    text: 'Excellent, professional service. Treated with respect and as an individual.',
  },
];

export default function TestimonialsPage() {
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Testimonials
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
            Hear from our clients about their experiences with Zen Law Solicitors
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={contentRef} className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gold-500/30 transition-colors relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 text-gold-500/20" size={40} />

                {/* Text */}
                <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: '98%', label: 'Success Rate' },
                { value: '5,000+', label: 'Claims Handled' },
                { value: '4.9/5', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 text-center">
                  <p 
                    className="text-4xl font-light text-gold-500 mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
          >
            <h3 
              className="text-2xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Start Your Claim?
            </h3>
            <p className="text-white/60 mb-6">
              Join thousands of satisfied clients who have trusted Zen Law with their personal injury claims. Get in touch today for your free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Start My Claim
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
