// import React, { useState, useEffect } from 'react'

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             {/* Founder Logo - Rounded for both desktop and mobile */}
//             <div className="h-14 w-14 rounded-full border border-accent-500 shadow-lg overflow-hidden mr-3">
//               <img 
//                 src="./images/CEO.png" 
//                 alt="Anand Technology CEO" 
//                 className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
//               />
//             </div>
            
//             {/* Company Logo */}
//             <div className="h-13 w-10 overflow-hidden mr-3">
//               <img 
//                 src="./images/logo.png" 
//                 alt="Anand Technology Logo" 
//                 className="h-full w-full object-contain" 
//               />
//             </div>
            
//             <div className="hover:opacity-90 transition-opacity duration-300">
//               <div>
//                 <h2 className={`text-xl font-bold transition-colors duration-300 `}>
//                   <span className="text-accent-500">ANAND</span> TECHNOLOGY
//                 </h2>
//                 <p className={`text-[10px] italic -mt-0.5 transition-colors duration-300 `}>
//                   "Dharmo Rakshati Rakshitah"
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-3">
//             {['Home', 'About', 'Services', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                   isScrolled 
//                     ? 'text-gray-700 hover:text-accent-500 hover:bg-gray-100 ' 
//                     : 'text-black hover:text-accent-400 hover:bg-white hover:bg-opacity-10'
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
//               isScrolled 
//                 ? 'text-gray-700 hover:bg-gray-100' 
//                 : 'text-white hover:bg-white hover:bg-opacity-10'
//             }`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isMobileMenuOpen ? 'max-h-64 opacity-100 pt-4' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="flex flex-col space-y-3 pb-2 bg-white rounded-lg shadow-lg p-4">
//             {['Home', 'About', 'Services', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-accent-500 hover:bg-gray-100"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header


















import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            {/* Founder Logo - Rounded for both desktop and mobile */}
            <div className="h-14 w-14 rounded-full border border-amber-500 shadow-lg overflow-hidden mr-3">
              <img 
                src="./images/CEO.png" 
                alt="Anand Technology CEO" 
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
              />
            </div>
            
            {/* Company Logo */}
            <div className="h-13 w-10 overflow-hidden mr-3">
              <img 
                src="./images/logo.png" 
                alt="Anand Technology Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            
            <Link to="/" className="hover:opacity-90 transition-opacity duration-300">
              <div>
                <h2 className="text-xl font-bold text-blue-800">
                  <span className="text-amber-500">ANAND</span> TECHNOLOGY
                </h2>
                <p className="text-[10px] italic -mt-0.5 text-gray-500">
                  "Dharmo Rakshati Rakshitah"
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3">
            <Link 
              to="/" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-3 pb-2 bg-white rounded-lg shadow-lg p-4">
            <Link 
              to="/" 
              className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header       