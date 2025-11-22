import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const DriverProgram = ({ content }) => {
  return (
    <section id="drivers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={content.title}
          subtitle={content.description}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {content.approach.map((item, index) => (
            <Card 
              key={index} 
              hover 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-2xl text-primary-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in-up">
          <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto">
            {content.outcome}
          </p>
        </div>
      </div>
    </section>
  )
}

export default DriverProgram