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














import React, { useState, useEffect } from "react";

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const safetyFeatures = [
    {
      icon: "fas fa-satellite-dish",
      title: "Multi-Layered Sensor Network",
      desc: "Sensors across the vehicle continuously track engine health, route conditions and surrounding risk factors.",
      points: [
        "Real-time engine & component telemetry",
        "Hazard detection on critical routes",
        "Instant anomaly flagging to control room",
      ],
      tag: "VEHICLE INTELLIGENCE",
    },
    {
      icon: "fas fa-user-shield",
      title: "Real-Time Driver Assistance",
      desc: "Driver behavior is monitored in real time for fatigue, harsh events and risky actions with instant guidance.",
      points: [
        "Fatigue & distraction alerts",
        "Overspeed & harsh braking coaching",
        "Driver scorecards with trends",
      ],
      tag: "DRIVER INTELLIGENCE",
    },
    {
      icon: "fas fa-video",
      title: "360° Monitoring & Surveillance",
      desc: "Interior and exterior coverage with analytics to reconstruct events and keep passengers and crew fully visible.",
      points: [
        "High-resolution 360° camera coverage",
        "Event-based video snippets for incidents",
        "Privacy-aligned monitoring policies",
      ],
      tag: "VISIBILITY & EVIDENCE",
    },
    {
      icon: "fas fa-bell",
      title: "Smart Emergency Response",
      desc: "Automatic triggers connect vehicles, dispatch, hospitals and authorities when critical thresholds are crossed.",
      points: [
        "SOS buttons for drivers & staff",
        "Auto GPS & status sharing on incident",
        "Escalation workflows for critical cases",
      ],
      tag: "EMERGENCY READINESS",
    },
    {
      icon: "fas fa-brain",
      title: "Predictive Safety Analytics",
      desc: "AI models learn from journeys to predict where and when risks are likely to rise — before incidents happen.",
      points: [
        "Risk heatmaps by route & time",
        "Recurring issue detection",
        "Proactive interventions & actions",
      ],
      tag: "AI-DRIVEN PREVENTION",
    },
  ];

  // Simple animated numbers (optional subtle effect)
  const [stats, setStats] = useState({
    safetyScore: 96,
    tripsMonitored: 3200,
    incidentsPrevented: 480,
  });

  useEffect(() => {
    // Tiny animation bump when component mounts
    const timeout = setTimeout(
      () =>
        setStats({
          safetyScore: 99,
          tripsMonitored: 10000,
          incidentsPrevented: 1200,
        }),
      800
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
      {/* HERO - Split Layout */}
      <section className="border-b border-sky-100">
        <div className="container mx-auto flex flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between lg:py-20">
          {/* Left: Text */}
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
              <span className="h-1 w-1 animate-pulse rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400" />
              Anand Technology &amp; Safety
            </div>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-4xl">
              Intelligent{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Travel Safety
              </span>{" "}
              for Every Journey.
            </h1>

            <p className="text-base text-slate-700 sm:text-lg">
              We blend sensors, AI and human expertise into one connected safety
              layer – so operators see issues early, drivers get real support,
              and passengers feel safe from pickup to destination.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-300/70 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base">
                <i className="fas fa-rocket mr-2 text-xs" />
                Explore Platform
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-cyan-400/70 bg-white px-8 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition-all hover:bg-cyan-50 sm:text-base">
                <i className="fas fa-calendar-check mr-2 text-xs" />
                Book a Safety Demo
              </button>
            </div>

            <div className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Safety Score
                </div>
                <div className="mt-2 text-2xl font-bold text-cyan-700">
                  {stats.safetyScore}%
                </div>
                <p className="text-xs text-slate-500">
                  Average safety improvement across fleets.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Trips Monitored
                </div>
                <div className="mt-2 text-2xl font-bold text-cyan-700">
                  {stats.tripsMonitored.toLocaleString()}+
                </div>
                <p className="text-xs text-slate-500">
                  Real journeys protected end-to-end.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Incidents Prevented
                </div>
                <div className="mt-2 text-2xl font-bold text-cyan-700">
                  {stats.incidentsPrevented.toLocaleString()}+
                </div>
                <p className="text-xs text-slate-500">
                  High-risk situations avoided in time.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Safety Dashboard Mock */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-cyan-200/70 blur-2xl" />
            <div className="absolute -right-8 bottom-4 h-24 w-24 rounded-full bg-blue-200/80 blur-2xl" />

            <div className="relative rounded-3xl border border-sky-100 bg-white/90 p-4 shadow-2xl shadow-sky-200">
              {/* Header */}
              <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Live Fleet Overview
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

              {/* Map / Route Card */}
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
                  {/* Simulated route dots */}
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

              {/* Metrics Row */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-[0.75rem]">
                <div className="rounded-xl bg-sky-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Active Vehicles</span>
                    <i className="fas fa-bus text-xs text-cyan-500" />
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

              {/* Footer tags */}
              <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem]">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-cyan-700">
                  Live Fleet Monitoring
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
        </div>
      </section>

      {/* WHY ANAND SAFETY - 3 Column Highlights */}
      <section className="border-b border-sky-100 bg-white/80">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Why fleets choose{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Anand Safety
              </span>
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              We don&apos;t just provide devices. We provide an end-to-end
              safety ecosystem that can be deployed in real operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-3xl border border-sky-100 bg-sky-50/70 p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                <i className="fas fa-layer-group text-cyan-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Layered Safety Architecture
              </h3>
              <p className="text-sm text-slate-700">
                From hardware sensors to dashboards, every layer is designed to
                talk to the others – reducing no-blind-spot gaps.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 shadow-sm">
                <i className="fas fa-users-cog text-cyan-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Human-Centered Design
              </h3>
              <p className="text-sm text-slate-700">
                Dashboards for managers, mobile views for drivers, clear SOPs
                for staff – we design for people, not just machines.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 shadow-sm">
                <i className="fas fa-clipboard-check text-cyan-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Compliance & Reporting Ready
              </h3>
              <p className="text-sm text-slate-700">
                Generate incident logs, training records and audit trails that
                support regulatory compliance without extra manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY LAYERS - Tabbed Format */}
      <section className="border-b border-sky-100 bg-gradient-to-b from-sky-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              One Platform ·{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Multiple Safety Layers
              </span>
            </h2>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">
              Each layer works independently but becomes far more powerful when
              connected through the Anand Safety platform.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-sm shadow-sky-100">
            {safetyFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-sky-50"
                }`}
              >
                <i className={`${feature.icon} text-[0.8rem]`} />
                {feature.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-md shadow-sky-100">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50">
                    <i
                      className={`${safetyFeatures[activeFeature].icon} text-cyan-600`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {safetyFeatures[activeFeature].title}
                    </h3>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cyan-600">
                      {safetyFeatures[activeFeature].tag}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 sm:text-[0.95rem]">
                {safetyFeatures[activeFeature].desc}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {safetyFeatures[activeFeature].points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[0.6rem] text-cyan-700">
                      <i className="fas fa-check" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side Card: Example Output */}
            <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100">
              <h4 className="mb-3 text-sm font-semibold text-slate-800">
                Example Outcome
              </h4>
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-3 py-2">
                  <span>Issue Detection Time</span>
                  <span className="font-semibold text-cyan-700">
                    &lt; 30 seconds
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-3 py-2">
                  <span>Manual Calls Required</span>
                  <span className="font-semibold text-emerald-700">-65%</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-3 py-2">
                  <span>Near-Miss Incidents</span>
                  <span className="font-semibold text-emerald-700">-40%</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-3 text-[0.75rem] text-slate-700">
                <span className="font-semibold text-cyan-700">
                  Insight:&nbsp;
                </span>
                Combining {safetyFeatures[activeFeature].title.toLowerCase()}{" "}
                with driver coaching increases impact across the entire fleet,
                not just single vehicles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE & DRIVER ASSURANCE - New Layout */}
      <section className="border-b border-sky-100 bg-white/90">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Vehicle Fitness */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Vehicle Fitness, Trip by Trip
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Before each journey, vehicles pass through a practical, quick
                but detailed checklist – built to reduce last-minute surprises.
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-700">
                {[
                  "Engine & transmission health check",
                  "Brake, tyre and steering assurance",
                  "Lighting, horn and visibility confirmation",
                  "Emergency tools and safety kit verification",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl bg-sky-50 px-4 py-3"
                  >
                    <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-[0.6rem] text-cyan-700">
                      <i className="fas fa-check-circle" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Driver Excellence */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Driver Excellence Program
              </h2>
              <p className="mt-3 text-sm text-slate-700">
                Technology is most powerful when drivers feel supported, not
                watched. Our approach builds skills, confidence and ownership.
              </p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">
                      Training & Onboarding
                    </span>
                    <i className="fas fa-chalkboard-teacher text-cyan-600" />
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Clear sessions on alerts, dashboards and expected actions
                    during normal days and emergencies.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">
                      Transparent Scoring
                    </span>
                    <i className="fas fa-star text-amber-500" />
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Drivers can see their own patterns and improvements, with
                    coaching instead of only punishment.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">
                      Recognition & Rewards
                    </span>
                    <i className="fas fa-trophy text-yellow-500" />
                  </div>
                  <p className="mt-1 text-xs text-slate-600">
                    Celebrate safe driving records, zero-incident streaks and
                    drivers who respond best to coaching.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certification strip */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 px-5 py-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                <i className="fas fa-award" />
              </div>
              <div>
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cyan-800">
                  Process Quality
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  ISO 9001:2015 aligned safety operations
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-600 md:max-w-md">
              Checklists, logs and actions are designed so they can be audited
              and improved continuously as your fleet grows.
            </p>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT JOURNEY */}
      <section className="border-b border-sky-100 bg-gradient-to-b from-sky-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Your Safety Transformation Journey
            </h2>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">
              We follow a clear, practical rollout path so teams are never
              confused about what happens next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                text: "Understand current safety gaps, routes, vehicles and existing SOPs.",
              },
              {
                step: "02",
                title: "Design & Pilot",
                text: "Configure sensors, alerts and workflows for a small controlled set.",
              },
              {
                step: "03",
                title: "Scale & Train",
                text: "Roll out across fleet with driver, staff and management training.",
              },
              {
                step: "04",
                title: "Optimize & Report",
                text: "Continuously tune alerts, review incidents and share outcome reports.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-3xl border border-sky-100 bg-white p-5 text-left shadow-sm"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-xs font-semibold text-cyan-700">
                  {item.step}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Ready to make safety your fleet&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              strongest feature
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-700 sm:text-base">
            Talk to our team about your routes, passenger profiles and vehicles.
            We&apos;ll help you design a safety blueprint that actually works on
            the road.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-300/80 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base">
              <i className="fas fa-comments mr-2 text-xs" />
              Talk to Safety Expert
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-cyan-400/70 bg-white px-10 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition-all hover:bg-cyan-50 sm:text-base">
              <i className="fas fa-file-alt mr-2 text-xs" />
              Download Concept Deck
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

