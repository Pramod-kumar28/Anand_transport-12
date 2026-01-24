// import React, { useState } from 'react'

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null)

//   const services = [
//     {
//       id: 'safety-systems',
//       icon: 'fas fa-shield-alt',
//       title: 'Advanced Safety Systems',
//       shortDesc: 'Comprehensive vehicle safety monitoring and real-time alert systems',
//       fullDesc: 'Our Advanced Safety Systems integrate cutting-edge technology to create multiple layers of protection for both passengers and drivers.',
//       features: [
//         'Multi-Layered Sensor Systems for hazard detection',
//         'Real-Time Driver Assistance with fatigue monitoring',
//         'High-resolution interior and exterior surveillance',
//         'Smart Emergency Response with instant alerts',
//         'Predictive Safety Analytics using AI'
//       ],
//       benefits: [
//         'Reduces accident risks by up to 60%',
//         '24/7 real-time monitoring',
//         'Early warning system for potential hazards',
//         'Automated emergency response'
//       ],
//       image: '/images/safety-systems.jpg',
//       color: 'blue'
//     },
//     {
//       id: 'vehicle-fitness',
//       icon: 'fas fa-car',
//       title: 'Vehicle Fitness Certification',
//       shortDesc: 'Thorough pre-trip inspections and certification for roadworthiness',
//       fullDesc: 'Ensure every vehicle meets the highest safety standards before every journey with our comprehensive fitness protocol.',
//       features: [
//         'Engine and mechanical system inspections',
//         'Brake and suspension verification',
//         'Tyre condition and pressure analysis',
//         'Electrical and lighting system checks',
//         'Emergency equipment readiness validation'
//       ],
//       benefits: [
//         '100% roadworthy certification',
//         'Preventive maintenance scheduling',
//         'Digital inspection reports',
//         'Compliance with safety regulations'
//       ],
//       image: '/images/vehicle-inspection.jpg',
//       color: 'green'
//     },
//     {
//       id: 'driver-training',
//       icon: 'fas fa-user-tie',
//       title: 'Driver Excellence Programs',
//       shortDesc: 'Professional development and recognition programs for drivers',
//       fullDesc: 'Empower your drivers with continuous training, recognition, and performance monitoring systems.',
//       features: [
//         'Advanced defensive driving techniques',
//         'Emergency response and first-aid training',
//         'Performance monitoring and analytics',
//         'Recognition and reward programs',
//         'Regular skill enhancement workshops'
//       ],
//       benefits: [
//         'Improved driver retention rates',
//         'Enhanced passenger satisfaction',
//         'Reduced operational risks',
//         'Professional career development'
//       ],
//       image: '/images/driver-training.jpg',
//       color: 'indigo'
//     },
//     {
//       id: 'smart-travel',
//       icon: 'fas fa-utensils',
//       title: 'Smart Travel Solutions',
//       shortDesc: 'Pre-ordered meal systems and passenger convenience features',
//       fullDesc: 'Enhance passenger comfort and convenience with our digital travel enhancement platform.',
//       features: [
//         'Pre-ordered meal booking system',
//         'Hygienic food partner verification',
//         'Scheduled meal delivery during travel',
//         'Digital journey planning tools',
//         'Real-time travel updates'
//       ],
//       benefits: [
//         'Enhanced passenger comfort',
//         'Time-saving convenience',
//         'Hygienic food options',
//         'Streamlined travel experience'
//       ],
//       image: '/images/meal-system.jpg',
//       color: 'purple'
//     }
//   ]

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: 'from-blue-500 to-blue-600',
//       green: 'from-green-500 to-green-600',
//       indigo: 'from-indigo-500 to-indigo-600',
//       purple: 'from-purple-500 to-purple-600'
//     }
//     return colors[color] || colors.blue
//   }

//   const getLightColorClasses = (color) => {
//     const colors = {
//       blue: 'bg-blue-50 border-blue-200',
//       green: 'bg-green-50 border-green-200',
//       indigo: 'bg-indigo-50 border-indigo-200',
//       purple: 'bg-purple-50 border-purple-200'
//     }
//     return colors[color] || colors.blue
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       {/* Hero Section */}
//       <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
//           <p className="text-xl text-blue-200 max-w-2xl mx-auto">
//             Comprehensive safety and mobility solutions designed to transform transportation experiences
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Discover our comprehensive suite of services designed to make travel safer, smarter, and more comfortable
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
//                 onClick={() => setSelectedService(service)}
//               >
//                 <div className={`h-2 bg-gradient-to-r ${getColorClasses(service.color)} rounded-t-2xl`}></div>
//                 <div className="p-8">
//                   <div className="flex items-start gap-6">
//                     <div className={`p-4 mt-2 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)} text-white group-hover:scale-110 transition-transform duration-300`}>
//                       <i className={`${service.icon} text-2xl`}></i>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="lg:text-2xl md:text-xl text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
//                       <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDesc}</p>
//                       <div className="flex items-center text-blue-600 font-semibold">
//                         <span>Learn More</span>
//                         <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Detail Modal */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className={`h-2 bg-gradient-to-r ${getColorClasses(selectedService.color)} rounded-t-2xl`}></div>
//             <div className="p-8">
//               <div className="flex justify-between items-start mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(selectedService.color)} text-white`}>
//                     <i className={`${selectedService.icon} text-2xl`}></i>
//                   </div>
//                   <h2 className="text-3xl font-bold text-gray-800">{selectedService.title}</h2>
//                 </div>
//                 <button
//                   onClick={() => setSelectedService(null)}
//                   className="text-gray-400 hover:text-gray-600 text-2xl"
//                 >
//                   <i className="fas fa-times"></i>
//                 </button>
//               </div>

//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 {selectedService.fullDesc}
//               </p>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//                 <div className={getLightColorClasses(selectedService.color) + " rounded-xl p-6 border"}>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
//                   <ul className="space-y-3">
//                     {selectedService.features.map((feature, index) => (
//                       <li key={index} className="flex items-start text-gray-700">
//                         <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
//                   <ul className="space-y-3">
//                     {selectedService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-start text-gray-700">
//                         <i className="fas fa-star text-yellow-500 mt-1 mr-3"></i>
//                         <span>{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h3>
//                 <p className="text-gray-600 mb-4">
//                   Contact us to learn how {selectedService.title} can transform your transportation operations.
//                 </p>
//                 <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                   Request Consultation
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Process Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 title: 'Consultation',
//                 desc: 'Understand your specific needs and challenges',
//                 icon: 'fas fa-comments'
//               },
//               {
//                 title: 'Customization',
//                 desc: 'Tailor solutions to match your requirements',
//                 icon: 'fas fa-cogs'
//               },
//               {
//                 title: 'Implementation',
//                 desc: 'Seamless integration with your operations',
//                 icon: 'fas fa-rocket'
//               },
//               {
//                 title: 'Support',
//                 desc: 'Ongoing maintenance and continuous improvement',
//                 icon: 'fas fa-headset'
//               }
//             ].map((step, index) => (
//               <div key={index} className="text-center group">
                
//                 <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <i className={`${step.icon} text-blue-600 text-xl`}></i>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {/* <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Travel Safety?</h2>
//           <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
//             Join hundreds of transportation partners who trust our solutions to protect their passengers and streamline their operations.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
//               Get Started Today
//             </button>
//             <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   )
// }

// export default Services

























// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null)
//   const navigate= useNavigate();

//   const services = [
//     {
//       id: 'safety-systems',
//       emoji: '🛡️',
//       title: 'Advanced Safety Systems',
//       shortDesc: 'Comprehensive vehicle safety monitoring and real-time alert systems',
//       fullDesc: 'Our Advanced Safety Systems integrate cutting-edge technology to create multiple layers of protection for both passengers and drivers.',
//       features: [
//         'Multi-Layered Sensor Systems for hazard detection',
//         'Real-Time Driver Assistance with fatigue monitoring',
//         'High-resolution interior and exterior surveillance',
//         'Smart Emergency Response with instant alerts',
//         'Predictive Safety Analytics using AI'
//       ],
//       benefits: [
//         'Reduces accident risks by up to 60%',
//         '24/7 real-time monitoring',
//         'Early warning system for potential hazards',
//         'Automated emergency response'
//       ],
//       image: '/images/safety-systems.jpg',
//       color: 'blue'
//     },
//     {
//       id: 'vehicle-fitness',
//       emoji: '🚗',
//       title: 'Vehicle Fitness Certification',
//       shortDesc: 'Thorough pre-trip inspections and certification for roadworthiness',
//       fullDesc: 'Ensure every vehicle meets the highest safety standards before every journey with our comprehensive fitness protocol.',
//       features: [
//         'Engine and mechanical system inspections',
//         'Brake and suspension verification',
//         'Tyre condition and pressure analysis',
//         'Electrical and lighting system checks',
//         'Emergency equipment readiness validation'
//       ],
//       benefits: [
//         '100% roadworthy certification',
//         'Preventive maintenance scheduling',
//         'Digital inspection reports',
//         'Compliance with safety regulations'
//       ],
//       image: '/images/vehicle-inspection.jpg',
//       color: 'green'
//     },
//     {
//       id: 'driver-training',
//       emoji: '👨‍✈️',
//       title: 'Driver Excellence Programs',
//       shortDesc: 'Professional development and recognition programs for drivers',
//       fullDesc: 'Empower your drivers with continuous training, recognition, and performance monitoring systems.',
//       features: [
//         'Advanced defensive driving techniques',
//         'Emergency response and first-aid training',
//         'Performance monitoring and analytics',
//         'Recognition and reward programs',
//         'Regular skill enhancement workshops'
//       ],
//       benefits: [
//         'Improved driver retention rates',
//         'Enhanced passenger satisfaction',
//         'Reduced operational risks',
//         'Professional career development'
//       ],
//       image: '/images/driver-training.jpg',
//       color: 'indigo'
//     },
//     {
//       id: 'smart-travel',
//       emoji: '🍱',
//       title: 'Smart Travel Solutions',
//       shortDesc: 'Pre-ordered meal systems and passenger convenience features',
//       fullDesc: 'Enhance passenger comfort and convenience with our digital travel enhancement platform.',
//       features: [
//         'Pre-ordered meal booking system',
//         'Hygienic food partner verification',
//         'Scheduled meal delivery during travel',
//         'Digital journey planning tools',
//         'Real-time travel updates'
//       ],
//       benefits: [
//         'Enhanced passenger comfort',
//         'Time-saving convenience',
//         'Hygienic food options',
//         'Streamlined travel experience'
//       ],
//       image: '/images/meal-system.jpg',
//       color: 'purple'
//     },
//     {
//       id: 'predictive-analytics',
//       emoji: '🧠',
//       title: 'Predictive Safety Analytics',
//       shortDesc: 'AI-powered risk assessment and hazard prediction systems',
//       fullDesc: 'Our Predictive Safety Analytics leverage artificial intelligence to identify potential risks before they escalate, providing proactive safety measures and early warning systems.',
//       features: [
//         'AI-based hazard identification and risk assessment',
//         'Real-time route analysis for potential dangers',
//         'Behavioral pattern recognition for risk prediction',
//         'Automated risk heatmaps by route and time',
//         'Proactive intervention recommendations'
//       ],
//       benefits: [
//         'Early detection of potential safety issues',
//         'Reduced incident rates through prevention',
//         'Data-driven safety decision making',
//         'Continuous improvement through machine learning'
//       ],
//       image: '/images/predictive-analytics.jpg',
//       color: 'orange'
//     },
//     {
//       id: 'emergency-response',
//       emoji: '🚨',
//       title: 'Smart Emergency Response',
//       shortDesc: 'Automated emergency triggers and rapid response coordination',
//       fullDesc: 'Our Smart Emergency Response system automatically activates during critical situations, connecting vehicles, dispatch centers, hospitals, and authorities for immediate coordinated action.',
//       features: [
//         'Automated incident detection and alert triggering',
//         'Instant GPS and status sharing during emergencies',
//         'Multi-level escalation workflows for critical cases',
//         'Integrated communication with emergency services',
//         'Real-time coordination between all stakeholders'
//       ],
//       benefits: [
//         'Reduced emergency response times',
//         'Automated coordination during crises',
//         'Comprehensive incident documentation',
//         'Seamless integration with existing emergency systems'
//       ],
//       image: '/images/emergency-response.jpg',
//       color: 'cyan'
//     },
//     {
//       id: 'surveillance-monitoring',
//       emoji: '📹',
//       title: '360° Monitoring & Surveillance',
//       shortDesc: 'Complete interior and exterior coverage with intelligent analytics',
//       fullDesc: 'Our comprehensive surveillance system provides complete visibility with high-resolution cameras and intelligent analytics for enhanced security and evidence collection.',
//       features: [
//         'High-resolution 360° camera coverage',
//         'Intelligent video analytics for anomaly detection',
//         'Event-based video snippet generation',
//         'Privacy-aligned monitoring policies',
//         'Cloud-based storage and retrieval system'
//       ],
//       benefits: [
//         'Complete journey visibility and security',
//         'Automated incident evidence collection',
//         'Enhanced passenger and driver safety',
//         'Reduced liability through comprehensive documentation'
//       ],
//       image: '/images/surveillance-system.jpg',
//       color: 'indigo'
//     },
//     {
//       id: 'safety-compliance',
//       emoji: '📋',
//       title: 'Safety Compliance & Reporting',
//       shortDesc: 'Regulatory compliance management and automated reporting systems',
//       fullDesc: 'Ensure full compliance with transportation safety regulations through our automated reporting, audit trails, and compliance management platform.',
//       features: [
//         'Automated regulatory compliance tracking',
//         'Digital inspection and audit trail generation',
//         'Real-time compliance status monitoring',
//         'Automated report generation for authorities',
//         'ISO 9001:2015 aligned safety operations'
//       ],
//       benefits: [
//         'Simplified regulatory compliance',
//         'Reduced administrative workload',
//         'Audit-ready documentation at all times',
//         'Continuous compliance monitoring'
//       ],
//       image: '/images/compliance-reporting.jpg',
//       color: 'teal'
//     },
//     {
//       id: 'passenger-safety',
//       emoji: '👥',
//       title: 'Passenger Safety Education',
//       shortDesc: 'Safety awareness programs and emergency preparedness training',
//       fullDesc: 'Empower passengers with safety knowledge and emergency response training to create a safety-conscious travel environment.',
//       features: [
//         'Interactive safety demonstration programs',
//         'Emergency evacuation procedure training',
//         'Digital safety information portals',
//         'Multi-language safety materials',
//         'Regular safety awareness campaigns'
//       ],
//       benefits: [
//         'Enhanced passenger safety awareness',
//         'Reduced panic during emergencies',
//         'Improved emergency response coordination',
//         'Increased passenger confidence in travel safety'
//       ],
//       image: '/images/passenger-safety.jpg',
//       color: 'purple'
//     }
//   ]

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: 'from-blue-500 to-blue-600',
//       green: 'from-green-500 to-green-600',
//       indigo: 'from-indigo-500 to-indigo-600',
//       purple: 'from-purple-500 to-purple-600',
//       orange: 'from-orange-500 to-orange-600',
//       cyan: 'from-cyan-500 to-cyan-600',
//       teal: 'from-teal-500 to-teal-600'
//     }
//     return colors[color] || colors.blue
//   }

//   const getLightColorClasses = (color) => {
//     const colors = {
//       blue: 'bg-blue-50 border-blue-200',
//       green: 'bg-green-50 border-green-200',
//       indigo: 'bg-indigo-50 border-indigo-200',
//       purple: 'bg-purple-50 border-purple-200',
//       orange: 'bg-orange-50 border-orange-200',
//       cyan: 'bg-cyan-50 border-cyan-200',
//       teal: 'bg-teal-50 border-teal-200'
//     }
//     return colors[color] || colors.blue
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       {/* Hero Section */}
//       <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 .fade-in">Our Services 🛠️</h1>
//           <p className="text-xl text-blue-200 max-w-2xl mx-auto .fade-in ">
//             Comprehensive safety and mobility solutions designed to transform transportation experiences
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-800 mb-4">What We Offer ✨</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Discover our comprehensive suite of services designed to make travel safer, smarter, and more comfortable
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group h-full flex flex-col"
//                 onClick={() => setSelectedService(service)}
//               >
//                 <div className={`h-2 bg-gradient-to-r ${getColorClasses(service.color)} rounded-t-2xl`}></div>
//                 <div className="p-6 flex-1 flex flex-col">
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className={`p-3 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0 flex items-center justify-center w-12 h-12`}>
//                       <span className="text-xl">{service.emoji}</span>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//                       <p className="text-gray-600 text-sm leading-relaxed">{service.shortDesc}</p>
//                     </div>
//                   </div>
//                   <div className="mt-auto flex items-center text-blue-600 font-semibold text-sm">
//                     <span>Learn More</span>
//                     <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Detail Modal */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className={`h-2 bg-gradient-to-r ${getColorClasses(selectedService.color)} rounded-t-2xl`}></div>
//             <div className="p-4">
//               <div className="flex justify-between items-start mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(selectedService.color)} text-white flex items-center justify-center w-12 h-12`}>
//                     <span className="text-2xl">{selectedService.emoji}</span>
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
//                 </div>
//                 <button
//                   onClick={() => setSelectedService(null)}
//                   className="text-gray-400 hover:text-gray-600 text-2xl"
//                 >
//                   <i className="fas fa-times"></i>
//                 </button>
//               </div>

//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 {selectedService.fullDesc}
//               </p>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//                 <div className={getLightColorClasses(selectedService.color) + " rounded-xl p-3 border"}>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features 📋</h3>
//                   <ul className="space-y-3">
//                     {selectedService.features.map((feature, index) => (
//                       <li key={index} className="flex items-start text-gray-700">
//                         <span className="text-green-500 mt-1 mr-3">✅</span>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits ⭐</h3>
//                   <ul className="space-y-3">
//                     {selectedService.benefits.map((benefit, index) => (
//                       <li key={index} className="flex items-start text-gray-700">
//                         <span className="text-yellow-500 mt-1 mr-3">🌟</span>
//                         <span>{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-3 border border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Get Started? 🚀</h3>
//                 <p className="text-gray-600 mb-4">
//                   Contact us to learn how {selectedService.title} can transform your transportation operations.
//                 </p>
//                 <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105" onClick={()=>navigate('/contact')}>
//                   Request Consultation 📞
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Process Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Process</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 title: 'Consultation',
//                 desc: 'Understand your specific needs and challenges',
//                 emoji: '💬'
//               },
//               {
//                 title: 'Customization',
//                 desc: 'Tailor solutions to match your requirements',
//                 emoji: '⚙️'
//               },
//               {
//                 title: 'Implementation',
//                 desc: 'Seamless integration with your operations',
//                 emoji: '🚀'
//               },
//               {
//                 title: 'Support',
//                 desc: 'Ongoing maintenance and continuous improvement',
//                 emoji: '📱'
//               }
//             ].map((step, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-xl">{step.emoji}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
//                 <p className="text-gray-600">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Travel Safety? 🛡️</h2>
//           <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
//             Join hundreds of transportation partners who trust our solutions to protect their passengers and streamline their operations.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" onClick={() => navigate('/contact')}>
//               Get Started Today 🚀
//             </button>
            
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Animation Styles */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slide-in-left {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes slide-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         .fade-in {
//           opacity: 0;
//           animation: fade-in-up 0.8s ease-out forwards;
//         }
        
//         .slide-in-left {
//           opacity: 0;
//           animation: slide-in-left 0.8s ease-out forwards;
//         }
        
//         .slide-in-right {
//           opacity: 0;
//           animation: slide-in-right 0.8s ease-out forwards;
//         }
        
//         .scale-in {
//           opacity: 0;
//           animation: scale-in 0.6s ease-out forwards;
//         }
        
//         .visible {
//           opacity: 1;
//         }
        
//         .animation-delay-300 {
//           animation-delay: 0.3s;
//         }
        
//         .animation-delay-500 {
//           animation-delay: 0.5s;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         /* Hover effects */
//         .group:hover .group-hover\:scale-110 {
//           transform: scale(1.1);
//         }
        
//         .group:hover .group-hover\:-translate-y-2 {
//           transform: translateY(-0.5rem);
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Services



















import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const navigate = useNavigate();

  const services = [
    {
      id: 'safety-systems',
      icon: 'fas fa-shield-alt',
      title: 'Advanced Safety Systems',
      shortDesc: 'Comprehensive multi-layered protection with real-time hazard detection, driver assistance, and predictive analytics to prevent accidents before they occur.',
      fullDesc: 'Our Advanced Safety Systems integrate cutting-edge technology to create multiple layers of protection for both passengers and drivers.',
      features: [
        'Multi-Layered Sensor Systems for hazard detection',
        'Real-Time Driver Assistance with fatigue monitoring',
        'High-resolution interior and exterior surveillance',
        'Smart Emergency Response with instant alerts',
        'Predictive Safety Analytics using AI'
      ],
      benefits: [
        'Reduces accident risks by up to 60%',
        '24/7 real-time monitoring',
        'Early warning system for potential hazards',
        'Automated emergency response'
      ],
      image: '/images/safety-systems.jpg',
      color: 'blue'
    },
    {
      id: 'vehicle-fitness',
      icon: 'fas fa-clipboard-check',
      title: 'Vehicle Fitness Certification',
      shortDesc: 'Thorough pre-trip inspections with detailed certification processes ensuring 100% roadworthiness and compliance with all safety regulations.',
      fullDesc: 'Ensure every vehicle meets the highest safety standards before every journey with our comprehensive fitness protocol.',
      features: [
        'Engine and mechanical system inspections',
        'Brake and suspension verification',
        'Tyre condition and pressure analysis',
        'Electrical and lighting system checks',
        'Emergency equipment readiness validation'
      ],
      benefits: [
        '100% roadworthy certification',
        'Preventive maintenance scheduling',
        'Digital inspection reports',
        'Compliance with safety regulations'
      ],
      image: '/images/vehicle-inspection.jpg',
      color: 'green'
    },
    {
      id: 'driver-training',
      icon: 'fas fa-user-graduate',
      title: 'Driver Excellence Programs',
      shortDesc: 'Comprehensive professional development including defensive driving, emergency response training, and performance monitoring systems.',
      fullDesc: 'Empower your drivers with continuous training, recognition, and performance monitoring systems.',
      features: [
        'Advanced defensive driving techniques',
        'Emergency response and first-aid training',
        'Performance monitoring and analytics',
        'Recognition and reward programs',
        'Regular skill enhancement workshops'
      ],
      benefits: [
        'Improved driver retention rates',
        'Enhanced passenger satisfaction',
        'Reduced operational risks',
        'Professional career development'
      ],
      image: '/images/driver-training.jpg',
      color: 'indigo'
    },
    {
      id: 'smart-travel',
      icon: 'fas fa-concierge-bell',
      title: 'Smart Travel Solutions',
      shortDesc: 'Digital platform for pre-ordered meals, journey planning tools, and real-time travel updates to enhance passenger comfort and convenience.',
      fullDesc: 'Enhance passenger comfort and convenience with our digital travel enhancement platform.',
      features: [
        'Pre-ordered meal booking system',
        'Hygienic food partner verification',
        'Scheduled meal delivery during travel',
        'Digital journey planning tools',
        'Real-time travel updates'
      ],
      benefits: [
        'Enhanced passenger comfort',
        'Time-saving convenience',
        'Hygienic food options',
        'Streamlined travel experience'
      ],
      image: '/images/meal-system.jpg',
      color: 'purple'
    },
    {
      id: 'predictive-analytics',
      icon: 'fas fa-brain',
      title: 'Predictive Safety Analytics',
      shortDesc: 'AI-powered risk assessment systems that identify potential hazards before they escalate using behavioral pattern recognition.',
      fullDesc: 'Our Predictive Safety Analytics leverage artificial intelligence to identify potential risks before they escalate, providing proactive safety measures and early warning systems.',
      features: [
        'AI-based hazard identification and risk assessment',
        'Real-time route analysis for potential dangers',
        'Behavioral pattern recognition for risk prediction',
        'Automated risk heatmaps by route and time',
        'Proactive intervention recommendations'
      ],
      benefits: [
        'Early detection of potential safety issues',
        'Reduced incident rates through prevention',
        'Data-driven safety decision making',
        'Continuous improvement through machine learning'
      ],
      image: '/images/predictive-analytics.jpg',
      color: 'orange'
    },
    {
      id: 'emergency-response',
      icon: 'fas fa-ambulance',
      title: 'Smart Emergency Response',
      shortDesc: 'Automated emergency coordination system that instantly connects vehicles with dispatch centers, hospitals, and emergency services.',
      fullDesc: 'Our Smart Emergency Response system automatically activates during critical situations, connecting vehicles, dispatch centers, hospitals, and authorities for immediate coordinated action.',
      features: [
        'Automated incident detection and alert triggering',
        'Instant GPS and status sharing during emergencies',
        'Multi-level escalation workflows for critical cases',
        'Integrated communication with emergency services',
        'Real-time coordination between all stakeholders'
      ],
      benefits: [
        'Reduced emergency response times',
        'Automated coordination during crises',
        'Comprehensive incident documentation',
        'Seamless integration with existing emergency systems'
      ],
      image: '/images/emergency-response.jpg',
      color: 'cyan'
    },
    {
      id: 'surveillance-monitoring',
      icon: 'fas fa-video',
      title: '360° Monitoring & Surveillance',
      shortDesc: 'Complete interior and exterior coverage with intelligent video analytics for enhanced security and automated incident evidence collection.',
      fullDesc: 'Our comprehensive surveillance system provides complete visibility with high-resolution cameras and intelligent analytics for enhanced security and evidence collection.',
      features: [
        'High-resolution 360° camera coverage',
        'Intelligent video analytics for anomaly detection',
        'Event-based video snippet generation',
        'Privacy-aligned monitoring policies',
        'Cloud-based storage and retrieval system'
      ],
      benefits: [
        'Complete journey visibility and security',
        'Automated incident evidence collection',
        'Enhanced passenger and driver safety',
        'Reduced liability through comprehensive documentation'
      ],
      image: '/images/surveillance-system.jpg',
      color: 'indigo'
    },
    {
      id: 'safety-compliance',
      icon: 'fas fa-file-contract',
      title: 'Safety Compliance & Reporting',
      shortDesc: 'Automated regulatory compliance management with digital audit trails and real-time compliance status monitoring.',
      fullDesc: 'Ensure full compliance with transportation safety regulations through our automated reporting, audit trails, and compliance management platform.',
      features: [
        'Automated regulatory compliance tracking',
        'Digital inspection and audit trail generation',
        'Real-time compliance status monitoring',
        'Automated report generation for authorities',
        'ISO 9001:2015 aligned safety operations'
      ],
      benefits: [
        'Simplified regulatory compliance',
        'Reduced administrative workload',
        'Audit-ready documentation at all times',
        'Continuous compliance monitoring'
      ],
      image: '/images/compliance-reporting.jpg',
      color: 'teal'
    },
    {
      id: 'passenger-safety',
      icon: 'fas fa-users',
      title: 'Passenger Safety Education',
      shortDesc: 'Interactive safety awareness programs and emergency preparedness training to create safety-conscious travel environments.',
      fullDesc: 'Empower passengers with safety knowledge and emergency response training to create a safety-conscious travel environment.',
      features: [
        'Interactive safety demonstration programs',
        'Emergency evacuation procedure training',
        'Digital safety information portals',
        'Multi-language safety materials',
        'Regular safety awareness campaigns'
      ],
      benefits: [
        'Enhanced passenger safety awareness',
        'Reduced panic during emergencies',
        'Improved emergency response coordination',
        'Increased passenger confidence in travel safety'
      ],
      image: '/images/passenger-safety.jpg',
      color: 'purple'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      indigo: 'from-indigo-500 to-indigo-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      cyan: 'from-cyan-500 to-cyan-600',
      teal: 'from-teal-500 to-teal-600'
    }
    return colors[color] || colors.blue
  }

  const getLightColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200',
      green: 'bg-green-50 border-green-200',
      indigo: 'bg-indigo-50 border-indigo-200',
      purple: 'bg-purple-50 border-purple-200',
      orange: 'bg-orange-50 border-orange-200',
      cyan: 'bg-cyan-50 border-cyan-200',
      teal: 'bg-teal-50 border-teal-200'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 .fade-in">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto .fade-in">
            Comprehensive safety and mobility solutions designed to transform transportation experiences
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of services designed to make travel safer, smarter, and more comfortable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group h-full flex flex-col min-h-[220px]"
                onClick={() => setSelectedService(service)}
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0 flex items-center justify-center w-14 h-14`}>
                      <i className={`${service.icon} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{service.shortDesc}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center text-blue-600 font-semibold text-sm">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${getColorClasses(selectedService.color)} text-white flex items-center justify-center w-16 h-16`}>
                    <i className={`${selectedService.icon} text-2xl`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className={getLightColorClasses(selectedService.color) + " rounded-xl p-6 border"}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-list-check text-blue-600"></i>
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <i className="fas fa-star text-yellow-500"></i>
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <i className="fas fa-circle-check text-yellow-500 mt-1 mr-3"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us to learn how {selectedService.title} can transform your transportation operations.
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2" onClick={() => navigate('/contact')}>
                  <i className="fas fa-phone-alt"></i>
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Consultation',
                desc: 'Understand your specific needs and challenges to develop customized solutions',
                icon: 'fas fa-comments'
              },
              {
                title: 'Customization',
                desc: 'Tailor solutions precisely to match your operational requirements and goals',
                icon: 'fas fa-cogs'
              },
              {
                title: 'Implementation',
                desc: 'Seamless integration with minimal disruption to your existing operations',
                icon: 'fas fa-rocket'
              },
              {
                title: 'Support',
                desc: 'Ongoing maintenance, updates, and continuous improvement support',
                icon: 'fas fa-headset'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Travel Safety?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of transportation partners who trust our solutions to protect their passengers and streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" onClick={() => navigate('/contact')}>
              <i className="fas fa-rocket"></i>
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services