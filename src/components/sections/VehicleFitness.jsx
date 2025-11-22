import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const VehicleFitness = ({ content }) => {
  return (
    <section id="fitness" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={content.title}
          subtitle={content.description}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Pre-Tour Checks Include:</h3>
              <ul className="space-y-4">
                {content.checks.map((check, index) => (
                  <li key={index} className="flex items-start animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <i className="fas fa-check-circle text-accent-500 mt-1 mr-3"></i>
                    <span className="text-gray-700">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <Card className="text-center p-8 border-l-4 border-accent-500">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-3xl text-accent-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Certified</h3>
              <p className="text-gray-600 text-lg">
                {content.certification}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VehicleFitness