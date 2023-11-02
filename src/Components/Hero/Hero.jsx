import React from 'react'
import './Hero.css'
import hero from '../Assets/hero.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero} alt="Hero " />

    </div>
    
  )
}

export default Hero