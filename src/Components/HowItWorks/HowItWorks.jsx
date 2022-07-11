import React from 'react'

import HowItWorksCardOne from '../HowItWorksCardOne/HowItWorksCardOne';

import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className='how'>
        <h2 className='how__title'>How it works</h2>
        <HowItWorksCardOne />
    </section>
  )
}
