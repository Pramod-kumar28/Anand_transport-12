// import React, { useEffect } from 'react'

// const About = () => {
//   // Counter animation for About page
//   useEffect(() => {
//     const animateCounters = () => {
//       const counters = document.querySelectorAll('.counter');
//       counters.forEach(counter => {
//         const target = parseInt(counter.getAttribute('data-count'));
//         const suffix = counter.textContent.includes('Million') ? 'M+' : '+';
//         let count = 0;
//         const duration = 2000;
//         const increment = target / (duration / 16);
        
//         const updateCount = () => {
//           if (count < target) {
//             count += increment;
//             counter.textContent = Math.floor(count) + (suffix && count >= target ? suffix : '');
//             setTimeout(updateCount, 16);
//           } else {
//             counter.textContent = target + (suffix ? suffix : '');
//           }
//         };
        
//         updateCount();
//       });
//     };

//     // Fade in on scroll for About page
//     const checkFadeIn = () => {
//       const fadeElements = document.querySelectorAll('.fade-in');
//       fadeElements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 150;
        
//         if (elementTop < window.innerHeight - elementVisible) {
//           element.classList.add('visible');
//         }
//       });
//     };

//     // Initialize animations
//     const timer = setTimeout(() => {
//       animateCounters();
//       checkFadeIn();
//     }, 100);

//     window.addEventListener('scroll', checkFadeIn);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', checkFadeIn);
//     };
//   }, []);

//   // Founder Profile Component
//   const FounderProfile = () => (
//     <section className="max-w-6xl mx-auto pt-12 py-2 fade-in ">
//       <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 items-start">
//         {/* Left: Image card with quote below */}
//         <div className="space-y-6">
//           <div className="relative overflow-hidden">
//             <div className='flex item-end  w-full justify-center '>
//                 <img
//               src="./images/CEO.png"
//               alt="Founder"
//               className="w-70 h-[600px] object-cover object-top center"
//               style={{ borderRadius: 12 }}
//             />
//             </div>

//             {/* Small floating badge */}
//             <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-20 sm:bottom-10 sm:right-20">
//               <div className="bg-white px-4 py-3 rounded-lg shadow-md font-semibold text-gray-700 border border-gray-100">
//                 <div className="uppercase text-lg tracking-wide text-center text-amber-500 font-bold">ANAND</div>
//                 <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
//               </div>
//             </div>
//           </div>

//           {/* Quote below image */}
//           <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-4 text-base">
//             "We don't just build safety systems; we build trust. Every journey protected is a life secured, every innovation implemented is a step towards safer mobility for all."
//           </blockquote>
//         </div>

//         {/* Right: Content */}
//         <div className="pt-6">
//           <h2 className="text-3xl font-bold text-slate-800">Anand</h2>
//           <p className="text-sm text-blue-700 font-medium mt-1">Founder & Chairman</p>

//           {/* Description */}
//           <div className="mb-6 space-y-4 mt-6">
//             <p className="text-gray-700 leading-relaxed text-base">
//               Under the visionary leadership of our Founder, Mr. Anand, Anand Technology & Safety was established on the foundational principle of 
//               <span className='font-bold text-amber-500'> "Dharmo Rakshati Rakshitah"</span> — that one who upholds righteousness is protected by it.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-base">
//               This ancient wisdom forms the bedrock of our company's ethos, guiding our mission to develop transportation safety solutions that don't just meet standards, but set new benchmarks for protection and reliability.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-base">
//               With a background in engineering and a passion for innovation, Mr. Anand envisioned a future where technology and human values converge to create safer travel experiences for everyone.
//             </p>
//           </div>

//           {/* Core Values */}
//           <div className="mt-8">
//             <h3 className="text-xl font-bold text-slate-800 mb-4">Our Core Values</h3>
//             <div className="space-y-3">
//               <div className="flex items-center text-gray-700">
//                 <i className="fas fa-shield-alt text-amber-500 mr-3"></i>
//                 <span>Safety as a Fundamental Right</span>
//               </div>
//               <div className="flex items-center text-gray-700">
//                 <i className="fas fa-handshake text-amber-500 mr-3"></i>
//                 <span>Ethical Innovation</span>
//               </div>
//               <div className="flex items-center text-gray-700">
//                 <i className="fas fa-users text-amber-500 mr-3"></i>
//                 <span>Human-Centered Technology</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   // Stats Section Component
//   const StatsSection = () => (
//     <section className="py-16 text-black w-full bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {[
//             { count: 99, label: 'Safety Record %' },
//             { count: 50, label: 'Technology Systems' },
//             { count: 10, label: 'Million+ Miles' },
//             { count: 95, label: 'Client Trust %' }
//           ].map((stat, index) => (
//             <div key={index} className="p-4 fade-in">
//               <div className="text-4xl text-blue-800 font-bold mb-2 counter" data-count={stat.count}>0</div>
//               <div className="text-lg text-black">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )

//   const ideologyPillars = [
//     {
//       icon: 'fas fa-dharmachakra',
//       title: 'Dharma-Driven Approach',
//       description: 'Our actions are guided by moral responsibility and ethical principles. We believe that true safety comes from doing what is right, not just what is required.',
//     },
//     {
//       icon: 'fas fa-lightbulb',
//       title: 'Innovation with Purpose',
//       description: 'Every technological advancement we pursue serves a clear purpose: to protect lives and enhance travel experiences through intelligent, meaningful innovation.',
//     },
//     {
//       icon: 'fas fa-heart',
//       title: 'Human-Centered Design',
//       description: 'We place people at the center of every solution, ensuring our technology serves human needs and enhances the travel experience for all.',
//     }
//   ]

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="text-white py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 ">
//         <div className="container mx-auto px-4 text-center pt-10">
//           <div className="text-xl text-amber-300 mb-4 font-sans">
//             Dharmo Rakshati Rakshitah
//           </div>
//           <h1 className="text-4xl font-bold mb-4">
//             Our Foundation
//           </h1>
//           <p className="text-lg max-w-2xl mx-auto">
//             Built on timeless principles, driven by modern innovation
//           </p>
//         </div>
//       </section>

//       {/* Founder Section */}
//       <section className=" bg-gray-50">
//         <div className="container mx-auto  py-6 px-4">
          
//           <FounderProfile />
//         </div>
//       </section>

//       {/* Ideology Section */}
//       <section className="py-10 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Guiding Ideology</h2>
//             <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
//             <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//               Our approach to transportation safety is rooted in timeless principles that guide every innovation and decision we make.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {ideologyPillars.map((pillar, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
//                 <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <i className={`${pillar.icon} text-amber-600 text-3xl`}></i>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{pillar.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-10 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Commitment</h2>
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <p className="text-xl text-gray-700 leading-relaxed mb-6">
//                 "At Anand Technology & Safety, we are committed to transforming transportation through intelligent safety solutions that honor our foundational principle of Dharma. 
//                 We believe that protecting lives through technology is not just our business, but our moral responsibility."
//               </p>
//               <div className="text-amber-500 font-semibold">
//                 — Anand, Founder & Chairman
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <StatsSection />
//     </div>
//   )
// }

// export default About

















import React, { useEffect } from 'react'

const About = () => {
  // Enhanced animations for About page
  useEffect(() => {
    // Counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = counter.textContent.includes('Million') ? 'M+' : '+';
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count) + (suffix && count >= target ? suffix : '');
            setTimeout(updateCount, 16);
          } else {
            counter.textContent = target + (suffix ? suffix : '');
          }
        };
        
        updateCount();
      });
    };

    // Enhanced fade in on scroll with staggered delays
    const checkFadeIn = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      fadeElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          // Stagger animation delays based on index
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
        }
      });
    };

    // Initialize animations
    const timer = setTimeout(() => {
      animateCounters();
      checkFadeIn();
    }, 100);

    window.addEventListener('scroll', checkFadeIn);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkFadeIn);
    };
  }, []);

  // Founder Profile Component with enhanced animations
const FounderProfile = () => (
  <section className="max-w-6xl mx-auto pt-12 py-2">
    <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 items-start">
      {/* Left: Image card with quote below */}
      <div className="space-y-6">
        <div className="relative overflow-hidden slide-in-left">
          <div className='flex item-end w-full justify-center'>
            <img
              src="./images/CEO.png"
              alt="Founder"
              className="w-70 h-[600px] object-cover object-top center transform hover:scale-105 transition-transform duration-700"
              style={{ borderRadius: 12 }}
            />
          </div>

          {/* Small floating badge with animation */}
          <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-20 sm:bottom-10 sm:right-20 scale-in">
            <div className="bg-white px-4 py-3 rounded-lg shadow-lg font-semibold text-gray-700 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="uppercase text-lg tracking-wide text-center text-amber-500 font-bold">ANAND</div>
              <div className="text-xs text-gray-500 text-center">Founder & Chairman</div>
            </div>
          </div>
        </div>

        {/* Quote below image - Using a powerful quote */}
        <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700 bg-amber-50 rounded-lg p-4 text-base slide-in-left">
          "Redefining Travel Safety Through Innovation, Monitoring, and Human Excellence."
        </blockquote>
      </div>

      {/* Right: Content */}
      <div className="pt-6 slide-in-right">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Anand</h2>
        <p className="text-sm text-blue-700 font-medium">Founder & Chairman</p>

        {/* Attractive Description */}
        <div className="mb-6 space-y-4 mt-6">
          <p className="text-gray-700 leading-relaxed text-base fade-in">
            <span className="font-bold text-blue-600">Visionary Leader</span> behind Anand Technology & Safety, pioneering the transformation of transportation through <span className="font-bold">intelligent safety solutions</span> and robust monitoring systems that make every journey safer, smarter, and more reliable.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-base fade-in">
            Under his leadership, we've developed <span className="font-bold">advanced safety-driven technologies</span> that don't just meet standards—they set new benchmarks for protection. Our systems reduce accident risks while enhancing passenger comfort and confidence on every trip.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-base fade-in">
            From <span className="font-bold">predictive analytics</span> that prevent accidents before they occur, to <span className="font-bold">driver recognition programs</span> that honor excellence, Anand's approach blends cutting-edge innovation with deep respect for the human element in transportation safety.
          </p>
        </div>

        {/* Core Values */}
        <div className="mt-8 fade-in">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Leadership Philosophy</h3>
          <div className="space-y-3">
            {[
              { 
                icon: 'fas fa-rocket', 
                text: 'Innovation with Purpose',
                description: 'Every technological advancement serves one goal: to protect lives and enhance travel experiences through intelligent, meaningful innovation.'
              },
              { 
                icon: 'fas fa-users', 
                text: 'Human-Centered Design',
                description: 'We place people at the center of every solution—recognizing that drivers are the primary protectors and passengers deserve the safest journeys.'
              },
              { 
                icon: 'fas fa-shield-alt', 
                text: 'Safety as Standard',
                description: 'Creating travel environments where safety is not optional—it is built into every system, process, and journey from the ground up.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="flex items-start text-gray-700 p-3 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:translate-x-2"
              >
                <i className={`${value.icon} text-amber-500 mr-3 text-lg`}></i>
                <div>
                  <span className="font-medium">{value.text}</span>
                  {/* <p className="text-sm text-gray-600 mt-1">{value.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
  // Stats Section Component with enhanced animations
  const StatsSection = () => (
    <section className="py-6 text-black w-full bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { count: 99, label: 'Safety Record %', icon: 'fas fa-shield-check' },
            { count: 50, label: 'Technology Systems', icon: 'fas fa-microchip' },
            { count: 10, label: 'Million+ Miles', icon: 'fas fa-road' },
            { count: 95, label: 'Client Trust %', icon: 'fas fa-handshake' }
          ].map((stat, index) => (
            <div key={index} className="p-6 fade-in group hover:scale-105 transition-transform duration-300">
              
              <div className="text-3xl text-blue-800 font-bold mb-2 counter" data-count={stat.count}>0</div>
              <div className="text-lg text-black font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

const ideologyPillars = [
  {
    icon: 'fas fa-shield-alt',
    title: 'Safer Journeys',
    description: 'Through advanced technology and intelligent safety systems, we ensure every trip is protected by predictive analytics and real-time monitoring.',
  },
  {
    icon: 'fas fa-clipboard-check',
    title: 'Reliable Operations',
    description: 'Through strict vehicle fitness checks, proactive maintenance, and comprehensive safety inspections for consistent performance.',
  },
  {
    icon: 'fas fa-user-graduate',
    title: 'Better Experiences',
    description: 'Through professionally trained drivers, ongoing education programs, and customer-focused service excellence.',
  }
]

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero Section with enhanced animation */}
      <section className="text-white py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-xl text-amber-300 mb-4 font-sans fade-in">
            Dharmo Rakshati Rakshitah
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 fade-in">
            Our Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto fade-in animation-delay-300">
            Built on timeless principles, driven by modern innovation
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto py-6 px-4">
          <FounderProfile />
        </div>
      </section>

      {/* Ideology Section with enhanced animations */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 fade-in">Our Commitment</h2>
            <p className="text-gray-600 max-w-5xl mx-auto text-md md:text-lg leading-relaxed fade-in">
              Anand Technology & Safety is committed to transforming the transportation sector
              through intelligent safety solutions, robust vehicle monitoring systems, and a strong
              emphasis on human-driven responsibility. We focus on elevating safety standards,
              enhancing passenger confidence, and ensuring a smarter, more reliable travel
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ideologyPillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl text-center fade-in group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${pillar.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .fade-in {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .slide-in-left {
          opacity: 0;
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .slide-in-right {
          opacity: 0;
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .scale-in {
          opacity: 0;
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .visible {
          opacity: 1;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Hover effects */
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\:-translate-y-2 {
          transform: translateY(-0.5rem);
        }
      `}</style>
    </div>
  )
}

export default About