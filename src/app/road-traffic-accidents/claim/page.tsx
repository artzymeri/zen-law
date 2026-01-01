'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Upload, X, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Form section component
function FormSection({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-12"
    >
      <h2 className="text-2xl text-white mb-6 pb-3 border-b border-white/10" style={{ fontFamily: 'Playfair Display, serif' }}>
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
}

// Input field component
function FormInput({ label, type = 'text', placeholder = '', required = false }: { label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-white/70 text-sm mb-2">{label}{required && <span className="text-gold-500">*</span>}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 transition-colors"
      />
    </div>
  );
}

// Select field component
function FormSelect({ label, options, required = false }: { label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-white/70 text-sm mb-2">{label}{required && <span className="text-gold-500">*</span>}</label>
      <div className="relative">
        <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white appearance-none focus:outline-none focus:border-gold-500/50 transition-colors cursor-pointer">
          <option value="" className="bg-dark-950">—Please choose an option—</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-dark-950">{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={18} />
      </div>
    </div>
  );
}

// Yes/No toggle component
function FormToggle({ label, defaultValue = 'No' }: { label: string; defaultValue?: 'Yes' | 'No' }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <label className="block text-white/70 text-sm mb-2">{label}</label>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setValue('Yes')}
          className={`px-6 py-2 rounded-lg border transition-all ${value === 'Yes' ? 'bg-gold-500 border-gold-500 text-dark-950' : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'}`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setValue('No')}
          className={`px-6 py-2 rounded-lg border transition-all ${value === 'No' ? 'bg-gold-500 border-gold-500 text-dark-950' : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30'}`}
        >
          No
        </button>
      </div>
    </div>
  );
}

// Textarea component
function FormTextarea({ label, placeholder = '', rows = 4 }: { label: string; placeholder?: string; rows?: number }) {
  return (
    <div>
      <label className="block text-white/70 text-sm mb-2">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
      />
    </div>
  );
}

// Injury section component
function InjurySection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white/80">{title}</span>
        <ChevronDown size={18} className={`text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 space-y-4 border-t border-white/10">
          {children}
        </div>
      )}
    </div>
  );
}

// Passenger section component
function PassengerSection({ number }: { number: number }) {
  return (
    <div className="p-6 border border-white/10 rounded-lg space-y-4">
      <h4 className="text-white/80 font-medium">Passenger {number}:</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput label="Full Name" />
        <FormInput label="Date of Birth" type="date" />
        <FormInput label="Tel Mobile" type="tel" />
        <FormInput label="Tel Work" type="tel" />
        <FormInput label="E-mail" type="email" />
        <FormInput label="Occupation" />
        <div className="md:col-span-2">
          <FormInput label="Address" />
        </div>
        <FormInput label="Postcode" />
        <FormInput label="NI Number" />
      </div>
    </div>
  );
}

// Hospital section component
function HospitalSection({ number }: { number: number }) {
  return (
    <div className="p-6 border border-white/10 rounded-lg space-y-4">
      <h4 className="text-white/80 font-medium">Hospital {number}:</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput label="Hospital Name" />
        <FormInput label="Address" />
        <FormInput label="Ref" />
        <FormInput label="Admission Date" type="date" />
        <FormInput label="Consultant" />
        <FormInput label="Department" />
      </div>
    </div>
  );
}

export default function RTAClaimPage() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 10));
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start my <span className="gold-text">RTA Claim</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-32 bg-gradient-to-r from-gold-500 to-transparent"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-6">
          <form className="max-w-4xl mx-auto">
            
            {/* Your Details */}
            <FormSection title="Your details" delay={0.1}>
              <div className="grid md:grid-cols-3 gap-4">
                <FormSelect label="Title" options={['Mr', 'Mrs', 'Miss', 'Ms', 'Dr']} required />
                <FormInput label="First Name(s)" required />
                <FormInput label="Surname" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Date of Birth" type="date" required />
                <FormInput label="Mobile/Contact Number inc intl code" type="tel" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Email" type="email" required />
                <FormInput label="Occupation" />
              </div>
              <FormInput label="Address inc town/city" required />
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Postcode" required />
                <FormInput label="NI Number" />
              </div>
              <FormToggle label="Instructed another solicitor?" />
            </FormSection>

            {/* Accident Details */}
            <FormSection title="Accident details" delay={0.15}>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Date of Accident" type="date" required />
                <FormSelect label="Time of Accident" options={['Morning (6am-12pm)', 'Afternoon (12pm-6pm)', 'Evening (6pm-12am)', 'Night (12am-6am)']} />
              </div>
              <FormInput label="Owner of the vehicle you were in" />
              <FormInput label="Postcode / Location / Town of Accident" required />
              <FormToggle label="Accident Photographs" />
              <FormTextarea label="Accident Circumstances" placeholder="Please describe what happened..." rows={5} />
              <FormInput label="Description of TP Driver" />
              <FormSelect label="How details obtained" options={['Scene', 'Police', 'Insurance', 'Other']} />
              <div className="grid md:grid-cols-2 gap-4">
                <FormSelect label="No of Occupants in vehicle (inc Driver)" options={['1', '2', '3', '4', '5', '6+']} />
                <FormToggle label="Were Police Involved?" />
              </div>
              <FormInput label="If so, Police No./Station" />
              <div className="grid md:grid-cols-2 gap-4">
                <FormSelect label="Were you the owner, driver or passenger?" options={['Owner', 'Driver', 'Passenger']} />
                <FormSelect label="Weather Conditions" options={['Clear', 'Rainy', 'Snowy', 'Foggy', 'Icy', 'Other']} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormSelect label="Road Conditions?" options={['Dry', 'Wet', 'Icy', 'Flooded', 'Uneven', 'Other']} />
                <FormSelect label="Who is to Blame?" options={['Third Party', 'Split Liability', 'Unknown']} />
              </div>
              <FormTextarea label="Why do you believe the Third Party (or Own Car Driver) was at fault for the accident?" rows={4} />
            </FormSection>

            {/* Parties */}
            <FormSection title="Parties" delay={0.2}>
              <h3 className="text-lg text-gold-500 mb-4">You:</h3>
              <FormInput label="Driver of your vehicle" />
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Vehicle Registration" />
                <FormInput label="Make / Model" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Colour" />
                <FormInput label="Insurer / Policy No" />
              </div>
              <FormToggle label="Seatbelt Worn?" defaultValue="Yes" />

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Third Party:</h3>
              <FormInput label="Third Party Driver Name" />
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Vehicle Registration" />
                <FormInput label="Make / Model" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Colour" />
                <FormInput label="Insurer / Policy No" />
              </div>

              <h3 className="text-lg text-white/70 mt-8 mb-4">Witness 1:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Full Name" />
                <FormInput label="Tel Number" type="tel" />
              </div>
              <FormInput label="Address" />

              <h3 className="text-lg text-white/70 mt-6 mb-4">Witness 2:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="Full Name" />
                <FormInput label="Tel Number" type="tel" />
              </div>
              <FormInput label="Address" />
            </FormSection>

            {/* Claiming For */}
            <FormSection title="Claiming for" delay={0.25}>
              <div className="grid md:grid-cols-2 gap-4">
                <FormSelect label="Personal Injury" options={['Yes', 'No']} />
                <FormSelect label="Vehicle Damage" options={['Yes', 'No']} />
                <FormSelect label="Credit Hire/Recovery and Storage" options={['Yes', 'No']} />
                <FormSelect label="Loss of Earnings" options={['Yes', 'No']} />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FormToggle label="Travel Expenses" />
                <FormToggle label="Treatment Costs" />
                <FormToggle label="Care and Assistance" />
                <FormToggle label="Excess" />
              </div>
              <FormToggle label="Other" />
            </FormSection>

            {/* Passengers Personal Details */}
            <FormSection title="Passengers personal details" delay={0.3}>
              <PassengerSection number={1} />
              <PassengerSection number={2} />
              <PassengerSection number={3} />
              <PassengerSection number={4} />
              <p className="text-white/50 text-sm italic mt-4">
                PLEASE NOTE THAT WE MAY CONTACT EACH PASSENGER TO OBTAIN THE DETAILS OF THEIR INJURIES IF THEY ARE MAKING A CLAIM
              </p>
            </FormSection>

            {/* Injuries */}
            <FormSection title="Injuries" delay={0.35}>
              <p className="text-white/60 text-sm mb-6">
                Please tell us here about your injuries in as much detail as possible – please ensure that ALL of your injuries are included as it may be difficult to introduce injuries which are not notified from the outset
              </p>

              <h3 className="text-lg text-gold-500 mb-4">Soft Tissue</h3>
              <div className="space-y-3">
                <InjurySection title="Neck">
                  <FormToggle label="Injured?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Back">
                  <FormToggle label="Injured?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Shoulder">
                  <FormToggle label="Injured?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Rib/Chest/Torso</h3>
              <div className="space-y-3">
                <InjurySection title="Fracture">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Sprain or Strain">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Cuts or Scarring">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Bruising or Abrasions">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Face/Cheekbones/Jaw/Nose</h3>
              <div className="space-y-3">
                <InjurySection title="Fracture">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Sprain or Strain">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Cuts or Scarring">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Bruising or Abrasions">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Damage to Teeth">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Forearm/Wrist/Hand/Finger(s)</h3>
              <div className="space-y-3">
                <InjurySection title="Fracture">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Sprain or Strain">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Cuts or Scarring">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Bruising or Abrasions">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Head/Senses</h3>
              <div className="space-y-3">
                <InjurySection title="Headaches">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Cuts or Scarring">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Bruising or Abrasions">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Senses Affected">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Hips/Pelvis/Genitals</h3>
              <div className="space-y-3">
                <InjurySection title="Fracture">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Sprain or Strain">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Cuts or Scarring">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Bruising or Abrasions">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Leg/Knee/Ankle/Foot/Toe</h3>
              <div className="space-y-3">
                <InjurySection title="Fracture">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Sprain or Strain">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Cuts or Scarring">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Bruising or Abrasions">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Shock/Anxiety/Other Psychological Conditions</h3>
              <div className="space-y-3">
                <InjurySection title="Shock">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Anxiety">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
                <InjurySection title="Other">
                  <FormToggle label="Yes?" />
                  <FormTextarea label="Detailed Description" rows={3} />
                </InjurySection>
              </div>

              <h3 className="text-lg text-gold-500 mt-8 mb-4">Multiple Injuries</h3>
              <FormTextarea label="Please describe here any other injuries which are not covered above" rows={5} />
            </FormSection>

            {/* Medical Details */}
            <FormSection title="Medical Details" delay={0.4}>
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput label="GP Surgery Name" />
                <FormInput label="Address" />
              </div>
              <FormInput label="What was the date of your first visit?" type="date" />
              <FormToggle label="Did you go to Accident & Emergency?" />
              <FormInput label="If yes, which hospital did you visit?" />
              <FormToggle label="Have you attended any other hospitals for treatment?" />
              <FormInput label="If Yes, which hospital(s)" />

              <HospitalSection number={1} />
              <HospitalSection number={2} />

              <FormToggle label="Did you visit any other treatment providers (e.g. a physiotherapist)?" />
              <FormInput label="If yes, please provide details of treatment provider" />
              <FormToggle label="Are you due to receive any further treatment?" />
              <FormInput label="If yes, please provide details of treatment provider" />
              <FormTextarea label="Please tell us anything else that you think we should know - eg are your soft tissue injuries EXCEPTIONAL? Meaning the degree of pain, suffering or loss of amenity (impact on day-to-day life) on you was severe." rows={5} />
            </FormSection>

            {/* Introducer */}
            <FormSection title="Introducer" delay={0.45}>
              <FormInput label="Please advise how you found us or who recommended our services to you (which could be an individual or an Accident Management company) but if unknown then put N/A" />
            </FormSection>

            {/* Evidence */}
            <FormSection title="Evidence" delay={0.5}>
              <p className="text-white/60 text-sm mb-4">
                Please upload here any documents relevant to the claim which are appropriately labelled e.g. Accident Scene Photograph(s), Video(s), your Photographic ID, copies of communications received from own or third party insurer etc.
              </p>
              
              <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-gold-500/50 transition-colors">
                <Upload className="w-12 h-12 text-white/30 mx-auto mb-4" />
                <p className="text-white/60 mb-2">Drag & Drop Files Here</p>
                <p className="text-white/40 text-sm mb-4">or</p>
                <label className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg cursor-pointer transition-colors">
                  Browse Files
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                  />
                </label>
                <p className="text-white/40 text-sm mt-4">{files.length} of 10</p>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-white/70 text-sm truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-white/50 hover:text-red-400 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </FormSection>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mb-8"
            >
              <p className="text-white/50 text-sm leading-relaxed">
                By clicking &apos;Submit RTA Claim Form&apos; below you are declaring that the information you have provided is accurate and truthful to the best of your knowledge and that you instruct/authorise us to pursue your claim for Damages and Losses against the at-fault party.
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-semibold rounded-lg transition-all duration-300 text-lg"
              >
                Submit RTA Claim Form
              </button>
            </motion.div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
