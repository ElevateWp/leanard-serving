export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }
const phone = '+44 7999 496889';
const businessId = 'lenard-property-services';
const projectPhoto = '/images/plumbing-technician.jpg';
export const CLINIC_INFO: ClinicInformation = {
  name: 'Lenard Property Services', legalName: 'Lenard Property Services', tagline: 'Reliable plumbing, bathroom installations and property maintenance in Erith.',
  primaryLocation: { street: 'Bramble Croft', suite: '', city: 'Erith', state: '', postalCode: 'DA8 1BX', country: 'GB', directions: 'Bramble Croft, Erith DA8 1BX, United Kingdom', landmarks: 'Serving Erith and nearby areas. Call to check availability for your property.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Plumbing and bathroom work', 'Shower installation', 'Reliable, high-quality workmanship'],
  schedule: [
    { day: 'Monday', hours: '7:30 AM–7 PM' }, { day: 'Tuesday', hours: '7:30 AM–7 PM' }, { day: 'Wednesday', hours: '7:30 AM–7 PM' },
    { day: 'Thursday', hours: '7:30 AM–7 PM' }, { day: 'Friday', hours: '7:30 AM–5 PM' }, { day: 'Saturday', hours: '9 AM–4 PM' }, { day: 'Sunday', hours: '9 AM–4 PM' },
  ],
  verifiedStats: [
    { value: 6, suffix: '+', label: 'Customer reviews', description: 'Feedback shared on Google for Lenard Property Services.' },
    { value: 1, suffix: '', label: 'Local property service', description: 'Plumbing and home improvement work in Erith and nearby areas.' },
  ],
  accreditations: [],
};
export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'Lenard', title: 'Property services contractor',
  qualifications: 'Home contractor', specialization: 'Plumbing, shower installation and property improvements', experienceYears: 0,
  bio: 'Lenard Property Services helps homeowners with plumbing, shower installations and property improvement work. Customers mention professional service, realistic timeframes, clear communication and careful workmanship.',
  philosophy: 'Clear communication, realistic timeframes and care in every job.',
  education: [], memberships: [], specialties: ['Plumbing', 'Shower installation', 'Bathroom improvements', 'Home repairs', 'Property maintenance'],
  image: projectPhoto, warmImage: '/images/plumbing-repair.jpg',
}];
const serviceEntries = [
  { slug: 'plumbing-services', name: 'Plumbing services', description: 'Get help with plumbing work around your home. Describe the issue or installation you need and Lenard will discuss the next steps, timing and quote.', focus: ['You need a plumbing repair or installation', 'You want to plan plumbing work in your home', 'You would like clear timeframes before work begins'] },
  { slug: 'shower-installation', name: 'Shower installation', description: 'Lenard Property Services installs new showers with a professional approach and realistic timeframes. Get in touch to discuss your bathroom and the installation you have in mind.', focus: ['You are replacing an old shower', 'You are planning a bathroom improvement', 'You want to discuss installation and timing'] },
  { slug: 'bathroom-plumbing', name: 'Bathroom plumbing', description: 'Discuss plumbing work for a bathroom update, new fittings or a shower installation. The work and quote are tailored to your property and agreed requirements.', focus: ['You are updating a bathroom', 'You need plumbing for new bathroom fittings', 'You are planning a shower installation'] },
  { slug: 'leak-and-pipe-repairs', name: 'Leak and pipe repairs', description: 'If you have noticed a leak or a plumbing problem, contact Lenard to explain what is happening and discuss repair options for your property.', focus: ['You have noticed a water leak', 'A pipe or plumbing fitting needs attention', 'You want to understand the repair options'] },
  { slug: 'tap-and-toilet-repairs', name: 'Tap and toilet repairs', description: 'Get in touch to discuss a faulty tap, toilet or other plumbing fitting. Lenard can talk through the work needed and provide a realistic timeframe.', focus: ['A tap is dripping or not working properly', 'A toilet needs repair or replacement', 'You need help with a household plumbing fitting'] },
  { slug: 'hot-water-systems', name: 'Hot water systems', description: 'Talk through a hot water issue or a planned system replacement. Contact Lenard to discuss your current setup, the property and suitable next steps.', focus: ['Your hot water is not working as expected', 'You are considering a hot water system replacement', 'You want to discuss plumbing options for your home'] },
  { slug: 'property-maintenance', name: 'Property maintenance', description: 'Arrange practical maintenance and repair work around your home. Share the jobs you need help with and agree the scope and timing before work begins.', focus: ['You have household repairs to arrange', 'You are preparing a list of maintenance jobs', 'You want dependable help with work around your property'] },
  { slug: 'home-improvements', name: 'Home improvements', description: 'Planning an improvement to your home? Discuss the work, your priorities and the next steps with Lenard Property Services.', focus: ['You are planning an improvement at home', 'You need help coordinating a property project', 'You want to discuss the work before requesting a quote'] },
];
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
 const overview = 'Lenard Property Services provides home contractor services in Erith and nearby areas. Contact Lenard to describe your property, discuss the work you need and request a quote.';
 const steps = [
  ['Discuss your project', 'First contact', 'Tell Lenard about your property and the work you have in mind.', 'Share what you have noticed, the fittings involved and any access details.'],
  ['Review the work', 'By arrangement', 'Discuss your property and the service options that may suit it.', 'Lenard can explain the proposed scope and answer your questions.'],
  ['Receive a quote', 'After discussing the scope', 'Review the quote and agree on the work before it begins.', 'Pricing and timing depend on the property and agreed work.'],
  ['Complete the agreed work', 'As arranged', 'Lenard carries out the agreed property service.', 'Ask about the work completed and any next steps.'],
 ];
 return {
  ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' in Erith and nearby areas.', clinicalExplanation: overview,
  whoNeeds: entry.focus,
  benefits: ['Clear communication from enquiry to completion', 'Realistic timeframes for the work', 'Careful, high-quality workmanship'],
  indications: entry.focus.map(condition => ({ condition, explanation: 'Contact Lenard to describe your property and discuss whether this service suits the work you need.' })),
  procedureSteps: steps.map(([title,duration,description,clinicalDetails], index) => ({ stepNumber:index+1,title,duration,description,clinicalDetails })),
  recoveryTimeline: [
   { period: 'Before work begins', expectedSensations: 'Talk through your property and the work you have in mind.', careProtocol: 'Confirm the scope, quote, access and timing with Lenard.' },
   { period: 'During the work', expectedSensations: 'The agreed property work is carried out.', careProtocol: 'Follow any access or preparation guidance provided.' },
   { period: 'After the work', expectedSensations: 'Review the completed work.', careProtocol: 'Contact Lenard Property Services if you have questions about the job.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Existing fittings and property condition', 'Access and preparation', 'The agreed work scope'], whatIsIncluded: ['Discussion of your property and requested work', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on your property and the agreed scope. Contact Lenard for a quote.' },
  beforeAfterCase: { category: entry.name, clinicalContext: 'Home improvement project imagery. Contact Lenard to discuss the work you need.', beforeLabel: 'Before work', afterLabel: 'Completed work', beforeImage: '/images/plumbing-pipes.jpg', afterImage: '/images/plumbing-repair.jpg', timeframe: 'Timing depends on the agreed project.' },
  assignedDentistId: businessId,
  faqs: [
   { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to discuss your property, the work required and availability.' },
   { question: 'What areas do you service?', answer: 'Lenard Property Services is based in Erith. Call to check availability for your area.' },
   { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe the work and request a quote.' },
   { question: 'When can the work be done?', answer: 'Call Lenard to discuss current availability and a suitable time.' },
  ],
 };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition {id:string;title:string;urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)';symptoms:string[];immediateAction:string[];clinicTreatment:string;}
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost {slug:string;title:string;category:string;readTime:string;publishDate:string;lastUpdated:string;authorId:string;excerpt:string;leadImage:string;relatedServiceSlug:string;content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]};}
export const BLOG_POSTS: BlogPost[] = [
 { slug:'planning-a-shower-installation', title:'Planning a new shower installation', category:'Bathroom improvements', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'A few practical details to discuss when planning a new shower for your home.', leadImage:projectPhoto, relatedServiceSlug:'shower-installation', content:{ intro:'A new shower is a useful bathroom improvement. Discuss your existing bathroom, the installation you have in mind and a realistic timeframe before work begins.', sections:[{heading:'Share the bathroom details',body:'Describe the existing shower, fittings and any changes you would like to make.'},{heading:'Agree on the scope',body:'Before work begins, discuss preparation, access, timing and the quote.'}] } },
 { slug:'what-to-do-about-a-plumbing-leak', title:'What to do when you notice a plumbing leak', category:'Plumbing', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'What to note and discuss when you find a leak in your home.', leadImage:'/images/plumbing-repair.jpg', relatedServiceSlug:'leak-and-pipe-repairs', content:{ intro:'If you notice a leak, describe where it is and when it happens when you contact a contractor. If safe, keep the area clear and follow the shut-off instructions for your property.', sections:[{heading:'Note what you can see',body:'Share the location of the leak, any affected fittings and whether it is ongoing.'},{heading:'Discuss the repair',body:'Ask about the proposed work, access, timing and quote before the repair begins.'}] } },
 { slug:'planning-home-maintenance', title:'Planning home maintenance work', category:'Property maintenance', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'A simple way to prepare for a property maintenance visit.', leadImage:'/images/plumbing-pipes.jpg', relatedServiceSlug:'property-maintenance', content:{ intro:'A clear list of the work you need can make it easier to discuss your property maintenance project and agree on next steps.', sections:[{heading:'List the jobs',body:'Note each repair or improvement you would like to discuss and where it is in the property.'},{heading:'Agree on the scope',body:'Talk through access, timing and the quote so you know what is included.'}] } },
];
export const CUSTOMER_REVIEWS: {name:string;date:string;text:string;rating:number}[] = [
 { name:'Chawhan Nemdharry', date:'8 months ago', rating:5, text:'Amazing service from this company. Ensures he completes all work to the highest standards. I would highly recommend if you are looking for a reliable skilled person.' },
 { name:"Sophie O'Brien", date:'3 months ago', rating:5, text:'Lenard fitted a new shower and charged a very reasonable price. He was professional and gave realistic timeframes of when he could attend. Really happy with the quality of work and would recommend and use again.' },
 { name:'Wendy Freeman', date:'8 months ago', rating:5, text:'What a joy to work with this company. Fantastic communication, high quality workmanship. An honest, reliable team which I would recommend highly!' },
 { name:'Tristin', date:'8 months ago', rating:5, text:'Amazing work in our home, always on time and the professionalism was high-quality! I would definitely recommend!' },
 { name:'Dino D', date:'8 months ago', rating:5, text:'Attentive and meticulous.' },
];
