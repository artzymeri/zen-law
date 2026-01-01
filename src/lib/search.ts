// Search index for all pages with keywords
export interface SearchPage {
  title: string;
  href: string;
  keywords: string[];
  category: string;
}

export const searchPages: SearchPage[] = [
  // Main pages
  { title: 'Home', href: '/', keywords: ['home', 'main', 'zen law', 'solicitors', 'personal injury'], category: 'Main' },
  { title: 'Contact', href: '/contact', keywords: ['contact', 'phone', 'email', 'call', 'reach', 'enquiry', 'message'], category: 'Main' },
  { title: 'News', href: '/news', keywords: ['news', 'articles', 'blog', 'updates', 'latest'], category: 'Main' },
  { title: 'FAQ', href: '/faq', keywords: ['faq', 'questions', 'answers', 'help', 'frequently asked', 'how to', 'what is'], category: 'Main' },
  
  // Personal Injury
  { title: 'Road Traffic Accidents', href: '/road-traffic-accidents', keywords: ['road', 'traffic', 'accident', 'car', 'vehicle', 'crash', 'rta', 'driving', 'collision', 'whiplash'], category: 'Personal Injury' },
  { title: 'Accidents at Work', href: '/accidents-at-work', keywords: ['work', 'workplace', 'employer', 'employee', 'job', 'office', 'factory', 'construction', 'injury at work'], category: 'Personal Injury' },
  { title: 'Slips, Trips and Falls', href: '/slips-trips-falls', keywords: ['slip', 'trip', 'fall', 'fallen', 'slipped', 'tripped', 'pavement', 'floor', 'wet'], category: 'Personal Injury' },
  { title: 'Medical Negligence', href: '/medical-negligence', keywords: ['medical', 'negligence', 'doctor', 'hospital', 'nhs', 'surgery', 'misdiagnosis', 'treatment', 'clinical', 'healthcare'], category: 'Personal Injury' },
  { title: 'Criminal Injuries', href: '/criminal-injuries', keywords: ['criminal', 'crime', 'assault', 'attack', 'victim', 'cica', 'violence', 'violent'], category: 'Personal Injury' },
  { title: 'Other Types of Claim', href: '/other-claims', keywords: ['other', 'claims', 'types', 'different', 'various'], category: 'Personal Injury' },
  
  // Industrial Diseases
  { title: 'Industrial Diseases', href: '/industrial-diseases', keywords: ['industrial', 'disease', 'illness', 'occupation', 'work-related', 'exposure'], category: 'Industrial Diseases' },
  { title: 'Asbestos Claims', href: '/industrial-diseases/asbestos', keywords: ['asbestos', 'exposure', 'fibres', 'cancer', 'lungs'], category: 'Industrial Diseases' },
  { title: 'Mesothelioma', href: '/industrial-diseases/asbestos/mesothelioma', keywords: ['mesothelioma', 'asbestos', 'cancer', 'lung', 'terminal', 'chest'], category: 'Industrial Diseases' },
  { title: 'Asbestosis', href: '/industrial-diseases/asbestos/asbestosis', keywords: ['asbestosis', 'asbestos', 'breathing', 'lungs', 'scarring', 'fibrosis'], category: 'Industrial Diseases' },
  { title: 'Pleural Thickening', href: '/industrial-diseases/asbestos/pleural-thickening', keywords: ['pleural', 'thickening', 'asbestos', 'lungs', 'chest'], category: 'Industrial Diseases' },
  { title: 'Asbestos Related Lung Cancer', href: '/industrial-diseases/asbestos/lung-cancer', keywords: ['lung', 'cancer', 'asbestos', 'smoking', 'tumour'], category: 'Industrial Diseases' },
  { title: 'Occupational Asthma', href: '/industrial-diseases/occupational-asthma', keywords: ['asthma', 'breathing', 'respiratory', 'dust', 'fumes', 'chemicals'], category: 'Industrial Diseases' },
  { title: 'Pneumoconiosis and Silicosis', href: '/industrial-diseases/pneumoconiosis', keywords: ['pneumoconiosis', 'silicosis', 'coal', 'dust', 'mining', 'lungs'], category: 'Industrial Diseases' },
  { title: 'Dermatitis', href: '/industrial-diseases/dermatitis', keywords: ['dermatitis', 'skin', 'rash', 'eczema', 'contact', 'chemicals'], category: 'Industrial Diseases' },
  { title: 'Vibration White Finger', href: '/industrial-diseases/vibration-white-finger', keywords: ['vibration', 'white finger', 'havs', 'hands', 'tools', 'numbness'], category: 'Industrial Diseases' },
  { title: 'Repetitive Strain Injury', href: '/industrial-diseases/rsi', keywords: ['rsi', 'repetitive', 'strain', 'injury', 'typing', 'keyboard', 'wrist'], category: 'Industrial Diseases' },
  { title: 'Carpal Tunnel Syndrome', href: '/industrial-diseases/carpal-tunnel', keywords: ['carpal', 'tunnel', 'wrist', 'hand', 'numbness', 'tingling'], category: 'Industrial Diseases' },
  { title: 'Occupational Deafness', href: '/industrial-diseases/deafness', keywords: ['deafness', 'deaf', 'hearing', 'loss', 'noise', 'industrial'], category: 'Industrial Diseases' },
  { title: 'Tinnitus', href: '/industrial-diseases/tinnitus', keywords: ['tinnitus', 'ringing', 'ears', 'noise', 'hearing', 'buzzing'], category: 'Industrial Diseases' },
  
  // Housing
  { title: 'Housing Disrepair', href: '/housing-disrepair', keywords: ['housing', 'disrepair', 'landlord', 'tenant', 'damp', 'mould', 'repairs', 'council', 'rent'], category: 'Housing' },
  
  // Making A Claim
  { title: 'RTA Guide', href: '/making-a-claim/rta-guide', keywords: ['rta', 'guide', 'road', 'traffic', 'accident', 'what to do', 'after accident'], category: 'Making A Claim' },
  { title: 'Step By Step', href: '/making-a-claim/step-by-step', keywords: ['step', 'process', 'how', 'stages', 'procedure', 'claim process'], category: 'Making A Claim' },
  { title: 'Claim Handling', href: '/making-a-claim/claim-handling', keywords: ['handling', 'manage', 'process', 'case', 'claim'], category: 'Making A Claim' },
  { title: 'How Long Will My Claim Take?', href: '/making-a-claim/how-long', keywords: ['how long', 'time', 'duration', 'wait', 'weeks', 'months', 'timeline'], category: 'Making A Claim' },
  { title: 'No Win No Fee', href: '/making-a-claim/no-win-no-fee', keywords: ['no win no fee', 'free', 'cost', 'pay', 'conditional', 'cfa', 'funding'], category: 'Making A Claim' },
  { title: 'Compensation', href: '/making-a-claim/compensation', keywords: ['compensation', 'money', 'payout', 'settlement', 'damages', 'award'], category: 'Making A Claim' },
  { title: 'Paying For Your Claim', href: '/making-a-claim/paying', keywords: ['paying', 'cost', 'fees', 'expenses', 'solicitor fees'], category: 'Making A Claim' },
  
  // Compensation Calculator
  { title: 'Compensation Calculator', href: '/compensation-calculator', keywords: ['calculator', 'compensation', 'how much', 'estimate', 'value', 'worth', 'amount'], category: 'Tools' },
  
  // About
  { title: 'Our People', href: '/about/our-people', keywords: ['people', 'team', 'staff', 'solicitors', 'lawyers', 'parvez', 'umran', 'directors'], category: 'About' },
  { title: 'Testimonials', href: '/about/testimonials', keywords: ['testimonials', 'reviews', 'feedback', 'clients', 'success', 'stories'], category: 'About' },
];

export function searchSite(query: string): SearchPage[] {
  if (!query || query.length < 2) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 1);
  
  const results = searchPages.filter(page => {
    const titleMatch = searchTerms.some(term => page.title.toLowerCase().includes(term));
    const keywordMatch = searchTerms.some(term => 
      page.keywords.some(keyword => keyword.toLowerCase().includes(term))
    );
    const categoryMatch = searchTerms.some(term => page.category.toLowerCase().includes(term));
    
    return titleMatch || keywordMatch || categoryMatch;
  });
  
  // Sort by relevance (title matches first, then keyword matches)
  return results.sort((a, b) => {
    const aTitle = searchTerms.some(term => a.title.toLowerCase().includes(term)) ? 0 : 1;
    const bTitle = searchTerms.some(term => b.title.toLowerCase().includes(term)) ? 0 : 1;
    return aTitle - bTitle;
  }).slice(0, 10); // Limit to 10 results
}
