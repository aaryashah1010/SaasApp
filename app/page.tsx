import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/ui/CompanionCard'
import CompanionList from '@/components/ui/CompanionList'
import CTA from '@/components/ui/CTA'
import { recentSessions } from '@/constants/index' 

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-2xl underline mb-6'>Popular companions</h1>
      
      <section className='home-section mb-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CompanionCard
            id="123"
            name="Neura the brainy explorer"
            topic="Neuroscience"
            subject="science"
            duration={45}
            colour="#ffda6e"
          />
          <CompanionCard
            id="456"
            name="Timepass the brainy explorer"
            topic="language"
            subject="english"
            duration={45}
            colour="#bde7ff"
          />
          <CompanionCard
            id="789"
            name="Countsy the wizard"
            topic="derivative and integrals"
            subject="maths"
            duration={45}
            colour="#e5d0ff"
          />
        </div>
      </section>
      
      <section className='home-section flex flex-col lg:flex-row gap-8'>
        <CompanionList
          title="Recent Sessions"
          companions={recentSessions}
          classNames='w-full lg:w-2/3'
        />
        <div className="w-full lg:w-1/3">
          <CTA 
            
          />
        </div>
      </section>
    </div>
  )
}

export default Page