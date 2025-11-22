import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Features from '../home/Features'

const SafetySystems = ({ content }) => {
  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={content.title}
          subtitle={content.description}
          centered
        />
        
        <Features features={content.features} />
        
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto">
            {content.goal}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SafetySystems