'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsArticles = [
  {
    date: '24 Feb',
    title: 'What is a public liability claim and can I make one?',
    summary: 'A public liability claim is applicable in any situation where an accident or injury has occurred in an environment used by the public, be it privately or publicly owned. This could be anything from a pavement, supermarket, car park, pub or leisure facilities. For a successful claim, you need to show that a defect is large enough to cause a hazard and has been there for some time. The most common types are slips, trips and falls.',
  },
  {
    date: '20 Feb',
    title: 'Claiming for an accident at work: A guide',
    summary: 'An accident at work can be anything from slipping on a wet floor to injury by machinery. It broadly covers any injury or disease caused as a result of economic activity, including injury from faulty equipment, disease from job requirements such as working with asbestos, and accidents resulting from employer negligence.',
  },
  {
    date: '17 Feb',
    title: 'Demystifying historical liability insurance',
    summary: 'Liability insurance protects businesses from lawsuits and claims made by employees. All businesses employing one or more people are required to have it under the Employers Liability Act 1969. Before it became mandatory 50 years ago, many industrial workers were exposed to hazards causing long-term damage that only becomes apparent decades later.',
  },
  {
    date: '10 Feb',
    title: 'Compensation Calculator: See How Much You\'re Owed',
    summary: 'Our compensation calculator helps you see how much compensation you could receive based on the body parts affected by your accident. A decent solicitor like Zen Law will let you keep the full compensation amount by recovering costs from the other party.',
  },
  {
    date: '03 Feb',
    title: 'How to make a road traffic accident claim',
    summary: 'Road traffic accidents can have a huge effect on your life. Even minor collisions can cause stress and anxiety about driving. With 76% of all trips made by car, the impact on quality of life can be significant. At Zen Law Solicitors, we specialise in getting people the compensation they deserve.',
  },
  {
    date: '21 Jun',
    title: 'Leak Shows Horrifying Impact of Planned London NHS Cuts',
    summary: 'An internal NHS document leaked to the Guardian revealed plans to impose unprecedented cuts to health spending in London. Doctors in 5 boroughs will have less money for drugs, refer fewer patients to hospital, and those with severe health needs will have support cut to plug a £183.1million gap.',
  },
  {
    date: '05 Jun',
    title: 'Step by Step: The Claims Process at Zen Law',
    summary: 'We\'ve simplified the claims process. Step 1: We collect accident details including time, location, witnesses, photos, injury details, and other party information. Step 2: We submit the claim to the other party\'s insurers. We guide you through every stage.',
  },
  {
    date: '17 May',
    title: 'Breast Surgeon Convicted of "Completely Unnecessary" Operations',
    summary: 'Breast surgeon Ian Paterson was convicted of 17 counts of wounding with intent after conducting unnecessary operations, allegedly to improve his earnings. Victims described him as acting like "God", lying to patients and exaggerating cancer risks to convince them to undergo surgery.',
  },
  {
    date: '05 May',
    title: 'Investigating Avoidable Baby Deaths at NHS Trust',
    summary: 'Health Secretary Jeremy Hunt ordered a review into deaths of babies at Shrewsbury and Telford Hospital NHS Trust. At least 7 avoidable baby deaths occurred between 2016-2017, with failures to correctly monitor foetal heart rates contributing to at least five deaths.',
  },
  {
    date: '26 Apr',
    title: 'Family Become First in UK to Benefit from New Compensation Laws',
    summary: 'A Lancashire family became the first to benefit from new Government compensation law, winning £9.29million for their daughter who developed cerebral palsy following birth complications. The settlement includes a £2.21million lump sum plus annual payments for life.',
  },
  {
    date: '12 Apr',
    title: 'Midwives Failing to Provide the Care that Patients Deserve',
    summary: 'Many mothers-to-be are experiencing stress and anxiety instead of excitement. While birthing options seem available, the reality is different - your preferred midwife may not be available, birthing pools may be in use, and home births depend on midwife availability.',
  },
  {
    date: '24 Mar',
    title: 'Is Your Cavity Wall Insulation Causing You Problems?',
    summary: 'Millions of UK homes have been insulated over the past twenty years. While many received quality service, hundreds of thousands have experienced problems due to cowboy installers. Those negatively affected may be entitled to compensation claims.',
  },
  {
    date: '15 Mar',
    title: 'Council Homes across the Country Deemed \'Unfit\' for Living',
    summary: 'Almost 11,000 council house tenants have made compensation claims for damage, damp and leaks. Over the past five years, local authorities across England have paid out over £35m in compensation and legal fees. The number of disrepair claims is rising.',
  },
  {
    date: '28 Feb',
    title: 'Husband Wins Seven Year Medical Negligence Fight Following Wife\'s Death',
    summary: 'Darren Taylor won a medical negligence claim against Leicester\'s hospitals after his wife Alison died from a blood clot following childbirth. The coroner said her life could have been saved if the hospital had provided a scan.',
  },
  {
    date: '09 Feb',
    title: 'A&E Waiting Times Currently at \'Record Levels\'',
    summary: 'Leaked figures suggest January 2017 saw record numbers of patients spending over four hours in A&E across England - the worst performing month in thirteen years. Record numbers also had to wait over twelve hours for hospital beds.',
  },
  {
    date: '25 Jan',
    title: 'Over £600m Allocated for Medical Negligence Claims in Wales',
    summary: 'Last year £74.6m was paid out for medical negligence and personal injury claims against NHS Wales. A staggering £682million has been set aside for future payments, with amounts rising since 2013.',
  },
  {
    date: '12 Jan',
    title: 'Hospitals Failing to Investigate Unexpected Deaths',
    summary: 'The Care Quality Commission revealed that the NHS is failing to properly investigate unexpected hospital deaths, preventing staff from learning from mistakes. At Southern Healthcare NHS Foundation Trust, only 1% of deaths among patients with learning disabilities were investigated over four years.',
  },
  {
    date: '22 Dec',
    title: 'Standing Up Against Medical Negligence This Christmas',
    summary: 'During the festive period, many people let minor medical negligence go. However, patients should seek compensation not only for themselves but to urge others to do the same. Medical negligence covers various scenarios where incompetent care affects health.',
  },
  {
    date: '15 Dec',
    title: 'Taking Legal Action against NHS Clinical Negligence',
    summary: 'While NHS care is typically good, things can go wrong due to lack of judgment and incompetent care. If injured due to medical negligence, you can take legal action. Next of kin can also claim if someone has died or is unable to take action themselves.',
  },
  {
    date: '21 Nov',
    title: 'Can You Make a Claim for Holiday Sickness?',
    summary: 'If any member of your group becomes ill on an all-inclusive or package holiday due to the package provided by the operator, you may be able to claim compensation. The Food Standards Agency has researched food poisoning from pathogens like Campylobacter and Salmonella.',
  },
  {
    date: '16 Nov',
    title: 'Food Poisoning Figures Published',
    summary: 'The Food Standards Agency published findings on food poisoning in the UK. According to the report, there are over 500,000 cases annually from known pathogens. Many cases go unreported as most are untreated by medical professionals.',
  },
  {
    date: '31 Oct',
    title: 'Holiday Sickness Compensation',
    summary: 'If you become sick on a package or all-inclusive holiday through no fault of your own, you may be able to claim compensation. Types of sickness include food poisoning, Legionnaire\'s Disease, E-coli, Salmonella, and Gastroenteritis. The Package Travel Regulations 1992 protect consumers.',
  },
  {
    date: '24 Oct',
    title: 'Food Poisoning Compensation – Could You Make a Claim?',
    summary: 'If you\'ve been on a package holiday in the last three years and contracted food poisoning, you may be entitled to compensation under the Package Travel, Package Holidays and Package Tours Regulations 1992.',
  },
  {
    date: '29 Sep',
    title: 'Personal Injury Reforms Could Be Imminent',
    summary: 'Following the Legal Aid, Sentencing and Punishment of Offenders Act 2012 (LASPO) and updates to small claims limits, personal injury reforms are expected. Proposed changes include compensating whiplash victims with medical care instead of monetary amounts.',
  },
  {
    date: '20 Sep',
    title: 'Uncertainty Continues for UK Personal Injury Sector',
    summary: 'Following the EU exit, with over two thirds of British law originating from Europe, far-reaching implications to the legal system remain unknown. The personal injury sector is preparing for significant restructuring of policy and procedures.',
  },
  {
    date: '19 Aug',
    title: 'Rise in Claims during Summer Months',
    summary: 'During summer, longer days lead to more adventures and unfortunately more accidents. Common claims include slips, trips and falls in busy public places, and road traffic accidents during holiday traffic.',
  },
  {
    date: '05 Aug',
    title: 'Bus Accident Compensation Claims',
    summary: 'With around 5.16 billion annual bus journeys in the UK, bus accidents do occur. When claiming for a bus accident, you claim against the bus company, not the driver. You don\'t have to be a car driver to make a claim - passengers can too.',
  },
  {
    date: '18 Jul',
    title: 'Workplace Accidents FAQ',
    summary: 'Despite strict health and safety policies, accidents happen. Employers have clear responsibilities for accident reporting and procedures. Any workplace changes affecting safety should be communicated quickly. Your employer must report all accidents and maintain a register.',
  },
  {
    date: '04 Jul',
    title: 'Change is the Only Certainty',
    summary: 'Following the EU exit, over two thirds of UK laws originating from Europe face uncertainty. The personal injury sector has adhered to EU regulations for years, with legislation on workplace accidents, health and safety being key to the claims industry.',
  },
  {
    date: '28 Jun',
    title: 'Specialists in CICA Claims',
    summary: 'Zen Law Solicitors specialises in Criminal Injuries Compensation Authority (CICA) claims on a No Win No Fee basis. CICA compensates innocent victims for injuries, loss of earnings, and medical treatment costs following criminal acts.',
  },
  {
    date: '16 Jun',
    title: 'Employers Duty of Care',
    summary: 'Employers owe employees a duty of care to provide a safe workplace. This includes ensuring machinery is suitable and regularly inspected, not asking employees to carry hazardous loads, providing adequate lighting, and conducting regular health and safety checks.',
  },
  {
    date: '31 May',
    title: 'Common Types of Personal Injury Claims',
    summary: 'One in four adults have had a personal injury at some point. The UK has strict legal requirements for health and safety policies. Statistics show 16% of all personal injuries are workplace accidents.',
  },
  {
    date: '12 May',
    title: 'GP Embroiled In Personal Injury Scam',
    summary: 'A family doctor was accused of involvement in a personal injury scam, compiling fake medical reports and receiving £350 each time for exaggerating injuries. The misconduct came to light when one claimant refused to cash an unfair cheque and alerted authorities.',
  },
  {
    date: '20 Apr',
    title: 'Number of child in-patient mental health deaths unknown',
    summary: 'INQUEST revealed there\'s no system to record, monitor and publish statistics of children who have died whilst receiving in-patient mental health care. This lack of transparency concerns one of the most vulnerable groups in England and Wales.',
  },
  {
    date: '10 Apr',
    title: 'Unlawful Killings at the Hillsborough Disaster',
    summary: 'After 27 years, families of the 96 football fans who died at Hillsborough received justice. The jury concluded that Chief Superintendent David Duckinfield\'s actions amounted to gross negligence, and police errors contributed to the deadly crush.',
  },
  {
    date: '15 Mar',
    title: 'Could autonomous cars reduce traffic accidents by up to 95%?',
    summary: 'Research by The Institution of Mechanical Engineers found that replacing current vehicles with autonomous alternatives could save up to £51 billion annually and significantly reduce road accidents. 95% of road traffic accidents occur due to driver error.',
  },
  {
    date: '07 Mar',
    title: 'Jeremy Clarkson Case Draws Attention to Personal Injury',
    summary: 'Jeremy Clarkson settled a personal injury claim by BBC producer Oisin Tymon, who was injured after being punched following a disagreement. The case emphasised the importance of addressing personal injury in all contexts.',
  },
  {
    date: '18 Feb',
    title: 'Road safety charity urges government action against injuries',
    summary: 'Road safety charity Brake spoke out as statistics showed a 5% rise in serious injuries and 4% increase in severe injuries on roads, yet the government has not outlined new casualty reduction targets.',
  },
  {
    date: '03 Feb',
    title: 'Who is to blame for rising medical negligence claims?',
    summary: 'Following high-profile revelations about NHS hospitals below acceptable standards and patient payouts, questions arose about public safety. The Medical Defence Union has stated that GPs are not to blame for the rise in claims.',
  },
  {
    date: '26 Jan',
    title: 'The 5 most common road accident causes',
    summary: 'Common causes include: not looking before pulling out, driving under the influence, not concentrating on the road, and other negligent behaviours. If you\'ve been affected by an accident that wasn\'t your fault, you may be entitled to compensation.',
  },
  {
    date: '22 Jan',
    title: 'CMA Investigation into UK legal services',
    summary: 'The Competition and Markets Authority launched an investigation into UK legal services quality and prices following concerns about affordability. The Law Society, representing over 130,000 solicitors, approved the investigation.',
  },
  {
    date: '17 Dec',
    title: 'New rehab code for personal injury cases',
    summary: 'An updated rehabilitation code took effect from 1st December 2015, ensuring those affected by personal injury receive appropriate, high-quality support. The code was developed by experts including the Association of British Insurers and NHS representatives.',
  },
  {
    date: '03 Dec',
    title: 'Cycling safety tips forgotten far too often',
    summary: 'Cycling on roads comes with obvious risks due to proximity to busy traffic and size differences between bikes and motor vehicles. Safety must be kept in mind at all times. Unfortunately, many cyclists are seriously injured on UK roads every year.',
  },
  {
    date: '23 Nov',
    title: 'Health and safety lessons from winter months',
    summary: 'During winter, a typical rise is seen in accidents on roads and at work due to wintry conditions. Employers have an obligation to uphold health and safety standards appropriate to changing weather conditions.',
  },
  {
    date: '16 Nov',
    title: 'Take these steps for a safer workplace in 2016',
    summary: 'Key areas include: minimising slip and fall risks with consistent flooring, conducting daily surface checks, and putting health and safety at the forefront. When workplaces prioritise safety, colleagues feel appreciated and productivity increases.',
  },
  {
    date: '30 Oct',
    title: 'Winter on the roads – accidents and advice',
    summary: 'UK drivers are up to six times more likely to have an accident over winter. Wintry conditions increasing risk include snow, ice, surface water, and limited visibility. Drivers must take appropriate caution for slippery surfaces.',
  },
  {
    date: '12 Oct',
    title: 'Are you one of the 21% injured at work in the North West?',
    summary: 'Research shows the North of England is one of the most high-risk areas for workplace accidents. Since 2008, 154 people in the North West have died at work, with construction being the most dangerous sector at 47 deaths.',
  },
];

export default function NewsPage() {
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
            News
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
            Stay informed with the latest updates on personal injury law, medical negligence, and legal news
          </motion.p>
        </div>
      </section>

      {/* News Articles */}
      <section ref={contentRef} className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {newsArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.5) }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-gold-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="bg-gold-500/10 rounded-lg p-2 border border-gold-500/20">
                      <Calendar className="w-4 h-4 text-gold-500 mx-auto mb-1" />
                      <span className="text-xs text-gold-500 font-medium">{article.date}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 
                      className="text-lg font-semibold text-white mb-2 leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
