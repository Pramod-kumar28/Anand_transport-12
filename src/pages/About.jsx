import React from 'react'
import { content } from '../data/content'
import SectionTitle from '../components/ui/SectionTitle'

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={content.about.title}
          subtitle={content.about.description}
          centered
        />
      </div>
    </section>
  )
}

export default About