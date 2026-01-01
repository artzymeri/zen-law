'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle, Car, Building2, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    items: [
      {
        question: 'How do I know I can Claim?',
        answer: `There are strict time limits in personal injury claims. Under the law in England and Wales, in most cases you have 3 years from the date of accident to start court proceedings. This means 3 years from the date of the accident, or if you have an industrial illness, 3 years from when you became aware of your illness and its connection to employment, or for medical negligence, 3 years from when you became aware you suffered injury from treatment.

These time limits do not apply to children (where the time period runs from the child's 18th birthday) and people with mental incapacity. Different time limits apply if your accident occurred outside England and Wales, during international travel, or if a defective product is involved.

You should always make detailed notes of what happened including dates, times and location. Take photographs where possible and note any witnesses with their contact details. If you're approaching the 3 year time limit, contact us immediately for advice.`
      },
      {
        question: 'Will it cost me anything to claim?',
        answer: `We operate on a No Win, No Fee basis (Conditional Fee Arrangement). If we take your case on, we expect you'll win and you'll pay for our services – in most cases our fees are deducted from the compensation you receive. If we don't win your case, you don't pay any legal fees, though you may have to pay disbursements (external costs like medical assessments).

There are strict rules protecting you, and your solicitor must give you a realistic, honest assessment of your chances of success. You are required to cooperate reasonably and comply with our advice to qualify for the service.

If you have legal expenses cover under your home or car insurance, your legal fees may be covered – we'll investigate this for you. Many policies include 'before the event legal expenses' which should cover some or all costs of your claim.`
      },
      {
        question: 'What if the accident was my fault or partly my fault?',
        answer: `If you have been injured in an accident entirely your fault, you cannot claim compensation. However, if you're only partly to blame, you can still claim against the other party who is also at fault.

For example, if you pull out in front of an oncoming vehicle, you may seem entirely to blame. But if further enquiries reveal the other driver wasn't paying proper attention and could have avoided the accident, you may still claim compensation. However, it would be reduced to reflect your share of blame – this is called Contributory Negligence.`
      },
      {
        question: 'Can I Claim For Loss Of Earnings?',
        answer: `Yes, if your accident has resulted in time off work. You'll need to produce copies of payslips for at least 6 months prior to the accident. If you don't have copies, we can request them from your employer. For overtime claims, you'll need to show the overtime would have been available and that you regularly worked overtime before the accident.

The court usually assesses your net average monthly wage for at least 3 months prior to the accident to calculate what you would have earned.

For self-employed or business owners, it's more complicated. Notify your accountant immediately and keep records of your working diary, invoices and contracts you couldn't complete. Your accountant should provide accounts for at least 3 years prior to the accident. Your absence must be supported by expert medical evidence.`
      },
      {
        question: 'Can I claim for care being provided to me by my family?',
        answer: `Yes, as part of your claim you can claim for any care and assistance provided by your family, including both past and future care. A discount is applied for natural love and affection.

You can claim for nursing care, gardening, shopping, vacuuming, ironing, washing, bathing, dressing, cooking, cleaning and any other activity you would have ordinarily done if not for the accident.`
      },
      {
        question: 'How Much Compensation Will I Be Awarded?',
        answer: `The amount depends on the seriousness of your injuries, how it has affected your day-to-day life, and how much money you have lost or may lose. This might include Loss of Earnings if you've been off work.

We always cover two main aspects: (1) damages for your injury, and (2) special damages for financial losses. We work with specialist medical consultants to ensure you're not exposed to future losses and receive maximum compensation.

Keep a record of all expenses and receipts as the claim progresses. Record medical appointments and travel costs (public transport tickets or car mileage and parking fees). Our Compensation Calculator can provide an estimate for different injury types.`
      },
      {
        question: 'How long will it take to make a claim?',
        answer: `Serious injury cases can take years to settle due to long recovery periods. However, you don't have to struggle financially – we can ask the other side for an interim payment to cover treatment, rehabilitation and bills. We'll guide and advise you throughout the entire process.`
      },
      {
        question: 'Can I Make A Claim For Injuries Sustained As A Child?',
        answer: `If a child is injured due to someone else's negligence, parents or guardians may pursue a claim on behalf of their child, or allow the child to decide upon reaching adulthood. Any compensation awarded is placed into the court fund and invested until the child turns 18.

Earlier access is possible via a 'parental indemnity' where the Court doesn't formally approve the settlement and the parent promises to reimburse the insurer if the child claims further compensation later.

Generally, children have until their 21st birthday to pursue a claim (3 years from their 18th birthday). If your parents didn't claim on your behalf, you can still claim until you turn 21.`
      },
      {
        question: 'Will I Need To Go To Court?',
        answer: `The vast majority of cases settle through negotiations. Only about 5-10% go to a final Court hearing, and some settle 'at the door' just before Trial begins.

If you do attend Court, we have specialist solicitors to guide and support you throughout. You will be represented by a specially-trained Barrister at the hearing.`
      },
      {
        question: 'Will I Lose My Job If I Sue My Employer?',
        answer: `Your employer cannot sack you for making or having made a claim against them. All employers carry Employer's Liability insurance – it's the insurance company that deals with the claim and pays compensation.

If you think you might be treated differently or sacked, we can help you speak to an Employment Lawyer to protect your rights.`
      },
      {
        question: 'Who will be handling my case?',
        answer: `Serious Injury claims can be complex, so your case is likely to be handled by one of our compassionate, highly experienced injury lawyers. Your appointed lawyer will ensure your needs and your family's needs are fully met, with someone always available who understands you and your injuries.

For extra peace of mind, our files are audited by different team members to ensure correct advice and that your claim receives proper care and attention.`
      },
      {
        question: 'Can You Take Over From My Current Lawyer?',
        answer: `If you're concerned about how your claim is being handled, you can raise concerns with your lawyer. If unsatisfied, consider obtaining another lawyer's opinion.

At Zen Law Solicitors, we welcome enquiries from clients all over the UK. Contact us for free independent advice so you can make an informed choice about moving your case – even if we recommend a different firm.

If you decide to move to us, we'll handle all necessary arrangements. You don't need to worry about your current lawyer's costs – we'll preserve a lien over their costs, so they'll receive proportionate costs upon successful claim.`
      },
      {
        question: 'Can you provide me with rehabilitation and treatment?',
        answer: `As personal injury experts, we have access to experts and organisations across the country to ensure you get the best treatment and rehabilitation. Sometimes the Defendant may offer rehabilitation with their providers, which you should consider to help reduce injury severity (mitigating your losses).`
      },
      {
        question: 'How much will I have to pay you if I win my case?',
        answer: `Under your Conditional Fee Agreement, you may pay a Success Fee only upon successful claim. This reflects: (1) if you lose, we earn nothing, (2) our assessment of case risks, (3) any other appropriate matters, (4) we're not paid basic charges until claim end, (5) our arrangements about expenses and disbursements, (6) arrangements if you reject a settlement offer on our advice and recover less at trial.`
      },
      {
        question: 'What is Limitation?',
        answer: `Limitation is the period after which you cannot claim against someone who caused an accident. For Personal Injury claims, it's 3 years from the accident date – you must have started legal proceedings by this point.

If under 18 at the time, you have until 21 to start proceedings. If you suffered lack of capacity at the time, you may still claim after 3 years.

For industrial disease claims, the 3-year period starts from your "date of knowledge of injury" – when you knew (or should reasonably know) you suffered a significant injury attributable to the defendant's actions.`
      },
      {
        question: 'What if I no longer want to continue with the claim?',
        answer: `You can discontinue your claim. However, depending on progress, we may have incurred costs on your behalf which you would need to pay.

If court proceedings are issued and you discontinue, you won't recover original compensation and could be responsible for both defendant's costs and ours. Be absolutely certain you're willing to continue through any trial before instructing a solicitor.`
      },
    ]
  },
  {
    title: 'Road Traffic Accidents',
    icon: Car,
    items: [
      {
        question: 'I have been injured in a crash – what should I do next?',
        answer: `If you've been in a crash, it can be traumatic. The main priority is making sure you're okay – get checked by your GP or, in serious accidents, at hospital. We recommend referring to our Road Traffic Accident Guide which sets out what to do following an incident.`
      },
      {
        question: "I wasn't wearing my seatbelt – can I still claim?",
        answer: `If you weren't responsible for the accident, you're still entitled to claim compensation. However, the amount may be reduced if wearing a seatbelt would have resulted in less severe injuries. This is usually covered in medical evidence, and it's for the third party insurer to allege contributory negligence.`
      },
      {
        question: 'I was a passenger in a car where I knew the driver was intoxicated – am I able to claim?',
        answer: `Yes, you can still claim. However, your compensation may be reduced if the third party insurer or court considers you knowingly got into a car where the driver was drunk or otherwise impaired.`
      },
      {
        question: "I was a passenger in a family member or friend's car and they caused the accident – can I claim?",
        answer: `Yes, you can claim for injuries and losses. Your compensation won't come from them personally – it's paid by their insurance company. The accident usually counts as one incident regardless of total claims, so if you're injured, seriously consider claiming.

You may wish to talk to the driver first about any objections – remind them it's not personal, you're only seeking recompense for pain and expenses from the accident.`
      },
      {
        question: 'What is whiplash?',
        answer: `Whiplash is an injury to neck or upper back ligaments and tendons caused when the head suddenly moves forwards, backwards or sideways. It's common in car accidents with sudden, unexpected impact. Symptoms include neck pain, stiffness, reduced movement, and headaches. While usually not serious, it can be very painful and, in severe cases, last 12 months or more.`
      },
      {
        question: 'My accident happened because the road surface was unsafe – can I still claim?',
        answer: `Yes. Oil or debris on road surfaces can cause serious injuries, particularly to bikers. A claim can be made against those responsible for the substance, or under the Untraced Drivers' Agreement if the perpetrator cannot be found.`
      },
      {
        question: 'What if the other driver was uninsured or cannot be found?',
        answer: `We specialise in claims against uninsured or untraced drivers. If the third party is uninsured, the Motor Insurers' Bureau (MIB) has a duty to pay compensation under the Uninsured Drivers' Agreement. Even if the driver cannot be traced, we can pursue your claim through the Untraced Drivers' Agreement.`
      },
      {
        question: 'Will I have to go to a medical appointment for my injuries?',
        answer: `Usually, your injuries must be assessed by an independent medical expert to value your claim. We send the expert's report to the third party insurer to confirm injuries are genuine and caused by the accident.

Sometimes insurers make pre-medical settlement offers. These are early, economic offers without a medical report, usually at lower levels than with a full report outlining how injuries affected you.`
      },
      {
        question: 'My insurance company has recommended a solicitor but can I choose my own?',
        answer: `You're free to choose any solicitor – you're not bound by your insurer's recommendation. If your insurer already instructed a solicitor you don't want, don't sign any paperwork as you may be bound by those terms.

We recommend specialist personal injury firms like Zen Law Solicitors, but we're happy to recommend local solicitors if you prefer.`
      },
      {
        question: 'I was walking at night without reflective clothing and was hit by a car – can I still claim?',
        answer: `You can still claim, but the court or insurer may reduce compensation because you didn't take sufficient care for your own safety. Contact us for advice on your prospects of success.`
      },
      {
        question: "I didn't look before crossing the road and was hit by a car – can I still claim?",
        answer: `If the driver was driving appropriately for weather, road conditions, time, location, speed limit and other factors, they may not be found negligent.

However, if the driver was travelling too fast, distracted by a device, or intoxicated, responsibility may be shared and you could claim. You'd receive damages minus a percentage reflecting your responsibility.`
      },
    ]
  },
  {
    title: 'Accidents in a Public Place',
    icon: Building2,
    items: [
      {
        question: "What should I do if I've suffered an accident in a public place?",
        answer: `Report the accident to the premises owner if possible, take photographs of the accident location and your injuries, and get witness details. Write down exactly what happened while it's fresh in your mind.

For defective pavements, photograph with a ruler showing defect depth/height, and take photos of the street showing the exact location for proper investigation.

For serious accidents, keep a careful diary of events including any changes to the accident location and treatment you underwent until settlement.`
      },
      {
        question: 'How do I know that my claim is likely to succeed?',
        answer: `In England and Wales, employers, business owners and local authorities are legally responsible for visitor welfare and safety on their premises. To make a successful claim, you need to prove another person was responsible for your injury (the owner or occupier).

Keep receipts for expenses like prescription costs and travelling expenses as evidence.`
      },
      {
        question: 'How long will it take to make a claim?',
        answer: `This varies depending on whether the defendant accepts responsibility or contests it, and how swiftly you recover. For serious injuries, it may be too early to determine medical prognosis.

We promise to progress your case as quickly as possible, though unavoidable delays can occur. We'll always try to settle efficiently and keep you informed at every step.`
      },
      {
        question: 'Why do I need a medical assessment of my injuries?',
        answer: `Your injuries must be assessed by an independent medical expert to value your claim. We send the report to the third party insurer to confirm injuries are genuine and caused by the accident.

The appointment is usually short without intrusive examination. You'll describe your accident, injuries suffered, and ongoing symptoms. This enables the other side to make an offer and accurately value your case.`
      },
      {
        question: 'Is the business or owner covered by insurance?',
        answer: `Most businesses have public liability cover through business insurance to protect against claims by members of the public. This ensures claims are dealt with by experienced insurance claims handlers.

If the business isn't insured, it's unlikely your claim will cause them to close down. Most businesses now have the right cover.`
      },
      {
        question: 'What if the accident was partly my fault – can I still claim?',
        answer: `Yes, even where some responsibility rests with you. If you tripped over a defective slab or pothole because you didn't see it or weren't paying attention, you may be partially responsible.

However, the obstruction shouldn't have been left without warning or should have been cordoned off. A percentage deduction may be taken, but you'll still get most of your compensation entitlement.`
      },
      {
        question: 'What is Public Liability?',
        answer: `Public Liability is the duty of care that owners or responsible parties have to ensure public places are adequately maintained and regularly inspected for good repair. Public places must not present hazards.

Most common claims are for injuries from poorly maintained pavements, roads or parks. Categories include: slips, trips and falls (majority), stress and anxiety from hold-ups or elevator malfunctions, and falling objects.`
      },
      {
        question: "What is Occupier's Liability?",
        answer: `Accidents on property or land owned by others are very common – from supermarket slips to play-centre injuries to falling building site debris to children injured in abandoned warehouses.

'Occupiers' have a legal duty to ensure visitors will be reasonably safe while using premises in expected, permitted ways. If you've suffered injury on someone else's premises, contact our specialists for a free case assessment.`
      },
    ]
  },
  {
    title: 'Accidents at Work',
    icon: Briefcase,
    items: [
      {
        question: "What should I do if I've suffered an accident at work?",
        answer: `Make sure it's reported and entered in the accident book. Take photographs if possible and get witness details. Write down exactly what and where it happened while fresh in your mind.

For serious accidents, keep a careful diary of events as evidence for any employer procedure changes and treatment you underwent until settlement.`
      },
      {
        question: 'How do I know that my claim at work is likely to succeed?',
        answer: `In England and Wales, employers are legally responsible for staff welfare and safety. Businesses must hold insurance and conform to Health & Safety regulations. If your employer failed these duties and it led to your accident, you can claim compensation.

Employer's duties include: providing a safe workplace, adequate training and instruction, protective clothing and equipment, assessing risks of lifting heavy weights, and maintaining equipment safely.

The right to claim covers temporary, casual and permanent employees, full-time or part-time, with or without written contracts. Self-employed injured by another's actions may also claim.`
      },
      {
        question: 'How long will it take to make a workplace claim?',
        answer: `This varies depending on whether your employer accepts responsibility or contests it, and how swiftly you recover. For serious injuries, it may be too early to determine medical prognosis.

We promise to progress quickly, though unavoidable delays occur. We'll always settle efficiently and keep you informed at every step.`
      },
      {
        question: 'Why do I need a medical assessment for my work injury?',
        answer: `Your injuries must be assessed by an independent medical expert to value your claim. We send the report to the third party insurer to confirm injuries are genuine and accident-caused.

The appointment is usually short without intrusive examination. You'll describe your accident, injuries, and ongoing symptoms. This enables offers and accurate valuation.`
      },
      {
        question: 'Is my employer covered by insurance?',
        answer: `Since 1972, all employers are legally required to have employers' liability insurance. Your employer won't find compensation money from their own pocket.

Where a company has dissolved, the insurance company at the time of accident or exposure remains responsible. We have special means of tracing Defendant companies or responsible insurers.`
      },
      {
        question: 'What if my work accident was partly my fault?',
        answer: `You can still claim even with partial responsibility. If you tripped over something left on the floor because you didn't see it or weren't paying attention, you may be partially responsible.

However, the obstruction shouldn't have been left without good reason, cordoning, or warning. A percentage deduction may apply, but you'll still get most of your compensation.`
      },
      {
        question: "What if the accident was my colleague's fault?",
        answer: `In most cases, employers are responsible for employee actions at work (vicarious liability for negligent acts in the course of employment). For an act to be in course of employment, it must be authorised or part of ordinary duties.

Courts distinguish between "detour" (employer liable) vs. "frolic" (employee acting in own right, employer not liable). Generally, employers aren't liable for assault or battery unless force was part of employment (like police officers) or the field likely created friction (like car repossessors).

Contact us to discuss any colleague's actions that caused your injury.`
      },
    ]
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-4 text-left hover:text-gold-500 transition-colors group"
      >
        <span className="text-white group-hover:text-gold-500 pr-4 font-medium">{item.question}</span>
        <ChevronDown 
          className={`flex-shrink-0 text-gold-500 transition-transform mt-1 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-white/60 text-sm leading-relaxed whitespace-pre-line">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSectionComponent({ section, sectionIndex }: { section: FAQSection; sectionIndex: number }) {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const Icon = section.icon;

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
          <Icon className="text-gold-500" size={24} />
        </div>
        <h2 
          className="text-2xl font-light text-white"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {section.title}
        </h2>
      </div>
      
      <div className="bg-white/5 rounded-xl border border-white/10 p-6">
        {section.items.map((item, index) => (
          <FAQAccordion
            key={index}
            item={item}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

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
            Frequently Asked Questions
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
            Find answers to common questions about personal injury claims. If you cannot find what you're looking for, please do not hesitate to contact us.
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, index) => (
              <FAQSectionComponent key={section.title} section={section} sectionIndex={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
