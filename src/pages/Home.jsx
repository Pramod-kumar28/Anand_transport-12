// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['hero', 'about', 'safety', 'vehicle', 'driver', 'meals', 'promise'];
//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top < window.innerHeight - 100) {
//             setIsVisible(prev => ({ ...prev, [section]: true }));
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white mt-16">
//       {/* Hero Section */}
//       <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400 rounded-full filter blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//         </div>

//         <div className="container mx-auto text-center relative z-10">
//           <div 
//             className={`max-w-4xl mx-auto transition-all duration-700 ${
//               isVisible.hero ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
           
            
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">
//               Anand Technology <span className="text-amber-500">& Safety</span>
//             </h1>
            
//             <p className="text-md md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
//               Redefining Travel Safety Through Innovation, Monitoring, and Human Excellence
//             </p>
            
//             <p className="text-sm md:text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
//               We are committed to transforming the transportation sector through intelligent safety solutions, 
//               robust vehicle monitoring systems, and a strong emphasis on human-driven responsibility.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
//               <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md">
//                 Explore Solutions
//               </button>
//               <button className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//           <div className="animate-bounce">
//             <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
//               <div className="w-1 h-2 bg-white/70 rounded-full mt-2"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="py-12 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div 
//             className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
//               isVisible.about ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
//             <div className="text-center mb-8 md:mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
//                 About Us
//               </h2>
//               <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
//             </div>
            
//             <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
//               <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
//                 Anand Technology & Safety is committed to transforming the transportation sector 
//                 through intelligent safety solutions, robust vehicle monitoring systems, and a strong 
//                 emphasis on human-driven responsibility. We focus on elevating safety standards, 
//                 enhancing passenger confidence, and ensuring a smarter, more reliable travel experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Safety Systems Section */}
//       <section id="safety" className="py-12 md:py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div 
//             className={`transition-all duration-700 delay-300 ${
//               isVisible.safety ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
//             <div className="text-center mb-8 md:mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
//                 Advanced Transport Safety Systems
//               </h2>
//               <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
//               <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
//                 We integrate innovative technologies into buses and passenger vehicles to minimize 
//                 risks and maintain the highest level of operational safety.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
//               {[
//                 {
//                   icon: 'fas fa-sensor',
//                   title: 'Multi-Layered Sensor Systems',
//                   desc: 'Installed throughout the vehicle to identify mechanical issues, detect hazards, and provide early-warning alerts.'
//                 },
//                 {
//                   icon: 'fas fa-user-shield',
//                   title: 'Real-Time Driver Assistance',
//                   desc: 'Notifications for fatigue, overspeed, harsh braking, lane deviation, and collision risks.'
//                 },
//                 {
//                   icon: 'fas fa-video',
//                   title: 'Monitoring & Surveillance',
//                   desc: 'High-resolution interior and exterior cameras for complete visibility and enhanced passenger security.'
//                 },
//                 {
//                   icon: 'fas fa-bell',
//                   title: 'Smart Emergency Response',
//                   desc: 'Automated triggers that notify emergency contacts and support teams during critical moments.'
//                 },
//                 {
//                   icon: 'fas fa-brain',
//                   title: 'Predictive Safety Analytics',
//                   desc: 'AI-enabled insights to prevent accidents before they occur.'
//                 }
//               ].map((feature, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-lg p-4 md:p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="text-amber-500 mb-3">
//                     <i className={`${feature.icon} text-xl`}></i>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center">
//               <div className="inline-block bg-blue-50 rounded-lg px-6 py-4 border border-blue-200">
//                 <p className="text-gray-700 text-sm md:text-base">
//                   "Our goal is to ensure that every journey is guided by intelligent systems designed to protect passengers at all times."
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vehicle Fitness Section */}
//       <section id="vehicle" className="py-12 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div 
//             className={`transition-all duration-700 delay-400 ${
//               isVisible.vehicle ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
//                   Comprehensive Vehicle Fitness Protocol
//                 </h2>
//                 <div className="w-16 h-1 bg-amber-500 mb-4 md:mb-6"></div>
//                 <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
//                   Before every trip, we perform a detailed vehicle assessment to guarantee 
//                   roadworthiness and safety.
//                 </p>
                
//                 <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3 md:mb-4">Pre-Tour Checks Include:</h3>
//                   <ul className="space-y-2">
//                     {[
//                       'Engine and mechanical inspections',
//                       'Brake and suspension verification',
//                       'Sensor calibration',
//                       'Tyre condition and pressure checks',
//                       'Electrical and lighting inspection',
//                       'Emergency equipment readiness'
//                     ].map((check, index) => (
//                       <li key={index} className="flex items-start text-gray-700">
//                         <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                         <span className="text-sm">{check}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
              
//               <div>
//                 <div className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-100">
//                   <div className="text-center">
//                     <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <i className="fas fa-certificate text-amber-600 text-xl"></i>
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-3">Quality Certified</h3>
//                     <p className="text-gray-600 text-sm">
//                       We certify the vehicle's condition before every tour, ensuring it meets strict safety benchmarks.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Driver Program Section */}
//       <section id="driver" className="py-12 md:py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div 
//             className={`transition-all duration-700 delay-500 ${
//               isVisible.driver ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
//             <div className="text-center mb-8 md:mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
//                 Driver Recognition & Responsibility
//               </h2>
//               <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
//               <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
//                 We acknowledge that the driver is the primary protector of every passenger. His 
//                 attention, discipline, and professionalism determine the quality and safety of the journey.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
//               {[
//                 {
//                   icon: 'fas fa-award',
//                   title: 'Recognition Programs',
//                   desc: 'We honor drivers for outstanding service, safe driving, punctuality, and commitment.'
//                 },
//                 {
//                   icon: 'fas fa-graduation-cap',
//                   title: 'Skill Development',
//                   desc: 'Regular training on advanced driving techniques, first-aid response, and safety protocols.'
//                 },
//                 {
//                   icon: 'fas fa-chart-line',
//                   title: 'Performance Monitoring',
//                   desc: 'Real-time evaluation through sensors, telematics data, and behavioral analysis.'
//                 },
//                 {
//                   icon: 'fas fa-hands-helping',
//                   title: 'Respect & Empowerment',
//                   desc: 'Drivers are treated not just as operators but as the pilots who safeguard every traveler\'s life.'
//                 }
//               ].map((item, index) => (
//                 <div 
//                   key={index}
//                   className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-100 text-center"
//                 >
//                   <div className="text-amber-500 mb-3">
//                     <i className={`${item.icon} text-xl`}></i>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center">
//               <div className="inline-block bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
//                 <p className="text-gray-700 text-sm">
//                   This approach encourages accountability, boosts morale, and ensures exceptional service on the road.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Meal System Section */}
//       <section id="meals" className="py-12 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div 
//             className={`transition-all duration-700 delay-300 ${
//               isVisible.meals ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-6 md:mb-8">
//                 <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
//                   Smart Travel Enhancements
//                 </h2>
//                 <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
//                 <p className="text-sm md:text-base text-gray-600">
//                   We go beyond safety by improving passenger convenience through digital innovations.
//                 </p>
//               </div>

//               <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-100">
//                 <div className="flex items-start gap-3 mb-4">
//                   <div className="text-amber-500">
//                     <i className="fas fa-utensils text-xl"></i>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">Pre-Ordered Meal System</h3>
//                     <p className="text-gray-600 text-sm mb-3">
//                       A structured pre-booking platform that allows passengers to:
//                     </p>
//                   </div>
//                 </div>
                
//                 <ul className="space-y-2 mb-4">
//                   {[
//                     'Select meals in advance',
//                     'Choose hygienic, verified food partners',
//                     'Receive meals at scheduled intervals during travel'
//                   ].map((feature, index) => (
//                     <li key={index} className="flex items-center text-gray-700">
//                       <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
//                       <span className="text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//                   <p className="text-gray-700 text-sm text-center">
//                     This ensures comfort, cleanliness, and a superior travel experience.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Promise Section */}
//       <section id="promise" className="py-12 md:py-20 bg-blue-800 text-white">
//         <div className="container mx-auto px-4">
//           <div 
//             className={`transition-all duration-700 delay-500 ${
//               isVisible.promise ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
//             }`}
//           >
//             <div className="text-center mb-8 md:mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
//                 Our Promise
//               </h2>
//               <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
//               {[
//                 {
//                   icon: 'fas fa-shield-alt',
//                   title: 'Maximum Safety',
//                   desc: 'Through advanced technology'
//                 },
//                 {
//                   icon: 'fas fa-cogs',
//                   title: 'Reliable Operations',
//                   desc: 'Through strict vehicle fitness checks'
//                 },
//                 {
//                   icon: 'fas fa-users',
//                   title: 'Exceptional Service',
//                   desc: 'Through driver empowerment'
//                 },
//                 {
//                   icon: 'fas fa-couch',
//                   title: 'Enhanced Comfort',
//                   desc: 'Through smart travel solutions'
//                 }
//               ].map((commitment, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white/10 rounded-lg p-4 md:p-6 text-center border border-white/20"
//                 >
//                   <div className="text-amber-400 mb-3">
//                     <i className={`${commitment.icon} text-xl`}></i>
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2">{commitment.title}</h3>
//                   <p className="text-blue-100 text-sm">{commitment.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center max-w-3xl mx-auto">
//               <p className="text-blue-100 text-sm md:text-base italic">
//                 "We are committed to building a future where travel is not just safe — but intelligent, transparent, and deeply human-centered."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 md:py-16 bg-amber-500 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
//             Ready to Transform Your Travel Safety?
//           </h2>
//           <p className="text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto">
//             Join us in creating a safer, smarter future for transportation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <button className="px-6 py-3 bg-white text-blue-800 hover:bg-gray-100 font-medium rounded-lg transition-all duration-300 text-sm">
//               Get Started Today
//             </button>
//             <button className="px-6 py-3 border border-white/30 hover:bg-white/10 font-medium rounded-lg transition-all duration-300 text-sm">
//               Schedule a Demo
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;














// import React, { useState, useEffect, useRef } from 'react';

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const statsRef = useRef(null);

//   const features = [
//     {
//       icon: "fas fa-shield-alt",
//       title: "Multi-Layered Safety Systems",
//       description: "Advanced sensor networks and AI-driven protection for comprehensive journey safety",
//       points: [
//         "Real-time hazard detection and alerts",
//         "Predictive accident prevention",
//         "Automated emergency response",
//         "360° monitoring & surveillance"
//       ],
//       illustration: "🚗✨"
//     },
//     {
//       icon: "fas fa-car-battery",
//       title: "Vehicle Fitness Assurance",
//       description: "Rigorous pre-journey inspections ensuring every vehicle meets highest safety standards",
//       points: [
//         "Comprehensive mechanical inspections",
//         "Brake and suspension verification",
//         "Sensor calibration checks",
//         "Emergency equipment readiness"
//       ],
//       illustration: "🔧📊"
//     },
//     {
//       icon: "fas fa-user-tie",
//       title: "Driver Excellence Program",
//       description: "Empowering drivers as the primary protectors through training and recognition",
//       points: [
//         "Advanced driving technique training",
//         "Real-time performance monitoring",
//         "Recognition for outstanding service",
//         "Safety-first culture development"
//       ],
//       illustration: "👨‍✈️⭐"
//     },
//     {
//       icon: "fas fa-utensils",
//       title: "Smart Travel Services",
//       description: "Enhancing passenger comfort with innovative digital solutions",
//       points: [
//         "Pre-ordered meal system",
//         "Hygienic food partnerships",
//         "Timely delivery during travel",
//         "Enhanced journey comfort"
//       ],
//       illustration: "🍱📱"
//     }
//   ];

//   const stats = [
//     { number: "99%", label: "Safety Score", icon: "fas fa-chart-line" },
//     { number: "10K+", label: "Trips Monitored", icon: "fas fa-route" },
//     { number: "1.2K", label: "Incidents Prevented", icon: "fas fa-shield-check" },
//     { number: "500+", label: "Vehicles Protected", icon: "fas fa-bus" }
//   ];

//   const technologies = [
//     {
//       icon: "fas fa-satellite-dish",
//       title: "Multi-Layered Sensor Systems",
//       description: "Installed throughout the vehicle to identify mechanical issues and detect hazards"
//     },
//     {
//       icon: "fas fa-brain",
//       title: "Predictive Safety Analytics",
//       description: "AI-enabled insights to prevent accidents before they occur"
//     },
//     {
//       icon: "fas fa-video",
//       title: "360° Monitoring & Surveillance",
//       description: "High-resolution cameras for complete visibility and passenger security"
//     },
//     {
//       icon: "fas fa-bell",
//       title: "Smart Emergency Response",
//       description: "Automated triggers that notify emergency contacts during critical moments"
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in-up');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.observe');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const FloatingVehicle = () => (
//     <div className="absolute top-10 right-10 animate-float">
//       <div className="text-4xl">🚗</div>
//     </div>
//   );

//   const AnimatedDashboard = () => (
//     <div className="relative bg-white rounded-2xl shadow-2xl border border-blue-100 p-8 transform hover:scale-105 transition-all duration-500">
//       <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
      
//       <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-xl mb-6 transform hover:scale-102 transition-transform duration-300">
//         <h3 className="text-xl font-bold mb-2">Live Safety Dashboard</h3>
//         <p className="text-blue-100">Real-time fleet monitoring active</p>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-6">
//         {[
//           { value: "128", label: "Active Vehicles", color: "blue" },
//           { value: "99%", label: "Safety Score", color: "green" },
//           { value: "14", label: "Active Alerts", color: "amber" },
//           { value: "1.8m", label: "Avg Response", color: "purple" }
//         ].map((item, index) => (
//           <div 
//             key={index}
//             className={`bg-${item.color}-50 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 animate-bounce-in`}
//             style={{ animationDelay: `${index * 100}ms` }}
//           >
//             <div className={`text-2xl font-bold text-${item.color}-700`}>{item.value}</div>
//             <div className={`text-sm text-${item.color}-600`}>{item.label}</div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-blue-200">
//         <div className="flex items-center justify-between mb-2">
//           <span className="font-semibold text-gray-700">Route Safety Score</span>
//           <span className="text-green-600 font-bold animate-pulse">Excellent</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-3">
//           <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-11/12 animate-progress"></div>
//         </div>
//       </div>

//       <FloatingVehicle />
//     </div>
//   );

//   const AnimatedFeatureCard = ({ feature, index }) => (
//     <div 
//       className={`bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group observe ${
//         isVisible ? 'animate-slide-in-up' : 'opacity-0'
//       }`}
//       style={{ animationDelay: `${index * 200}ms` }}
//     >
//       <div className="relative mb-6">
//         <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//           <i className={`${feature.icon} text-white text-2xl`}></i>
//         </div>
//         <div className="absolute -top-2 -right-2 text-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
//           {feature.illustration}
//         </div>
//       </div>
      
//       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//         {feature.title}
//       </h3>
//       <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
//       <ul className="space-y-3">
//         {feature.points.map((point, idx) => (
//           <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
//             <i className="fas fa-check-circle text-green-500 mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//             <span>{point}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   const AnimatedTechItem = ({ tech, index }) => (
//     <div 
//       className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group observe"
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-500">
//         <i className={`${tech.icon} text-blue-600 text-xl group-hover:text-cyan-600`}></i>
//       </div>
//       <div>
//         <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
//           {tech.title}
//         </h4>
//         <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes bounce-in {
//           0% { transform: scale(0.3); opacity: 0; }
//           50% { transform: scale(1.05); }
//           70% { transform: scale(0.9); }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slide-in-up {
//           0% { transform: translateY(100px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fade-in-up {
//           0% { transform: translateY(30px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 92%; }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
//         .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
//         .animate-progress { animation: progress 2s ease-out; }
//         .hover-scale-102:hover { transform: scale(1.02); }
//       `}</style>

//       {/* Hero Section */}
//       <section className=" pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative">
//         {/* Animated Background Elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
//         <div className="max-w-7xl mx-auto container">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className={`space-y-8 observe ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 transform hover:scale-105 transition-transform duration-300">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
//                 <span className="text-sm font-medium text-blue-800">🚀 Innovating Travel Safety</span>
//               </div>

//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
//                 Redefining{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
//                   Travel Safety
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-600 leading-relaxed transform hover:scale-105 transition-transform duration-500">
//                 Advanced safety solutions, intelligent monitoring systems, and human-centered design 
//                 working together to create smarter, safer journeys for every passenger.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group">
//                   <i className="fas fa-play-circle mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                   Explore Safety Solutions
//                 </button>
//                 <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group">
//                   <i className="fas fa-calendar-alt mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                   Schedule Demo
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <AnimatedDashboard />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Animated Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🚌</div>
//           <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>🛡️</div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 transform hover:scale-110 observe"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="text-4xl md:text-5xl font-bold mb-3 animate-pulse">
//                   {stat.number}
//                 </div>
//                 <div className="flex items-center justify-center text-blue-100 font-medium">
//                   <i className={`${stat.icon} mr-2`}></i>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 observe">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Comprehensive Safety{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Ecosystem
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our integrated approach combines cutting-edge technology with human expertise 
//               to deliver unmatched travel safety and passenger comfort.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <AnimatedFeatureCard key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="observe">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Advanced Safety{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   Technology
//                 </span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 We integrate innovative technologies into buses and passenger vehicles 
//                 to minimize risks and maintain the highest level of operational safety.
//               </p>

//               <div className="space-y-4">
//                 {technologies.map((tech, index) => (
//                   <AnimatedTechItem key={index} tech={tech} index={index} />
//                 ))}
//               </div>
//             </div>

//             <div className="relative observe">
//               <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transform hover:scale-105 transition-all duration-500">
//                 <div className="text-center mb-8">
//                   <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
//                     <i className="fas fa-clipboard-check text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Vehicle Fitness Protocol</h3>
//                   <p className="text-gray-600">Comprehensive pre-tour safety checks</p>
//                 </div>

//                 <div className="grid gap-4">
//                   {[
//                     "Engine and mechanical inspections",
//                     "Brake and suspension verification",
//                     "Tyre condition and pressure checks",
//                     "Sensor calibration and testing",
//                     "Electrical and lighting inspection",
//                     "Emergency equipment readiness"
//                   ].map((check, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
//                     >
//                       <i className="fas fa-check-circle text-green-500 mr-4 text-lg group-hover:scale-125 transition-transform duration-300"></i>
//                       <span className="text-gray-700 font-medium">{check}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Driver Excellence */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 observe">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Driver{' '}
//               <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
//                 Excellence
//               </span>{' '}
//               Program
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               We acknowledge that the driver is the primary protector of every passenger. 
//               Their attention, discipline, and professionalism determine journey safety.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "fas fa-trophy",
//                 title: "Recognition Programs",
//                 description: "Honoring drivers for outstanding service, safe driving, and commitment",
//                 emoji: "🏆",
//                 color: "from-amber-400 to-orange-500"
//               },
//               {
//                 icon: "fas fa-graduation-cap",
//                 title: "Skill Development",
//                 description: "Regular training on advanced driving techniques and safety protocols",
//                 emoji: "🎓",
//                 color: "from-blue-400 to-cyan-500"
//               },
//               {
//                 icon: "fas fa-chart-line",
//                 title: "Performance Monitoring",
//                 description: "Real-time evaluation through sensors and behavioral analysis",
//                 emoji: "📊",
//                 color: "from-green-400 to-emerald-500"
//               }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-8 bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group observe"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className={`w-24 h-24 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
//                   <i className={`${item.icon} text-white text-3xl`}></i>
//                 </div>
//                 <div className="text-4xl mb-4 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
//                   {item.emoji}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Smart Services */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="observe">
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Smart Travel{' '}
//                 <span className="text-amber-300">Enhancements</span>
//               </h2>
//               <p className="text-xl mb-8 text-blue-100 leading-relaxed">
//                 Beyond safety, we improve passenger convenience through digital innovations 
//                 that transform the travel experience.
//               </p>

//               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 transform hover:scale-102 transition-all duration-500">
//                 <div className="flex items-center mb-6">
//                   <div className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center mr-4 animate-pulse">
//                     <i className="fas fa-utensils text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold">Pre-Ordered Meal System</h3>
//                 </div>
//                 <div className="grid gap-4">
//                   {[
//                     "Select meals in advance from verified partners",
//                     "Choose from multiple cuisine options",
//                     "Hygienic, safe food delivery during travel",
//                     "Eliminates uncertainty and enhances comfort"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center group">
//                       <i className="fas fa-check-circle text-green-300 mr-4 group-hover:scale-125 transition-transform duration-300"></i>
//                       <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group">
//                 <i className="fas fa-rocket mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Explore Smart Services
//               </button>
//             </div>

//             <div className="relative observe">
//               <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900 transform hover:scale-105 transition-all duration-500">
//                 <div className="text-center mb-8">
//                   <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
//                     <i className="fas fa-mobile-alt text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Digital Passenger Portal</h3>
//                   <p className="text-gray-600">Seamless travel experience management</p>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { icon: "fas fa-mobile-alt", text: "Mobile app for journey management", color: "text-purple-600" },
//                     { icon: "fas fa-utensils", text: "Pre-order meals and services", color: "text-pink-600" },
//                     { icon: "fas fa-shield-alt", text: "Real-time safety status updates", color: "text-blue-600" },
//                     { icon: "fas fa-headset", text: "24/7 passenger support", color: "text-green-600" }
//                   ].map((service, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
//                     >
//                       <i className={`${service.icon} ${service.color} text-xl mr-4 group-hover:scale-125 transition-transform duration-300`}></i>
//                       <span className="font-medium text-gray-800">{service.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="observe">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Ready to Transform Your{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Travel Safety
//               </span>
//               ?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Join the growing number of fleets that trust Anand Technology & Safety 
//               for comprehensive protection and passenger satisfaction.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group">
//                 <i className="fas fa-comments mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Schedule a Demo
//               </button>
//               <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group">
//                 <i className="fas fa-download mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Download Brochure
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;










// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const statsRef = useRef(null);
//   const navigate = useNavigate();

//   // Dashboard stats state from first homepage
//   const [dashboardStats, setDashboardStats] = useState({
//     safetyScore: 96,
//     tripsMonitored: 3200,
//     incidentsPrevented: 480,
//   });

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Dashboard stats animation from first homepage
//     const timeout = setTimeout(
//       () =>
//         setDashboardStats({
//           safetyScore: 99,
//           tripsMonitored: 10000,
//           incidentsPrevented: 1200,
//         }),
//       800
//     );

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in-up');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.observe');
//     elements.forEach(el => observer.observe(el));

//     return () => {
//       clearTimeout(timeout);
//       observer.disconnect();
//     };
//   }, []);

//   const features = [
//     {
//       icon: "fas fa-shield-alt",
//       title: "Multi-Layered Safety Systems",
//       description: "Advanced sensor networks and AI-driven protection working together to ensure comprehensive journey safety across all travel conditions and scenarios.",
//       emoji: "🛡️"
//     },
//     {
//       icon: "fas fa-car-battery",
//       title: "Vehicle Fitness Assurance",
//       description: "Rigorous pre-journey inspections and continuous monitoring systems that guarantee every vehicle maintains peak safety performance standards.",
//       emoji: "🚗"
//     },
//     {
//       icon: "fas fa-user-tie",
//       title: "Driver Excellence Program",
//       description: "Comprehensive training, continuous monitoring, and recognition programs empowering drivers as the primary protectors of passenger safety.",
//       emoji: "👨‍✈️"
//     },
//     {
//       icon: "fas fa-utensils",
//       title: "Smart Travel Services",
//       description: "Innovative digital solutions and enhanced passenger comfort features that transform the travel experience while maintaining safety standards.",
//       emoji: "🍱"
//     }
//   ];

//   const stats = [
//     { number: "99%", label: "Safety Score", icon: "fas fa-chart-line", emoji: "📊" },
//     { number: "10K+", label: "Trips Monitored", icon: "fas fa-route", emoji: "🛣️" },
//     { number: "1.2K", label: "Incidents Prevented", icon: "fas fa-shield-check", emoji: "🛡️" }
//   ];

//   const technologies = [
//     {
//       icon: "fas fa-satellite-dish",
//       title: "Multi-Layered Sensor Systems",
//       description: "Installed throughout the vehicle to identify mechanical issues and detect hazards",
//       emoji: "📡"
//     },
//     {
//       icon: "fas fa-brain",
//       title: "Predictive Safety Analytics",
//       description: "AI-enabled insights to prevent accidents before they occur",
//       emoji: "🧠"
//     },
//     {
//       icon: "fas fa-video",
//       title: "360° Monitoring & Surveillance",
//       description: "High-resolution cameras for complete visibility and passenger security",
//       emoji: "📹"
//     },
//     {
//       icon: "fas fa-bell",
//       title: "Smart Emergency Response",
//       description: "Automated triggers that notify emergency contacts during critical moments",
//       emoji: "🔔"
//     }
//   ];

//   // Dashboard Card from First Homepage
//   const DashboardCard = () => (
//     <div className="relative mx-auto w-full max-w-md">
//       <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-cyan-200/70 blur-2xl" />
//       <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-blue-200/80 blur-2xl" />

//       <div className="relative rounded-3xl border border-sky-100 bg-white/90 p-2 md:p-4 shadow-lg shadow-sky-200">
//         {/* Header */}
//         <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-3">
//           <div>
//             <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
//               Live Journey Overview
//             </div>
//             <div className="text-sm font-semibold text-slate-800">
//               Control Center · Anand Safety
//             </div>
//           </div>
//           <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold text-emerald-700">
//             <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
//             All Systems Normal
//           </span>
//         </div>

//         {/* Map / Route Card */}
//         <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 p-4">
//           <div className="mb-3 flex items-center justify-between text-xs text-slate-600">
//             <span className="font-semibold text-slate-700">
//               Route Cluster – South Zone
//             </span>
//             <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[0.7rem]">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//               Safe
//             </span>
//           </div>
//           <div className="h-32 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.3),_transparent_60%)]">
//             {/* Simulated route dots */}
//             <div className="relative h-full w-full">
//               <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
//               <div className="absolute left-1/2 top-3 h-3 w-3 rounded-full bg-cyan-500 shadow-sm shadow-cyan-400" />
//               <div className="absolute right-6 bottom-6 h-3 w-3 rounded-full bg-amber-400 shadow-sm shadow-amber-300" />
//               <div className="absolute inset-0">
//                 <svg className="h-full w-full" fill="none">
//                   <path
//                     d="M30 80 C 120 20, 180 40, 250 75"
//                     stroke="#06b6d4"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeDasharray="4 6"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Metrics Row */}
//         <div className="mt-4 grid grid-cols-3 gap-2 text-[0.75rem]">
//           <div className="rounded-xl bg-sky-50 p-3">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-500">Active Journeys</span>
//               <i className="fas fa-route text-xs text-cyan-500" />
//             </div>
//             <div className="mt-1 text-lg font-bold text-slate-900">
//               128
//             </div>
//             <p className="text-[0.65rem] text-emerald-600">
//               122 safe · 6 under watch
//             </p>
//           </div>
//           <div className="rounded-xl bg-sky-50 p-3">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-500">Alerts (Today)</span>
//               <i className="fas fa-bell text-xs text-amber-500" />
//             </div>
//             <div className="mt-1 text-lg font-bold text-slate-900">
//               14
//             </div>
//             <p className="text-[0.65rem] text-amber-600">
//               3 critical, 11 minor
//             </p>
//           </div>
//           <div className="rounded-xl bg-sky-50 p-3">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-500">Response Time</span>
//               <i className="fas fa-stopwatch text-xs text-blue-500" />
//             </div>
//             <div className="mt-1 text-lg font-bold text-slate-900">
//               1.8m
//             </div>
//             <p className="text-[0.65rem] text-blue-600">
//               Avg from alert to action
//             </p>
//           </div>
//         </div>

//         {/* Footer tags */}
//         <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem]">
//           <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
//             Journey Monitoring
//           </span>
//           <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
//             Driver Behaviour Analytics
//           </span>
//           <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
//             Emergency Workflow Engine
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   const AnimatedFeatureCard = ({ feature, index }) => (
//     <div 
//       className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 group observe ${
//         isVisible ? 'animate-slide-in-up' : 'opacity-0'
//       }`}
//       style={{ animationDelay: `${index * 200}ms` }}
//     >
//       <div className="relative mb-6">
//         <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//           <i className={`${feature.icon} text-white text-2xl`}></i>
//         </div>
//         <div className="absolute -top-2 -right-2 text-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
//           {feature.emoji}
//         </div>
//       </div>
      
//       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//         {feature.title}
//       </h3>
//       <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
//     </div>
//   );

//   const AnimatedTechItem = ({ tech, index }) => (
//     <div 
//       className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group observe"
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       <div className="w-14 h-14 mt-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-500">
//         <i className={`${tech.icon} text-blue-600 text-xl group-hover:text-cyan-600`}></i>
//       </div>
//       <div>
//         <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
//           {tech.title} {tech.emoji}
//         </h4>
//         <p className="text-gray-600 leading-relaxed">{tech.description}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className=" mx-auto px-4 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes bounce-in {
//           0% { transform: scale(0.3); opacity: 0; }
//           50% { transform: scale(1.05); }
//           70% { transform: scale(0.9); }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slide-in-up {
//           0% { transform: translateY(100px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fade-in-up {
//           0% { transform: translateY(30px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 92%; }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
//         .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
//         .animate-progress { animation: progress 2s ease-out; }
//         .hover-scale-102:hover { transform: scale(1.02); }
//       `}</style>

//       {/* Hero Section with Dashboard Card */}
//       <section className="container mt-28 pb-10 relative  px-4 sm:px-6 lg:px-8">
//         {/* Animated Background Elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className={`space-y-8 observe ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 transform hover:scale-105 transition-transform duration-300">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
//                 <span className="text-sm font-medium text-blue-800">🚀 Innovating Travel Safety</span>
//               </div>

//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//                 Redefining{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   Travel Safety
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-600 leading-relaxed transform hover:scale-105 transition-transform duration-500">
//                 Advanced safety solutions, intelligent monitoring systems, and human-centered design 
//                 working together to create smarter, safer journeys for every passenger.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group" onClick={()=>navigate('/services')}>
//                   <i className="fas fa-play-circle mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                   Explore Safety Solutions
//                 </button>
//                 <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group" onClick={()=>navigate('/contact')} >
//                   <i className="fas fa-calendar-alt mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                   Schedule Demo
//                 </button>
//               </div>

//               {/* Stats from first homepage */}
//               <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
//                 <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
//                   <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     Safety Score
//                   </div>
//                   <div className="mt-2 text-2xl font-bold text-cyan-700">
//                     {dashboardStats.safetyScore}%
//                   </div>
//                   <p className="text-xs text-slate-500">
//                     Average safety improvement across fleets.
//                   </p>
//                 </div>
//                 <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
//                   <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     Trips Monitored
//                   </div>
//                   <div className="mt-2 text-2xl font-bold text-cyan-700">
//                     {dashboardStats.tripsMonitored.toLocaleString()}+
//                   </div>
//                   <p className="text-xs text-slate-500">
//                     Real journeys protected end-to-end.
//                   </p>
//                 </div>
//                 <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
//                   <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     Incidents Prevented
//                   </div>
//                   <div className="mt-2 text-2xl font-bold text-cyan-700">
//                     {dashboardStats.incidentsPrevented.toLocaleString()}+
//                   </div>
//                   <p className="text-xs text-slate-500">
//                     High-risk situations avoided in time.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Dashboard Card from first homepage */}
//             <div className="relative animate-fade-in-up">
//               <DashboardCard />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className=" container py-20 px-4 sm:px-6 lg:px-8 py-10 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 observe">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//               Comprehensive Safety{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Ecosystem
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our integrated approach combines cutting-edge technology with human expertise 
//               to deliver unmatched travel safety and passenger comfort.
//             </p>
//           </div>

//           <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <AnimatedFeatureCard key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="container py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="observe">
//               <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Advanced Safety{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   Technology
//                 </span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 We integrate innovative technologies into buses and passenger vehicles 
//                 to minimize risks and maintain the highest level of operational safety.
//               </p>

//               <div className="space-y-4">
//                 {technologies.map((tech, index) => (
//                   <AnimatedTechItem key={index} tech={tech} index={index} />
//                 ))}
//               </div>
//             </div>

//             <div className="relative observe">
//               <div className="bg-white rounded-3xl shadow-lg p-3 border border-blue-100 transform hover:scale-105 transition-all duration-500">
//                 <div className="text-center mb-4">
//                   <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <i className="fas fa-clipboard-check text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Vehicle Fitness Protocol 🛠️</h3>
//                   <p className="text-gray-600">Comprehensive pre-tour safety checks</p>
//                 </div>

//                 <div className="grid gap-4">
//                   {[
//                     "Engine and mechanical inspections",
//                     "Brake and suspension verification",
//                     "Tyre condition and pressure checks",
//                     "Sensor calibration and testing",
//                     "Electrical and lighting inspection",
//                     "Emergency equipment readiness"
//                   ].map((check, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
//                     >
//                       <i className="fas fa-check-circle text-green-500 mr-4 text-lg group-hover:scale-125 transition-transform duration-300"></i>
//                       <span className="text-gray-700 font-medium">{check}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Driver Excellence */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 observe">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//               Driver{' '}
//               <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
//                 Excellence
//               </span>{' '}
//               Program 👨‍✈️
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               We acknowledge that the driver is the primary protector of every passenger. 
//               Their attention, discipline, and professionalism determine journey safety.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "fas fa-trophy",
//                 title: "Recognition Programs",
//                 description: "Honoring drivers for outstanding service, safe driving, and commitment",
//                 emoji: "🏆",
//                 color: "from-amber-400 to-orange-500"
//               },
//               {
//                 icon: "fas fa-graduation-cap",
//                 title: "Skill Development",
//                 description: "Regular training on advanced driving techniques and safety protocols",
//                 emoji: "🎓",
//                 color: "from-blue-400 to-cyan-500"
//               },
//               {
//                 icon: "fas fa-chart-line",
//                 title: "Performance Monitoring",
//                 description: "Real-time evaluation through sensors and behavioral analysis",
//                 emoji: "📊",
//                 color: "from-green-400 to-emerald-500"
//               }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-4 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 group observe"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
                
//                 <div className="text-4xl mb-4 w-20 h-20 mx-auto flex items-center justify-center  group-hover:scale-125 transition-all duration-500">
//                   {item.emoji}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Smart Services */}
//       <section className="py-14 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="observe">
//               <h2 className="text-2xl md:text-4xl font-bold mb-6">
//                 Smart Travel{' '}
//                 <span className="text-amber-300">Enhancements</span> 🍱
//               </h2>
//               <p className="text-lg mb-8 text-blue-100 leading-relaxed">
//                 Beyond safety, we improve passenger convenience through digital innovations 
//                 that transform the travel experience.
//               </p>

//               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 mb-8 transform hover:scale-102 transition-all duration-500">
//                 <div className="flex items-center mb-6">
//                   <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mr-2">
//                     <i className="fas fa-utensils text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-lg font-bold">Pre-Ordered Meal System</h3>
//                 </div>
//                 <div className="grid gap-4">
//                   {[
//                     "Select meals in advance from verified partners",
//                     "Choose from multiple cuisine options",
//                     "Hygienic, safe food delivery during travel",
//                     "Eliminates uncertainty and enhances comfort"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center group">
//                       <i className="fas fa-check-circle text-green-300 mr-4 group-hover:scale-125 transition-transform duration-300"></i>
//                       <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group" onClick={()=> navigate('/services')}>
//                 <i className="fas fa-rocket mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Explore Smart Services
//               </button>
//             </div>

//             <div className="relative observe">
//               <div className="bg-white rounded-3xl shadow-lg p-4 text-gray-900 transform hover:scale-105 transition-all duration-500">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <i className="fas fa-mobile-alt text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Digital Passenger Portal 📱</h3>
//                   <p className="text-gray-600">Seamless travel experience management</p>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { icon: "fas fa-mobile-alt", text: "Mobile app for journey management", color: "text-purple-600" },
//                     { icon: "fas fa-utensils", text: "Pre-order meals and services", color: "text-pink-600" },
//                     { icon: "fas fa-shield-alt", text: "Real-time safety status updates", color: "text-blue-600" },
//                     { icon: "fas fa-headset", text: "24/7 passenger support", color: "text-green-600" }
//                   ].map((service, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
//                     >
//                       <i className={`${service.icon} ${service.color} text-xl mr-4 group-hover:scale-125 transition-transform duration-300`}></i>
//                       <span className="font-medium text-gray-800">{service.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-14 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="observe">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//               Ready to Transform Your{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Travel Safety
//               </span>
//               ? 🚀
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Join the growing number of fleets that trust Anand Technology & Safety 
//               for comprehensive protection and passenger satisfaction.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group" onClick={()=>navigate('/contact')}>
//                 <i className="fas fa-comments mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Schedule a Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

























// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const statsRef = useRef(null);
//   const navigate = useNavigate();

//   // Dashboard stats state from first homepage
//   const [dashboardStats, setDashboardStats] = useState({
//     safetyScore: 96,
//     tripsMonitored: 3200,
//     incidentsPrevented: 480,
//   });

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Dashboard stats animation from first homepage
//     const timeout = setTimeout(
//       () =>
//         setDashboardStats({
//           safetyScore: 99,
//           tripsMonitored: 10000,
//           incidentsPrevented: 1200,
//         }),
//       800
//     );

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fade-in-up');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.observe');
//     elements.forEach(el => observer.observe(el));

//     return () => {
//       clearTimeout(timeout);
//       observer.disconnect();
//     };
//   }, []);

//   const features = [
//     {
//       icon: "fas fa-shield-alt",
//       title: "Multi-Layered Safety Systems",
//       description: "Advanced sensor networks and AI-driven protection working together to ensure comprehensive journey safety across all travel conditions and scenarios.",
//       emoji: "🛡️"
//     },
//     {
//       icon: "fas fa-car-battery",
//       title: "Vehicle Fitness Assurance",
//       description: "Rigorous pre-journey inspections and continuous monitoring systems that guarantee every vehicle maintains peak safety performance standards.",
//       emoji: "🚗"
//     },
//     {
//       icon: "fas fa-user-tie",
//       title: "Driver Excellence Program",
//       description: "Comprehensive training, continuous monitoring, and recognition programs empowering drivers as the primary protectors of passenger safety.",
//       emoji: "👨‍✈️"
//     },
//     {
//       icon: "fas fa-utensils",
//       title: "Smart Travel Services",
//       description: "Innovative digital solutions and enhanced passenger comfort features that transform the travel experience while maintaining safety standards.",
//       emoji: "🍱"
//     }
//   ];

//   const stats = [
//     { number: "99%", label: "Safety Score", icon: "fas fa-chart-line", emoji: "📊" },
//     { number: "10K+", label: "Trips Monitored", icon: "fas fa-route", emoji: "🛣️" },
//     { number: "1.2K", label: "Incidents Prevented", icon: "fas fa-shield-check", emoji: "🛡️" }
//   ];

//   const technologies = [
//     {
//       icon: "fas fa-satellite-dish",
//       title: "Multi-Layered Sensor Systems",
//       description: "Installed throughout the vehicle to identify mechanical issues and detect hazards",
//       emoji: "📡"
//     },
//     {
//       icon: "fas fa-brain",
//       title: "Predictive Safety Analytics",
//       description: "AI-enabled insights to prevent accidents before they occur",
//       emoji: "🧠"
//     },
//     {
//       icon: "fas fa-video",
//       title: "360° Monitoring & Surveillance",
//       description: "High-resolution cameras for complete visibility and passenger security",
//       emoji: "📹"
//     },
//     {
//       icon: "fas fa-bell",
//       title: "Smart Emergency Response",
//       description: "Automated triggers that notify emergency contacts during critical moments",
//       emoji: "🔔"
//     }
//   ];

//   // Dashboard Card from First Homepage
//   const DashboardCard = () => (
//     <div className="relative mx-auto w-full max-w-md">
//       <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-cyan-200/70 blur-2xl" />
//       <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-blue-200/80 blur-2xl" />

//       <div className="relative rounded-3xl border border-sky-100 bg-white/90 p-2 md:p-4 shadow-lg shadow-sky-200">
//         {/* Header */}
//         <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-3">
//           <div>
//             <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
//               Live Journey Overview
//             </div>
//             <div className="text-sm font-semibold text-slate-800">
//               Control Center · Anand Safety
//             </div>
//           </div>
//           <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold text-emerald-700">
//             <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
//             All Systems Normal
//           </span>
//         </div>

//         {/* Map / Route Card */}
//         <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 p-4">
//           <div className="mb-3 flex items-center justify-between text-xs text-slate-600">
//             <span className="font-semibold text-slate-700">
//               Route Cluster – South Zone
//             </span>
//             <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[0.7rem]">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//               Safe
//             </span>
//           </div>
//           <div className="h-32 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.3),_transparent_60%)]">
//             {/* Simulated route dots */}
//             <div className="relative h-full w-full">
//               <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
//               <div className="absolute left-1/2 top-3 h-3 w-3 rounded-full bg-cyan-500 shadow-sm shadow-cyan-400" />
//               <div className="absolute right-6 bottom-6 h-3 w-3 rounded-full bg-amber-400 shadow-sm shadow-amber-300" />
//               <div className="absolute inset-0">
//                 <svg className="h-full w-full" fill="none">
//                   <path
//                     d="M30 80 C 120 20, 180 40, 250 75"
//                     stroke="#06b6d4"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeDasharray="4 6"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Metrics Row */}
//         <div className="mt-4 grid grid-cols-3 gap-2 text-[0.75rem]">
//           <div className="rounded-xl bg-sky-50 p-3">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-500">Active Journeys</span>
//               <i className="fas fa-route text-xs text-cyan-500" />
//             </div>
//             <div className="mt-1 text-lg font-bold text-slate-900">
//               128
//             </div>
//             <p className="text-[0.65rem] text-emerald-600">
//               122 safe · 6 under watch
//             </p>
//           </div>
//           <div className="rounded-xl bg-sky-50 p-3">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-500">Alerts (Today)</span>
//               <i className="fas fa-bell text-xs text-amber-500" />
//             </div>
//             <div className="mt-1 text-lg font-bold text-slate-900">
//               14
//             </div>
//             <p className="text-[0.65rem] text-amber-600">
//               3 critical, 11 minor
//             </p>
//           </div>
//           <div className="rounded-xl bg-sky-50 p-3">
//             <div className="flex items-center justify-between">
//               <span className="text-slate-500">Response Time</span>
//               <i className="fas fa-stopwatch text-xs text-blue-500" />
//             </div>
//             <div className="mt-1 text-lg font-bold text-slate-900">
//               1.8m
//             </div>
//             <p className="text-[0.65rem] text-blue-600">
//               Avg from alert to action
//             </p>
//           </div>
//         </div>

//         {/* Footer tags */}
//         <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem]">
//           <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
//             Journey Monitoring
//           </span>
//           <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
//             Driver Behaviour Analytics
//           </span>
//           <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
//             Emergency Workflow Engine
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   const AnimatedFeatureCard = ({ feature, index }) => (
//     <div 
//       className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 group observe ${
//         isVisible ? 'animate-slide-in-up' : 'opacity-0'
//       }`}
//       style={{ animationDelay: `${index * 200}ms` }}
//     >
//       <div className="relative mb-6">
//         <div className=" text-2xl w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//           {/* <i className={`${feature.icon} text-white text-2xl`}></i> */}
//           {feature.emoji}
//         </div>
//         <div className="absolute -top-2 -right-2 text-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
//         </div>
//       </div>
      
//       <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//         {feature.title}
//       </h3>
//       <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
//     </div>
//   );

//   const AnimatedTechItem = ({ tech, index }) => (
//     <div 
//       className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group observe"
//       style={{ animationDelay: `${index * 150}ms` }}
//     >
//       <div className="w-14 h-14 mt-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-500">
//         <i className={`${tech.icon} text-blue-600 text-xl group-hover:text-cyan-600`}></i>
//       </div>
//       <div>
//         <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
//           {tech.title} {tech.emoji}
//         </h4>
//         <p className="text-gray-600 leading-relaxed">{tech.description}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="mx-auto px-2 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         @keyframes bounce-in {
//           0% { transform: scale(0.3); opacity: 0; }
//           50% { transform: scale(1.05); }
//           70% { transform: scale(0.9); }
//           100% { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slide-in-up {
//           0% { transform: translateY(100px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fade-in-up {
//           0% { transform: translateY(30px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 92%; }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
//         .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
//         .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
//         .animate-progress { animation: progress 2s ease-out; }
//         .hover-scale-102:hover { transform: scale(1.02); }
//       `}</style>

//       {/* Hero Section with Dashboard Card */}
//       <section className="mt-32 pb-10 relative px-4 sm:px-6 lg:px-8">
//         {/* Animated Background Elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
//         <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className={`space-y-8 lg:pl-10 observe ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 transform hover:scale-105 transition-transform duration-300">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
//                 <span className="text-sm font-medium text-blue-800">🚀 Innovating Travel Safety</span>
//               </div>

//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//                 Redefining{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   Travel Safety
//                 </span>
//               </h1>

//               <p className="text-lg text-gray-600 leading-relaxed transform hover:scale-105 transition-transform duration-500">
//                 Advanced safety solutions, intelligent monitoring systems, and human-centered design 
//                 working together to create smarter, safer journeys for every passenger.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group" onClick={()=>navigate('/services')}>
//                   <i className="fas fa-play-circle mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                   Explore Safety Solutions
//                 </button>
//                 <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group" onClick={()=>navigate('/contact')} >
//                   <i className="fas fa-calendar-alt mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                   Schedule Demo
//                 </button>
//               </div>

//               {/* Stats from first homepage */}
//               <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
//                 <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
//                   <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     Safety Score
//                   </div>
//                   <div className="mt-2 text-2xl font-bold text-cyan-700">
//                     {dashboardStats.safetyScore}%
//                   </div>
//                   <p className="text-xs text-slate-500">
//                     Average safety improvement across fleets.
//                   </p>
//                 </div>
//                 <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
//                   <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     Trips Monitored
//                   </div>
//                   <div className="mt-2 text-2xl font-bold text-cyan-700">
//                     {dashboardStats.tripsMonitored.toLocaleString()}+
//                   </div>
//                   <p className="text-xs text-slate-500">
//                     Real journeys protected end-to-end.
//                   </p>
//                 </div>
//                 <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
//                   <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     Incidents Prevented
//                   </div>
//                   <div className="mt-2 text-2xl font-bold text-cyan-700">
//                     {dashboardStats.incidentsPrevented.toLocaleString()}+
//                   </div>
//                   <p className="text-xs text-slate-500">
//                     High-risk situations avoided in time.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Dashboard Card from first homepage */}
//             <div className="relative animate-fade-in-up">
//               <DashboardCard />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 observe">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//               Comprehensive Safety{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Ecosystem
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our integrated approach combines cutting-edge technology with human expertise 
//               to deliver unmatched travel safety and passenger comfort.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <AnimatedFeatureCard key={index} feature={feature} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="observe">
//               <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Advanced Safety{' '}
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                   Technology
//                 </span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 We integrate innovative technologies into buses and passenger vehicles 
//                 to minimize risks and maintain the highest level of operational safety.
//               </p>

//               <div className="space-y-4">
//                 {technologies.map((tech, index) => (
//                   <AnimatedTechItem key={index} tech={tech} index={index} />
//                 ))}
//               </div>
//             </div>

//             <div className="relative observe">
//               <div className="bg-white rounded-3xl shadow-lg p-3 border border-blue-100 transform hover:scale-105 transition-all duration-500">
//                 <div className="text-center mb-4">
//                   <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <i className="fas fa-clipboard-check text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Vehicle Fitness Protocol 🛠️</h3>
//                   <p className="text-gray-600">Comprehensive pre-tour safety checks</p>
//                 </div>

//                 <div className="grid gap-4">
//                   {[
//                     "Engine and mechanical inspections",
//                     "Brake and suspension verification",
//                     "Tyre condition and pressure checks",
//                     "Sensor calibration and testing",
//                     "Electrical and lighting inspection",
//                     "Emergency equipment readiness"
//                   ].map((check, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
//                     >
//                       <i className="fas fa-check-circle text-green-500 mr-4 text-lg group-hover:scale-125 transition-transform duration-300"></i>
//                       <span className="text-gray-700 font-medium">{check}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Driver Excellence */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16 observe">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//               Driver{' '}
//               <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
//                 Excellence
//               </span>{' '}
//               Program 👨‍✈️
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               We acknowledge that the driver is the primary protector of every passenger. 
//               Their attention, discipline, and professionalism determine journey safety.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "fas fa-trophy",
//                 title: "Recognition Programs",
//                 description: "Honoring drivers for outstanding service, safe driving, and commitment",
//                 emoji: "🏆",
//                 color: "from-amber-400 to-orange-500"
//               },
//               {
//                 icon: "fas fa-graduation-cap",
//                 title: "Skill Development",
//                 description: "Regular training on advanced driving techniques and safety protocols",
//                 emoji: "🎓",
//                 color: "from-blue-400 to-cyan-500"
//               },
//               {
//                 icon: "fas fa-chart-line",
//                 title: "Performance Monitoring",
//                 description: "Real-time evaluation through sensors and behavioral analysis",
//                 emoji: "📊",
//                 color: "from-green-400 to-emerald-500"
//               }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="text-center p-4 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 group observe"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
                
//                 <div className="text-4xl mb-4 w-20 h-20 mx-auto flex items-center justify-center  group-hover:scale-125 transition-all duration-500">
//                   {item.emoji}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Smart Services */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="observe">
//               <h2 className="text-2xl md:text-4xl font-bold mb-6">
//                 Smart Travel{' '}
//                 <span className="text-amber-300">Enhancements</span> 🍱
//               </h2>
//               <p className="text-lg mb-8 text-blue-100 leading-relaxed">
//                 Beyond safety, we improve passenger convenience through digital innovations 
//                 that transform the travel experience.
//               </p>

//               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 mb-8 transform hover:scale-102 transition-all duration-500">
//                 <div className="flex items-center mb-6">
//                   <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mr-2">
//                     <i className="fas fa-utensils text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-lg font-bold">Pre-Ordered Meal System</h3>
//                 </div>
//                 <div className="grid gap-4">
//                   {[
//                     "Select meals in advance from verified partners",
//                     "Choose from multiple cuisine options",
//                     "Hygienic, safe food delivery during travel",
//                     "Eliminates uncertainty and enhances comfort"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center group">
//                       <i className="fas fa-check-circle text-green-300 mr-4 group-hover:scale-125 transition-transform duration-300"></i>
//                       <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group" onClick={()=> navigate('/services')}>
//                 <i className="fas fa-rocket mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Explore Smart Services
//               </button>
//             </div>

//             <div className="relative observe">
//               <div className="bg-white rounded-3xl shadow-lg p-4 text-gray-900 transform hover:scale-105 transition-all duration-500">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                     <i className="fas fa-mobile-alt text-white text-2xl"></i>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Digital Passenger Portal 📱</h3>
//                   <p className="text-gray-600">Seamless travel experience management</p>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     { icon: "fas fa-mobile-alt", text: "Mobile app for journey management", color: "text-purple-600" },
//                     { icon: "fas fa-utensils", text: "Pre-order meals and services", color: "text-pink-600" },
//                     { icon: "fas fa-shield-alt", text: "Real-time safety status updates", color: "text-blue-600" },
//                     { icon: "fas fa-headset", text: "24/7 passenger support", color: "text-green-600" }
//                   ].map((service, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
//                     >
//                       <i className={`${service.icon} ${service.color} text-xl mr-4 group-hover:scale-125 transition-transform duration-300`}></i>
//                       <span className="font-medium text-gray-800">{service.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="observe">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
//               Ready to Transform Your{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Travel Safety
//               </span>
//               ? 🚀
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Join the growing number of fleets that trust Anand Technology & Safety 
//               for comprehensive protection and passenger satisfaction.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group" onClick={()=>navigate('/contact')}>
//                 <i className="fas fa-comments mr-3 group-hover:scale-125 transition-transform duration-300"></i>
//                 Schedule a Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

























import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const navigate = useNavigate();

  const [dashboardStats, setDashboardStats] = useState({
    safetyScore: 96,
    tripsMonitored: 3200,
    incidentsPrevented: 480,
  });

  useEffect(() => {
    setIsVisible(true);
    
    const timeout = setTimeout(
      () =>
        setDashboardStats({
          safetyScore: 99,
          tripsMonitored: 10000,
          incidentsPrevented: 1200,
        }),
      800
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe');
    elements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Features from your data - combined from all versions
  const features = [
    {
      title: "Transport Safety Technology",
      description: "We incorporate modern safety systems into buses and passenger vehicles to significantly reduce accident risks and improve overall travel standards.",
      emoji: "🛡️"
    },
    {
      title: "Vehicle Fitness Assurance",
      description: "Before every trip, we perform detailed vehicle assessment to guarantee roadworthiness and safety. We certify the vehicle's condition before every tour.",
      emoji: "🔧"
    },
    {
      title: "Driver Recognition & Responsibility",
      description: "We acknowledge that the driver is the primary protector of every passenger. His attention, discipline, and professionalism determine journey safety.",
      emoji: "👨‍✈️"
    },
    {
      title: "Smart Travel Services",
      description: "Introducing technology that enhances passenger convenience and travel comfort through digital innovations like our pre-ordered meal system.",
      emoji: "🍱"
    }
  ];

// Consolidated technologies from ALL versions of your data (no duplicates)
const technologies = [
  {
    icon: "fas fa-bell",
    title: "Advanced Alert Systems",
    description: "Real-time monitoring for driver fatigue, overspeed, collision risks, and lane deviations.",
    emoji: "⚠️",
    source: "Version 1"
  },
  {
    icon: "fas fa-satellite-dish",
    title: "Multi-Layered Sensor Systems",
    description: "Installed throughout the vehicle to identify mechanical issues, detect hazards, and provide early-warning alerts.",
    emoji: "📡",
    source: "Version 2"
  },
  {
    icon: "fas fa-video",
    title: "Surveillance & Monitoring",
    description: "High-definition cameras and live tracking for better oversight and improved passenger security.",
    emoji: "📹",
    source: "Version 1 & 2"
  },
  {
    icon: "fas fa-brain",
    title: "Predictive Safety Analytics",
    description: "AI-based analytics that identify hazards before they escalate to prevent accidents.",
    emoji: "🧠",
    source: "Version 1 & 2"
  }
];

const additionalTech = [
  {
    icon: "fas fa-ambulance",
    title: "Automated Emergency Response",
    description: "Integrated safety mechanisms that trigger instant alerts during critical conditions.",
    emoji: "🚨",
    source: "Version 1"
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "Smart Emergency Response",
    description: "Automated triggers that notify emergency contacts and support teams during critical moments.",
    emoji: "🔄",
    source: "Version 2"
  }
];

  // Pre-Tour Checks from your data
  const preTourChecks = [
    "Engine and mechanical inspections",
    "Brake and suspension verification", 
    "Sensor calibration",
    "Tyre condition and pressure checks",
    "Electrical and lighting inspection",
    "Emergency equipment readiness"
  ];

  // Driver programs from your data
  const driverPrograms = [
    {
      icon: "fas fa-trophy",
      title: "Recognition Programs",
      description: "We honor drivers for outstanding service, safe driving, punctuality, and commitment.",
      emoji: "🏆",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Skill Development", 
      description: "Regular training on advanced driving techniques, first-aid response, and safety protocols.",
      emoji: "🎓",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "fas fa-chart-line",
      title: "Performance Monitoring",
      description: "Real-time evaluation through sensors, telematics data, and behavioral analysis.",
      emoji: "📊",
      color: "from-green-400 to-emerald-500"
    }
  ];

  // Meal system features from your data
  const mealSystemFeatures = [
    "Pre-book meals before the journey",
    "Choose from multiple cuisine options",
    "Enjoy timely delivery during travel",
    "Experience cleaner, safer, and more hygienic food services",
    "Select meals in advance from verified partners",
    "Receive meals at scheduled intervals during travel"
  ];

  // Dashboard Card
  const DashboardCard = () => (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-cyan-200/70 blur-2xl" />
      <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-blue-200/80 blur-2xl" />

      <div className="relative rounded-3xl border border-sky-100 bg-white/90 p-2 md:p-4 shadow-lg shadow-sky-200">
        <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Live Journey Overview
            </div>
            <div className="text-sm font-semibold text-slate-800">
              Control Center · Anand Safety
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            All Systems Normal
          </span>
        </div>

        <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 p-4">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-600">
            <span className="font-semibold text-slate-700">
              Route Cluster – South Zone
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-[0.7rem]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Safe
            </span>
          </div>
          <div className="h-32 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.3),_transparent_60%)]">
            <div className="relative h-full w-full">
              <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
              <div className="absolute left-1/2 top-3 h-3 w-3 rounded-full bg-cyan-500 shadow-sm shadow-cyan-400" />
              <div className="absolute right-6 bottom-6 h-3 w-3 rounded-full bg-amber-400 shadow-sm shadow-amber-300" />
              <div className="absolute inset-0">
                <svg className="h-full w-full" fill="none">
                  <path
                    d="M30 80 C 120 20, 180 40, 250 75"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-[0.75rem]">
          <div className="rounded-xl bg-sky-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Active Journeys</span>
              <i className="fas fa-route text-xs text-cyan-500" />
            </div>
            <div className="mt-1 text-lg font-bold text-slate-900">
              128
            </div>
            <p className="text-[0.65rem] text-emerald-600">
              122 safe · 6 under watch
            </p>
          </div>
          <div className="rounded-xl bg-sky-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Alerts (Today)</span>
              <i className="fas fa-bell text-xs text-amber-500" />
            </div>
            <div className="mt-1 text-lg font-bold text-slate-900">
              14
            </div>
            <p className="text-[0.65rem] text-amber-600">
              3 critical, 11 minor
            </p>
          </div>
          <div className="rounded-xl bg-sky-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Response Time</span>
              <i className="fas fa-stopwatch text-xs text-blue-500" />
            </div>
            <div className="mt-1 text-lg font-bold text-slate-900">
              1.8m
            </div>
            <p className="text-[0.65rem] text-blue-600">
              Avg from alert to action
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem]">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
            Journey Monitoring
          </span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
            Driver Behaviour Analytics
          </span>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
            Emergency Workflow Engine
          </span>
        </div>
      </div>
    </div>
  );

  const AnimatedFeatureCard = ({ feature, index }) => (
    <div 
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 group observe ${
        isVisible ? 'animate-slide-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative mb-6">
        <div className="text-2xl w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          {feature.emoji}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
    </div>
  );

  const AnimatedTechItem = ({ tech, index }) => (
    <div 
      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group observe"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="w-14 h-14 mt-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-500">
        <i className={`${tech.icon} text-blue-600 text-xl group-hover:text-cyan-600`}></i>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {tech.title} {tech.emoji}
        </h4>
        <p className="text-gray-600 leading-relaxed">{tech.description}</p>
      </div>
    </div>
  );

  return (
    <div className="mx-auto px-2 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slide-in-up {
          0% { transform: translateY(100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .hover-scale-102:hover { transform: scale(1.02); }
      `}</style>

      {/* Hero Section */}
      <section className="mt-32 pb-10 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 lg:pl-10 observe ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 transform hover:scale-105 transition-transform duration-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-sm font-medium text-blue-800">Innovative Systems for Safer Travel and Smarter Mobility</span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Redefining{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Travel Safety
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed transform hover:scale-105 transition-transform duration-500">
                {/* From Version 1 About Us */}
                Anand Technology & Safety focuses on developing advanced safety-driven solutions designed to enhance travel experiences and reduce transportation risks. Our goal is to integrate intelligent technologies into everyday mobility, ensuring passengers enjoy safer, smarter, and more comfortable journeys.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group" onClick={()=>navigate('/services')}>
                  <i className="fas fa-play-circle mr-3 group-hover:scale-125 transition-transform duration-300"></i>
                  Explore Safety Solutions
                </button>
                <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group" onClick={()=>navigate('/contact')}>
                  <i className="fas fa-calendar-alt mr-3 group-hover:scale-125 transition-transform duration-300"></i>
                  Schedule Demo
                </button>
              </div>

              <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Safety Score
                  </div>
                  <div className="mt-2 text-2xl font-bold text-cyan-700">
                    {dashboardStats.safetyScore}%
                  </div>
                  <p className="text-xs text-slate-500">
                    Enhanced travel standards
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Trips Monitored
                  </div>
                  <div className="mt-2 text-2xl font-bold text-cyan-700">
                    {dashboardStats.tripsMonitored.toLocaleString()}+
                  </div>
                  <p className="text-xs text-slate-500">
                    Safer journeys delivered
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm border border-blue-100">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Incidents Prevented
                  </div>
                  <div className="mt-2 text-2xl font-bold text-cyan-700">
                    {dashboardStats.incidentsPrevented.toLocaleString()}+
                  </div>
                  <p className="text-xs text-slate-500">
                    Reduced accident risks
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <DashboardCard />
            </div>
          </div>
        </div>
      </section>

{/* Streamlined Version */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cyan-50">
  <div className="max-w-7xl mx-auto">
    
    {/* Main Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Why Anand Technology & Safety
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Transforming transportation through intelligent safety solutions that make every journey 
        safer, smarter, and more reliable. We believe safety should be built into travel, not added as an option.
      </p>
    </div>

    {/* Unified Grid of Values and Commitments */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Advanced Safety Solutions",
          description: "Predictive analytics and cutting-edge tech to reduce transportation risks",
          icon: "fas fa-shield-alt",
          color: "bg-blue-100 text-blue-600",
          border: "border-blue-200"
        },
        {
          title: "Smart Technology Integration", 
          description: "Intelligent systems for comfortable, efficient, and secure journeys",
          icon: "fas fa-brain",
          color: "bg-cyan-100 text-cyan-600",
          border: "border-cyan-200"
        },
        {
          title: "Reliable Operations",
          description: "Strict vehicle fitness checks and proactive maintenance systems",
          icon: "fas fa-cogs",
          color: "bg-emerald-100 text-emerald-600",
          border: "border-emerald-200"
        },
        {
          title: "Enhanced Travel Experience",
          description: "Driver empowerment and passenger amenities for superior comfort",
          icon: "fas fa-couch",
          color: "bg-purple-100 text-purple-600",
          border: "border-purple-200"
        }
      ].map((item, index) => (
        <div 
          key={index}
          className={`bg-white rounded-2xl p-8 border ${item.border} shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group`}
        >
          <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <i className={`${item.icon} text-2xl`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              {/* From Version 2 */}
              Comprehensive Safety Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {/* From Version 2 About Us */}
              Committed to transforming transportation through intelligent safety solutions, robust vehicle monitoring systems, and a strong emphasis on human-driven responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
<section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative">
  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="observe">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Advanced Transport Safety Systems
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {/* From Version 1 - specifically mentions buses */}
          We incorporate modern safety systems into buses and passenger vehicles to significantly reduce accident risks and improve overall travel standards.
        </p>

        <div className="space-y-4">
          {technologies.map((tech, index) => (
            <AnimatedTechItem key={index} tech={tech} index={index} />
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {additionalTech.map((tech, index) => (
            <AnimatedTechItem key={index} tech={tech} index={index + technologies.length} />
          ))}
        </div>
      </div>

      <div className="relative observe">
        <div className="bg-white rounded-3xl shadow-lg p-3 border border-blue-100 transform hover:scale-105 transition-all duration-500">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bus text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Bus Safety & Fitness Check</h3>
            <p className="text-gray-600">
              {/* From Version 2 - adapted for buses */}
              Before every bus journey, we perform comprehensive vehicle assessment to guarantee roadworthiness and safety for passenger transportation.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Engine and mechanical systems inspection for bus operations",
              "Brake and suspension verification for heavy passenger vehicles",
              "Tyre condition and pressure checks (all wheels)",
              "Sensor calibration and safety system testing",
              "Electrical and lighting system inspection for bus safety",
              "Emergency equipment readiness for passenger safety"
            ].map((check, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
              >
                <i className="fas fa-check-circle text-green-500 mr-4 text-lg group-hover:scale-125 transition-transform duration-300"></i>
                <span className="text-gray-700 font-medium">{check}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100">
            <div className="flex items-center">
              <i className="fas fa-certificate text-emerald-600 mr-3 text-xl"></i>
              <div>
                <p className="font-semibold text-emerald-800">Bus Safety Certification</p>
                <p className="text-sm text-emerald-600">
                  {/* From Version 2 - adapted for buses */}
                  We certify the bus's condition before every tour, ensuring it meets strict safety benchmarks for passenger transportation.
                </p>
              </div>
            </div>
          </div>

          {/* Additional bus-specific content */}
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border border-blue-100">
            <div className="flex items-start">
              <i className="fas fa-users text-blue-600 mr-3 text-xl mt-1"></i>
              <div>
                <p className="font-semibold text-blue-800">Passenger-Focused Safety</p>
                <p className="text-sm text-blue-600">
                  Our bus safety protocols are designed specifically for high-capacity passenger transportation, ensuring every journey meets the highest safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Driver Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Driver{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Excellence
              </span>{' '}
              Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {/* From Version 2 */}
              We acknowledge that the driver is the primary protector of every passenger. His attention, discipline, and professionalism determine the quality and safety of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {driverPrograms.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-3 group observe"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-125 transition-all duration-500">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-4 border border-amber-100 observe">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Driver-Centric Approach
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {/* From Version 2 */}
                  Drivers are treated not just as operators but as the pilots who safeguard every traveler's life. This approach encourages accountability, boosts morale, and ensures exceptional service on the road.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-user-check text-blue-600 mr-3 text-xl"></i>
                    <span className="font-medium text-gray-800">Respect & Empowerment</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-handshake text-green-600 mr-3 text-xl"></i>
                    <span className="font-medium text-gray-800">Safety Partnership</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Commitment to Drivers</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-star text-amber-500 mr-3"></i>
                    <span className="text-gray-700">Recognition for outstanding service</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-graduation-cap text-blue-500 mr-3"></i>
                    <span className="text-gray-700">Regular training and skill development</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-chart-line text-green-500 mr-3"></i>
                    <span className="text-gray-700">Performance tracking through intelligent systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Services */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="observe">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Smart Travel{' '}
                <span className="text-amber-300">Enhancements</span>
              </h2>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                {/* From Version 1 */}
                In addition to safety innovations, we are introducing technology that enhances passenger convenience and travel comfort.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-8 transform hover:scale-102 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-utensils text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Pre-Ordered Meal System</h3>
                    <p className="text-blue-200">
                      {/* From Version 1 */}
                      A dedicated digital platform allows passengers to enjoy cleaner, safer, and more hygienic food services
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {mealSystemFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center group">
                      <i className="fas fa-check-circle text-green-300 mr-4 group-hover:scale-125 transition-transform duration-300"></i>
                      <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center group" onClick={()=> navigate('/services')}>
                <i className="fas fa-rocket mr-3 group-hover:scale-125 transition-transform duration-300"></i>
                Explore Smart Services
              </button>
            </div>

            <div className="relative observe">
              <div className="bg-white rounded-3xl shadow-lg p-6 text-gray-900 transform hover:scale-105 transition-all duration-500">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-mobile-alt text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Enhanced Travel Experience</h3>
                  <p className="text-gray-600">
                    {/* From Version 1 */}
                    This system eliminates uncertainty and brings a higher level of comfort and planning to long-distance travel
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: "fas fa-mobile-alt", text: "Digital booking platform", color: "text-purple-600", description: "Pre-book meals before journey" },
                    { icon: "fas fa-utensils", text: "Multiple cuisine options", color: "text-pink-600", description: "Choose from various food choices" },
                    { icon: "fas fa-clock", text: "Timely delivery", color: "text-blue-600", description: "Enjoy meals during travel" },
                    { icon: "fas fa-shield-alt", text: "Hygienic food services", color: "text-green-600", description: "Verified food partners" }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102 group"
                    >
                      <i className={`${service.icon} ${service.color} text-xl mr-4 group-hover:scale-125 transition-transform duration-300`}></i>
                      <div>
                        <span className="font-medium text-gray-800">{service.text}</span>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="observe">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Travel Safety
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {/* Combined from versions */}
              Join us in creating safer, smarter, and more comfortable journeys through innovative safety solutions and intelligent monitoring systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex items-center justify-center group" onClick={()=>navigate('/contact')}>
                <i className="fas fa-comments mr-3 group-hover:scale-125 transition-transform duration-300"></i>
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;