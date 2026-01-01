'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Stethoscope, Eye, Brain, Baby, Bone, Heart, Pill, Activity, Scissors, AlertCircle, Syringe, Ambulance, Droplet, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const negligenceTypes = [
  {
    id: 'gp-community',
    title: 'GP & Community Health Claims',
    icon: Stethoscope,
    description: 'Claims against GPs, district nurses, nursing homes, occupational therapists, physiotherapists and community midwives.',
    content: `Our doctors and community healthcare professionals are often our first port of call when we are unwell. Unfortunately, these people can make mistakes just like everyone else and patients can be left with serious and long-lasting health problems as a result.

If your GP or a healthcare worker made a mistake and you have suffered injury or illness as a result, you may be entitled to claim compensation. Whether they gave you bad advice, the wrong treatment, or made a misdiagnosis, we have the expertise needed to help you make a claim for the injuries you or a loved one have suffered.

Medical mistakes can have devastating consequences. If you have been left unable to work because of your injuries or illness, your compensation can help you pay the bills and look after your family.`,
    professionals: ['GPs', 'District nurses', 'Nursing homes', 'Occupational therapists', 'Physiotherapists', 'Community midwives'],
  },
  {
    id: 'eye-claims',
    title: 'Eye Related Claims',
    icon: Eye,
    description: 'Laser eye surgery complications and other eye treatment negligence claims.',
    content: `Due to an ever-increasing demand for laser eye surgery treatment, there has inevitably been an increase in providers of this treatment. The procedure is often used to correct long or short-sighted vision and the results are usually successful.

However, while most eye treatments are conducted to a high standard, unfortunately not all patients receive the service they deserve. If your eyes are damaged during laser eye surgery or an alternative treatment, you may be entitled to compensation.`,
    complications: ['Dry Eyes', 'Night vision difficulties', 'Corneal scarring', 'Corneal infection', 'Corneal haze', 'Astigmatism', 'Ptosis (eye lid drooping)', 'Over or under correction', 'Blindness in rare cases'],
  },
  {
    id: 'adult-brain-injury',
    title: 'Adult Brain Injury Claims',
    icon: Brain,
    description: 'Claims for traumatic brain injuries with life-changing implications.',
    content: `Traumatic brain injuries have life changing implications for an individual and their family. A serious head or brain injury can leave you with physical problems such as impairment of movement, balance or speech and "cognitive impairment" such as poor memory or attention and personality changes.

We understand that the needs of an individual can increase significantly following the onset of a traumatic brain injury. It is likely that you or a loved one will need round-the-clock care and assistance and therefore your compensation must account for this including any money that you have lost or had to pay out.

Quality care, treatment and rehabilitation are essential to ensure the continued health and wellbeing of a brain injured person.`,
  },
  {
    id: 'cerebral-palsy-child',
    title: 'Cerebral Palsy & Child Brain Injury',
    icon: Baby,
    description: 'Birth injury claims and cerebral palsy caused by medical negligence.',
    content: `If your child has suffered a head or brain injury, we realise just how much of an impact it will have, not only on their lives but also on the lives of the whole family. Children with cerebral palsy often have difficulties with movement, hearing and speech problems and can also have learning difficulties.

In cases where brain damage occurs during birth resulting in cerebral palsy, it may be possible to claim compensation. Our expert birth injury solicitors can work with you to find out what happened during birth and if we find evidence of incompetent care, for example if the child was unnecessarily deprived of oxygen, we could help you to claim.

Children under 18 cannot deal with their own compensation claim, but an adult (usually a parent) can deal with one on their behalf.`,
  },
  {
    id: 'pregnancy-birth',
    title: 'Pregnancy & Birth Injury Claims',
    icon: Baby,
    description: 'Claims for injuries during pregnancy, childbirth or gynaecological procedures.',
    content: `Pregnancy is usually a joyous time and every pregnancy and the birth goes smoothly. However, a difficult or mishandled pregnancy or birth can result in life-changing consequences for mother, baby and the family as a whole.`,
    complications: ['Ante-natal errors and misdiagnosis', 'Errors during birth', 'Damage from medical instruments', 'Anaesthetic errors', 'Inadequate suturing', 'Cerebral palsy', 'Brachial palsy', 'Brain injury', 'Facial paralysis', 'Spinal injuries'],
  },
  {
    id: 'orthopaedic-amputation',
    title: 'Orthopaedic & Amputation Claims',
    icon: Bone,
    description: 'Claims for negligent treatment of fractures, joints, ligaments and bones.',
    content: `Fractures and injuries to bones, joints and ligaments are managed by Orthopaedic surgeons and are usually treated successfully. However, sometimes the treatment can be negligent and can lead to prolonged suffering and the need for long-term rehabilitation.`,
    errors: ['Fractures including misreading x-rays', 'Spinal injuries', 'Joint reconstruction', 'Trauma', 'Infections and tumours of the bone', 'Soft tissues injuries', 'Congenital conditions', 'Misdiagnosis', 'Surgical error'],
  },
  {
    id: 'inquests-fatal',
    title: 'Inquests & Fatal Claims',
    icon: Heart,
    description: 'Claims when negligence has resulted in the death of a loved one.',
    content: `When a loved one dies, it can be an extremely distressing experience. That experience can be more distressing in circumstances where the cause of death isn't clear or it was very unusual.

If somebody close to you has died while undergoing medical care or treatment and you suspect the appropriate steps were not taken to prevent their death, you may be able to make a compensation claim.

We are here to help you find out what happened and why. If negligence is proven, we can help you to recover the compensation you are entitled to following the negligent act or omission.`,
  },
  {
    id: 'prescription',
    title: 'Prescription & Administration Errors',
    icon: Pill,
    description: 'Claims for medication errors and prescription mistakes.',
    content: `Prescription or medication errors occur in the NHS each and every year. Many medication errors cause harm only for a short period, but some result in serious injury, illness and even death.

Prescription mistakes can be made by GPs or hospital doctors writing the wrong letter on a prescription or chart; or by pharmacies giving out the wrong drugs. Most dispensing errors occur at the chemist although a growing number are now taking place in nursing and care homes.`,
    errors: ['Wrong patient', 'Wrong dose/strength leading to overdose', 'Wrong drug', 'Incorrect labels', 'Computer error', 'Warfarin/Heparin dose errors', 'Drugs administered incorrectly'],
  },
  {
    id: 'cancer-misdiagnosis',
    title: 'Cancer Misdiagnosis Claims',
    icon: Activity,
    description: 'Claims for failure to diagnose, delayed diagnosis or misdiagnosis of cancer.',
    content: `If you have suffered as a result of misdiagnosis of cancer or failure to diagnose cancer, and someone has been negligent, you may be able to make a medical negligence compensation claim.

It is widely recognised that early diagnosis of many types of cancer can lead to much more effective treatment and lower mortality rates. Therefore, early detection can be critical to a patient's chances of survival.`,
    factors: ['Failure to diagnose', 'Delay in diagnosis', 'Misdiagnosis leading to unnecessary treatment'],
    cancerTypes: ['Breast cancer', 'Colon and bowel cancer', 'Cervical cancer', 'Prostate cancer', 'Lung cancer', 'Leukaemia', 'Lymphoma'],
  },
  {
    id: 'delayed-treatment',
    title: 'Delayed Treatment Claims',
    icon: AlertCircle,
    description: 'Claims where delayed diagnosis has led to adverse consequences.',
    content: `Delayed treatment can arise where a medical professional has either misdiagnosed or failed to diagnose an injury or illness altogether, which can have adverse consequences on the patient.

This can result in an increased period of pain and suffering or even a missed opportunity for medical intervention which would otherwise have resulted in a much better outlook for treatment of the injury or illness.`,
    causes: ['Failing to respond to test results', 'Failing to refer for early treatment', 'Misreading x-rays', 'Failing to prescribe medication early'],
  },
  {
    id: 'cosmetic-surgery',
    title: 'Cosmetic Surgery Claims',
    icon: Scissors,
    description: 'Claims for negligence in cosmetic and plastic surgery procedures.',
    content: `Although the majority of patients greatly benefit from the positive effects of cosmetic surgery, the industry lacks regulation and, sadly, negligence in cosmetic procedures can occur.`,
    procedures: ['Facelifts', 'Breast enlargement/reduction', 'Nose reshaping', 'Brow lifts', 'Laser skin resurfacing', 'Cosmetic dentistry', 'Tummy tucks', 'Gastric band surgery'],
    claimReasons: ['Insufficient information about risks', 'Procedure not performed to standard', 'Defective product used', 'Failure to provide aftercare'],
  },
  {
    id: 'hospital-infections',
    title: 'MRSA & Hospital Infections',
    icon: AlertCircle,
    description: 'Claims for superbugs and infections contracted in hospital.',
    content: `Hospital infections such as MRSA and Clostridium Difficile have recently been given a lot of media attention. While these infections exist in the wider community, they are particularly dangerous in a hospital environment because of the presence of open wounds and the vulnerability of many hospital patients to infections.`,
    claimReasons: ['Delays in recognising and treating infection', 'Inappropriate treatment once detected', 'Proceeding with operations when infection present', 'Inappropriate use of antibiotics', 'Poor wound care', 'Lack of monitoring'],
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury Claims',
    icon: Activity,
    description: 'Claims for sports injuries caused by negligence.',
    content: `Sports injuries are a common occurrence and generally accepted as being a risk of participating in sports. However, if an injury occurs that is not part of normal play, it may be possible to claim for injury compensation.

Anyone who suffers a sports injury, whether taking part on a professional, semi-professional, amateur or recreational basis, should be entitled to claim compensation if someone else is the cause of the incident.`,
    examples: ['Reckless conduct by players', 'Dangerous defects on facilities', 'Referee failing to prevent risks', 'Poor supervision or training', 'Unsafe equipment', 'Incorrect instructions'],
  },
  {
    id: 'nursing-care-home',
    title: 'Nursing & Care Home Claims',
    icon: Users,
    description: 'Claims for abuse, neglect and negligence in care settings.',
    content: `Traditionally, we place our trust in nursing care and generally we receive an excellent level of service. However, the widely documented abuse of the elderly has recently come to the forefront and can be a distressing and devastating experience.

This is not just limited to sexual or physical abuse. Many care home and hospital care claims deal with the effects of financial and psychological abuse, including neglect and bullying claims.`,
    circumstances: ['Failure to assess and monitor condition', 'Failure to respond to deterioration', 'Medication errors', 'Failure to record patient information', 'Misuse of medical equipment', 'Failing to provide nourishment', 'Failing to check on patients regularly'],
  },
  {
    id: 'dental',
    title: 'Dental Negligence Claims',
    icon: Stethoscope,
    description: 'Claims for negligent dental treatment and procedures.',
    content: `A visit to the dentist can be a very unnerving experience for many people. Although most dental surgery is performed to a high standard, there are times when things go wrong.

Your dentist has a duty of care to carry out work to a certain standard, and if work carried out falls below this standard then you could be entitled to make a claim for compensation.`,
    causes: ['Damage to teeth and jaw', 'Tooth decay', 'Removal of teeth', 'Gum disease', 'Crowns and bridges', 'Root canal therapy', 'Orthodontics', 'Wisdom teeth removal', 'Veneers'],
  },
  {
    id: 'surgical-error',
    title: 'Surgical Error Claims',
    icon: Scissors,
    description: 'Claims for mistakes made during surgical procedures.',
    content: `The vast majority of operations performed in the UK are extremely successful. However, occasionally mistakes are made at the expense of the patient.

Undergoing surgery is stressful enough without finding out that something has gone wrong during the operation. Where injuries are sustained from negligent surgery, a number of complications may result.`,
    types: ['General Surgery', 'Orthopaedic Surgery', 'Gastroenterological Surgery', 'Cardiac Surgery', 'Gynaecological Surgery', 'Hysterectomy Complications', 'Urological Surgery', 'Anaesthetic Errors', 'Failed Sterilisation', 'ENT Surgery', 'Neurosurgery', 'Ophthalmological Surgery'],
  },
  {
    id: 'accident-emergency',
    title: 'Accident & Emergency Claims',
    icon: Ambulance,
    description: 'Claims for negligence in A&E departments.',
    content: `Given the very diverse range of injuries that present in these departments, there is a wide variety of circumstances giving rise to accident and emergency claims.

Despite the high-pressure environments of A&E departments, you are still entitled to the highest standard of care.`,
    claims: ['Failure to correctly investigate and diagnose', 'Failure to act on investigation results', 'Failure to treat or operate', 'Failure to refer for further treatment', 'Wrongful discharge', 'Delay in treatment', 'Mistakes during surgery', 'Inadequate post-surgical care'],
  },
  {
    id: 'diabetes',
    title: 'Diabetes & Endocrinology Claims',
    icon: Syringe,
    description: 'Claims for diabetes misdiagnosis and endocrine disorders.',
    content: `Diabetes can be a very difficult condition to live with but can be very manageable thanks to advances in treatment. Unfortunately, sometimes a patient who presents with symptoms indicative of diabetes may not always be treated correctly.

Clinical negligence cases in this area may involve the delay or failure in diagnosis of an endocrine condition or the inappropriate treatment of that condition.`,
    complications: ['Ketoacidosis (DKA)', 'Hyperglycaemia', 'Heart disease and stroke', 'Peripheral vascular disease', 'Retinopathy', 'Neuropathy'],
  },
  {
    id: 'medical-product',
    title: 'Medical Product Liability Claims',
    icon: AlertCircle,
    description: 'Claims for defective medical devices and implants.',
    content: `Surgery should not be carried out lightly, or before attempting to solve the problem using non-surgical means. It is vital to use components that are proven to be reliable in order to avoid problems from product failure, which can be very painful and debilitating.

Patients suffering from problems with medical products can make a product liability compensation claim against the manufacturer of the product or the hospital responsible for maintaining that product.`,
    products: ['Ankle joint replacements', 'Hip replacement', 'Knee replacement', 'Faulty heart devices', 'Breast implants', 'Cosmetic implants', 'Insulin pumps', 'Surgical mesh', 'Medical equipment'],
  },
  {
    id: 'ambulance',
    title: 'Ambulance & Paramedic Claims',
    icon: Ambulance,
    description: 'Claims for negligence by ambulance services and paramedics.',
    content: `If you have been the innocent victim of clinical negligence by the ambulance service then you could be entitled to compensation if this has resulted in yours or a loved one's increased suffering.`,
    claims: ['Failure to treat quickly enough', 'Incorrect treatment following misdiagnosis', 'Incorrect medication administered', 'Delay in reaching hospital', 'Failure to respond in time', 'Failure to stabilise patient correctly'],
  },
  {
    id: 'blood-transfusion',
    title: 'Blood Transfusion Claims',
    icon: Droplet,
    description: 'Claims for wrong blood type or contaminated blood transfusions.',
    content: `A blood transfusion is the process of administering blood into a patient that has been taken from a donor who is normally a healthy person. Generally a blood transfusion plays an essential part in improving treatment and saving lives.

The main risk in receiving a blood transfusion is receiving the wrong blood type and/or infected blood. When mistakes happen, it can have serious or even fatal consequences.`,
    illnesses: ['HIV', 'Hepatitis C', 'Hepatitis B'],
  },
  {
    id: 'mental-health',
    title: 'Mental Health Claims',
    icon: Brain,
    description: 'Claims for negligence in mental health treatment and care.',
    content: `Medical institutions have a duty of care to all of their patients including individuals with psychological health concerns. When this duty of care falls short, people who already have mental health illnesses can suffer additional injury.

If you or a loved one have suffered a mental health injury while being looked after by healthcare providers, you may be able to make a claim.`,
    claims: ['Mental health injuries during hospital stays', 'Negligence during mental health treatment', 'Inadequate care by psychiatric services'],
  },
];

export default function MedicalNegligencePage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

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
            Medical Negligence
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
            Expert legal support for victims of clinical negligence and medical malpractice
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-16">
        <div className="container mx-auto px-6">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden aspect-[16/9]"
          >
            <Image
              src="/our-expertise/medical-negligence.jpg"
              alt="Medical Negligence"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              As patients, we naturally place our trust in medical care professionals and usually receive the correct treatment and advice to help with our ailments. However, if you have recently visited your GP surgery, a clinic or hospital and feel that your health has been affected following incompetent care or lack of judgement, you could be entitled to compensation for medical negligence (sometimes referred to as clinical negligence).
            </p>
            <p className="text-white/60 leading-relaxed">
              Medical negligence is too wide a field to comprehensively list all of the types of injuries which fall within this area. At Zen Law Solicitors we have specialist lawyers who deal with different types of medical negligence claims.
            </p>
          </motion.div>

          {/* Negligence Types Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {negligenceTypes.map((type, index) => {
              const IconComponent = type.icon;
              const isExpanded = expandedSection === type.id;
              
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
                >
                  <button
                    onClick={() => toggleSection(type.id)}
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-gold-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{type.title}</h3>
                      <p className="text-sm text-white/50">{type.description}</p>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`text-white/50 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-white/60 leading-relaxed whitespace-pre-line mb-4">
                          {type.content}
                        </p>
                        
                        {type.professionals && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">We help with claims against:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.professionals.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {type.complications && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common complications:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.complications.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.errors && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common errors include:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.errors.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.factors && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common factors:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.factors.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.cancerTypes && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common cancer types:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.cancerTypes.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.causes && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common causes:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.causes.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.procedures && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Procedures:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.procedures.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.claimReasons && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">You may have a claim if:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.claimReasons.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.examples && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.examples.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.circumstances && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Circumstances:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.circumstances.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.types && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Types of claims:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.types.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.claims && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common claims:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.claims.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.products && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Common products:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.products.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {type.illnesses && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Potential illnesses:</h4>
                            <div className="flex flex-wrap gap-2">
                              {type.illnesses.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20"
          >
            <h3 
              className="text-2xl font-light text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Have you been affected by medical negligence?
            </h3>
            <p className="text-white/60 mb-6">
              Our specialist medical negligence team will deal with your claim with the utmost professionalism and sensitivity. We will listen to your concerns sympathetically and put your needs above all.
            </p>
            <Link
              href="/medical-negligence/claim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-colors"
            >
              Start Your Claim
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
