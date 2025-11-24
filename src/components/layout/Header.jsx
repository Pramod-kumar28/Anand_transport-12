// import React, { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const isActive = (path) => location.pathname === path

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''}`}>
//       <div className="container mx-auto px-4 py-2">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             {/* Founder Logo - Rounded for both desktop and mobile */}
//             <div className="h-14 w-14 rounded-full border border-amber-500 shadow-lg overflow-hidden mr-3">
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
            
//             <Link to="/" className="hover:opacity-90 transition-opacity duration-300">
//               <div>
//                 <h2 className="text-xl font-bold text-blue-800">
//                   <span className="text-amber-500">ANAND</span> TECHNOLOGY & SAFETY
//                 </h2>
//                 <p className="text-[10px] italic -mt-0.5 text-gray-500">
//                   "Dharmo Rakshati Rakshitah"
//                 </p>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-3">
//             <Link 
//               to="/" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/') 
//                   ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
//                   : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/about') 
//                   ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
//                   : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
//               }`}
//             >
//               About
//             </Link>
//             <Link 
//               to="/services" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/services') 
//                   ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
//                   : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
//               }`}
//             >
//               Services
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
//                 isActive('/contact') 
//                   ? 'text-blue-800 bg-amber-500 bg-opacity-10' 
//                   : 'text-gray-700 hover:text-amber-500 hover:bg-gray-100'
//               }`}
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100"
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
//             <Link 
//               to="/" 
//               className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link 
//               to="/services" 
//               className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link 
//               to="/contact" 
//               className="font-medium px-4 py-3 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-500 hover:bg-gray-100"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Contact
//             </Link>
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
      <div className="w-full py-4 container mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section - Fixed width */}
          <div className="flex items-center max-w-[75%] flex-shrink">
            {/* Founder Logo */}
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden mr-2 md:mr-3 border-2 border-amber-200 shadow-lg flex-shrink-0">
              <img 
                src="./images/CEO.png" 
                alt="Anand Technology CEO" 
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110" 
              />
            </div>
            
            {/* Company Logo */}
            <div className="h-10 w-10 md:h-10 md:w-10 overflow-hidden mr-2 md:mr-3 flex-shrink-0">
              <img 
                src="./images/logo.png" 
                alt="Anand Technology Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            
            {/* Text Section */}
            <Link to="/" className="hover:opacity-90 transition-opacity duration-300 min-w-0 flex-shrink">
              <div className="min-w-0">
                {/* Desktop View - Full Name */}
                <h2 className="hidden md:block text-lg md:text-xl font-bold text-blue-800 whitespace-nowrap">
                  <span className="text-amber-500">ANAND</span> TECHNOLOGY & SAFETY
                </h2>
                {/* Mobile View - Compact */}
                <h2 className="md:hidden text-sm font-bold text-blue-800 whitespace-nowrap">
                  <span className="text-amber-500">ANAND</span> TECH & SAFETY
                </h2>
                <p className="text-[10px] md:text-[12px] italic -mt-0.5 text-gray-500 whitespace-nowrap">
                  "Dharmo Rakshati Rakshitah"
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3 flex-shrink-0">
            <Link 
              to="/" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100 flex-shrink-0 ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-base`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pt-3' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-3">
            <Link 
              to="/" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-800 bg-blue-500 bg-opacity-10' 
                  : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
              }`}
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