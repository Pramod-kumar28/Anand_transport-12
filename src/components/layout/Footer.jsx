// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <h3 className="text-2xl font-bold mb-4">
//               Anand <span className="text-amber-500">Technology</span>
//             </h3>
//             <p className="text-gray-300 mb-4 max-w-md text-sm">
//               Redefining Travel Safety Through Innovation, Monitoring, and Human Excellence. 
//               We are committed to transforming transportation with intelligent safety solutions.
//             </p>
//             <div className="flex space-x-4">
//               {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
//                 <a
//                   key={social}
//                   href="#"
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
//                 >
//                   <i className={`fab fa-${social}`}></i>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {[
//                 { path: '/', label: 'Home' },
//                 { path: '/about', label: 'About' },
//                 { path: '/services', label: 'Services' },
//                 { path: '/contact', label: 'Contact' }
//               ].map((item) => (
//                 <li key={item.path}>
//                   <Link to={item.path} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//             <ul className="space-y-2 text-gray-300 text-sm">
//               <li className="flex items-center">
//                 <i className="fas fa-map-marker-alt mr-3 text-amber-500"></i>
//                 <span>123 Safety Street, Tech City</span>
//               </li>
//               <li className="flex items-center">
//                 <i className="fas fa-phone mr-3 text-amber-500"></i>
//                 <span>+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center">
//                 <i className="fas fa-envelope mr-3 text-amber-500"></i>
//                 <span>info@anandtechnology.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
//           <p>&copy; {new Date().getFullYear()} Anand Technology & Safety. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

















import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px from top
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { path: "/", label: "Home", icon: "fas fa-home" },
    { path: "/about", label: "About", icon: "fas fa-info-circle" },
    { path: "/services", label: "Services", icon: "fas fa-cogs" },
    { path: "/contact", label: "Contact", icon: "fas fa-envelope" }
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "H.No. 131/A, 2nd Floor, MLA Colony, Beside Vamsiram Banjara Abodes, Road No.12, Lane 14, Banjara Hills, Hyderabad-500034." },
    { icon: "fas fa-phone", text: "+91 1800 123 4857" },
    { icon: "fas fa-envelope", text: "info@anandgroup.org" },
    { icon: "fas fa-clock", text: "Mon - Fri: 9:00 AM - 6:00 PM" }
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#", color: "hover:bg-blue-600" },
    { icon: "fab fa-twitter", url: "#", color: "hover:bg-blue-400" },
    { icon: "fab fa-instagram", url: "#", color: "hover:bg-pink-600" },
    { icon: "fab fa-linkedin-in", url: "#", color: "hover:bg-blue-800" },
    { icon: "fab fa-youtube", url: "#", color: "hover:bg-red-600" }
  ];

  const openLegalModal = (type) => {
    setActiveModal(type);
  };

  const closeLegalModal = () => {
    setActiveModal(null);
  };

  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Last Updated:</strong> ${currentYear}</p>
          
          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Information We Collect</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Personal identification information</li>
              <li>Contact details and company information</li>
              <li>Technical data and usage information</li>
              <li>Communication history</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">How We Use Your Information</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>Provide and maintain our safety services</li>
              <li>Improve and personalize user experience</li>
              <li>Communicate important updates</li>
              <li>Ensure system security and reliability</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Data Protection</h4>
            <p class="text-gray-600">We implement advanced security measures including encryption and secure servers to protect your information. All data is handled with strict confidentiality.</p>
          </div>
        </div>
      `
    },
    Terms: {
      title: "Terms of Service",
      content: `
        <div class="space-y-4">
          <p class="text-gray-700"><strong>Effective Date:</strong> ${currentYear}</p>
          
          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Service Agreement</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>All services are provided as per agreed specifications</li>
              <li>Users must comply with applicable laws and regulations</li>
              <li>Service terms may be updated with prior notice</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Intellectual Property</h4>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
              <li>All technology and systems are proprietary</li>
              <li>Unauthorized use or distribution is prohibited</li>
              <li>Documentation and training materials are protected</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Limitation of Liability</h4>
            <p class="text-gray-600">While we strive for maximum safety and reliability, certain conditions may be beyond our control. Users should maintain adequate insurance and follow safety guidelines.</p>
          </div>
        </div>
      `
    },
    Disclaimer: {
      title: "Disclaimer",
      content: `
        <div class="space-y-4">
          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">General Information</h4>
            <p class="text-gray-600">The information provided on our platform and through our services is for general informational purposes only. While we make every effort to ensure accuracy, we make no representations or warranties of any kind.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Safety Systems</h4>
            <p class="text-gray-600">Our safety systems are designed to enhance transportation safety but cannot guarantee complete prevention of accidents. Proper maintenance and responsible operation are essential.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-blue-800 mb-2">Third-Party Content</h4>
            <p class="text-gray-600">Our platform may contain references to third-party technologies and systems. We are not responsible for the content or reliability of external resources.</p>
          </div>
        </div>
      `
    }
  };

  return (
    <>
      {/* Main Footer */}
      <footer className=" bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Company Info - Completely Left Aligned */}
              <div className="text-left">
                <div className="flex flex-col items-start space-y-4">
                  {/* Branding Section */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
                        <img
                          src="./images/logo.png"
                          alt="Anand Technology & Safety"
                          className="w-[70%] h-[70%] object-contain"
                        />
                      </div>
                    </div>
                    <div className="-ml-3">
                      {/* Desktop View */}
                      <h2 className="hidden lg:block text-md font-bold leading-tight">
                        <span className="text-amber-400">ANAND</span> 
                        <span className="text-white"> TECHNOLOGY & SAFETY</span>
                      </h2>
                      {/* Mobile View */}
                      <h2 className="lg:hidden text-[11px] font-bold leading-tight -pl-2 ">
                        <span className="text-amber-400">ANAND</span> 
                        <span className="text-white"> TECHNOLOGY & SAFETY</span>
                      </h2>
                      <p className="text-amber-200 text-xs italic mt-1">"Dharmo Rakshati Rakshitah"</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Leading the revolution in transportation safety through innovative technology solutions. 
                    Protecting lives with cutting-edge security systems and intelligent monitoring.
                  </p>

                  {/* Copyright */}
                  <p className="text-gray-200 text-sm">
                    "Redefining Travel Safety Through Innovation, Monitoring, and Human Excellence"
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links - Completely Left Aligned */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-6 text-amber-500">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-200 group justify-start"
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info - Completely Left Aligned */}
              <div className="text-left">
                <h3 className="text-lg font-bold mb-6 text-amber-500">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 group justify-start">
                      <i className={`${item.icon} text-white mt-1 group-hover:scale-110 transition-transform duration-200`}></i>
                      <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Left Aligned on Mobile */}
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <div className="text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} <span className="text-amber-400 font-semibold">Anand Technology & Safety</span>. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap justify-start lg:justify-center gap-6">
                <button
                  onClick={() => openLegalModal("Privacy")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openLegalModal("Terms")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => openLegalModal("Disclaimer")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Disclaimer
                </button>
              </div>

              <div className="text-left lg:text-right">
                <p className="text-gray-500 text-sm">
                  Crafted by{" "}
                  <a 
                    href="https://designcareermetrics.com" 
                    className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Design Career Metrics
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {legalContent[activeModal]?.title}
                </h3>
                <button
                  onClick={closeLegalModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: legalContent[activeModal]?.content }}
              />
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={closeLegalModal}
                  className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button - Conditionally Rendered */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-amber-500 text-white rounded-full shadow-2xl hover:bg-amber-600 transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;