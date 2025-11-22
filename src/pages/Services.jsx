import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Advanced Safety Systems',
      description: 'Comprehensive vehicle safety monitoring and real-time alert systems.'
    },
    {
      icon: 'fas fa-car',
      title: 'Vehicle Fitness Certification',
      description: 'Thorough pre-trip inspections and certification for roadworthiness.'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Driver Training Programs',
      description: 'Professional development and recognition programs for drivers.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Smart Travel Solutions',
      description: 'Pre-ordered meal systems and passenger convenience features.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive safety and transportation solutions designed for modern travel needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Contact us to learn more about how our services can transform your transportation safety.
          </p>
          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Services