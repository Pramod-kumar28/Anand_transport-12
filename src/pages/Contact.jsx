import React, { useState, useRef, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="pt-16 overflow-hidden">
      {/* Compact Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Let's Connect
          </h1>
          <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Ready to enhance your safety? Reach out and let's start the conversation about your security needs.
          </p>
          
          {/* Compact CTA */}
          <div className="mt-6 animate-bounce-slow">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-amber-400">👇</span>
              <span className="text-sm font-medium">Scroll to Get in Touch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Contact Form & Info */}
      <section ref={sectionRef} className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Contact Form - Compact */}
            <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                  <i className="fas fa-paper-plane text-white text-sm"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Send Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="group flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 placeholder-gray-400 resize-none text-sm"
                      placeholder="Tell us about your safety requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden text-sm"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact Information - Compact */}
            <div className="flex flex-col h-full space-y-4 md:space-y-6">
              {/* Contact Info Card */}
              <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-1 flex-1">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                    <i className="fas fa-headset text-white text-sm"></i>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Get in Touch</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { 
                      icon: 'map-marker-alt', 
                      title: 'Address', 
                      content: 'Hiko, 131/A, 2nd Floor Banjara Hills,<br/> Hyderabad Telangana - 500034',
                      iconColor: 'from-blue-500 to-blue-600'
                    },
                    { 
                      icon: 'phone', 
                      title: 'Phone', 
                      content: '+91 1800 123 4857',
                      iconColor: 'from-green-500 to-green-600'
                    },
                    { 
                      icon: 'envelope', 
                      title: 'Email', 
                      content: 'info@anandtechnology.com',
                      iconColor: 'from-purple-500 to-purple-600'
                    },
                    { 
                      icon: 'clock', 
                      title: 'Business Hours', 
                      content: 'Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM',
                      iconColor: 'from-amber-500 to-amber-600'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start group/item p-3 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:bg-gray-50"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={` w-10 h-10 text-center mt-2 bg-gradient-to-r ${item.iconColor} p-2 rounded-md mr-3 flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-300`}>
                        <i className={`fas fa-${item.icon} text-white text-sm`}></i>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us Card - Compact */}
              <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                    <i className="fas fa-share-alt text-white text-sm"></i>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">Follow Us</h2>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Join our community and stay updated with the latest safety innovations and company news.
                </p>
                
                <div className="flex space-x-3 justify-center">
                  {[
                    { icon: 'facebook-f', color: 'text-blue-600 hover:bg-blue-600 hover:text-white', bg: 'bg-blue-600' },
                    { icon: 'twitter', color: 'text-sky-500 hover:bg-sky-500 hover:text-white', bg: 'bg-sky-500' },
                    { icon: 'linkedin-in', color: 'text-blue-800 hover:bg-blue-800 hover:text-white', bg: 'bg-blue-800' },
                    { icon: 'instagram', color: 'text-pink-600 hover:bg-pink-600 hover:text-white', bg: 'bg-pink-600' },
                    { icon: 'youtube', color: 'text-red-600 hover:bg-red-600 hover:text-white', bg: 'bg-red-600' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300 border border-gray-200 hover:border-transparent ${social.color} text-sm`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <i className={`fab fa-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Map Section */}
      <section className="relative bg-gray-50 mb-12">
        <div className="w-full h-64 md:h-80 relative group overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.177614863953!2d-74.00594938459418!3d40.71278367933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e12bcd1%3A0xfa4d72d84d4f840!2s123%20Safety%20St%2C%20Tech%20City%2C%20TC%2012345!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter transition-all duration-700"
            title="Company Location"
          />
        </div>
      </section>


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
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default Contact