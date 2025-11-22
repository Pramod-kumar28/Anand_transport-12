import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const MealSystem = ({ content }) => {
  return (
    <section id="meals" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <SectionTitle 
              title={content.title}
              subtitle={content.description}
            />
            
            <div className="space-y-4 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <i className="fas fa-utensils text-accent-500 mt-1 mr-4"></i>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-600">
              {content.benefit}
            </p>
          </div>
          
          <div className="animate-fade-in-right">
            <Card className="p-8 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <div className="text-center mb-6">
                <i className="fas fa-mobile-alt text-5xl mb-4"></i>
                <h3 className="text-2xl font-bold">Pre-Ordered Meal System</h3>
              </div>
              <p className="text-center text-primary-100 mb-6">
                A structured pre-booking platform that enhances passenger convenience and ensures a superior travel experience.
              </p>
              <div className="flex justify-center">
                <div className="bg-white text-primary-600 px-6 py-2 rounded-full font-semibold">
                  Coming Soon
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MealSystem