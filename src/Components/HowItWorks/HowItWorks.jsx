import React from 'react'

import HowItWorksCardOne from '../HowItWorksCardOne/HowItWorksCardOne';
import HowItWorksCardThree from '../HowItWorksCardThree/HowItWorksCardThree';
import HowItWorksCardTwo from '../HowItWorksCardTwo/HowItWorksCardTwo';
import HomepageButton from '../HomepageButton/HomepageButton';

import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className='how'>
        <h2 className='how__title'>How it works</h2>
        <HowItWorksCardOne />
        <HowItWorksCardTwo />
        <HowItWorksCardThree />
        <HomepageButton />
    </section>
  )
}
