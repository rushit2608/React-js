import React from 'react'
import './Hero.css'
import black_arrow from '../../assets/BlackArrow.jpeg'
import { Link } from 'react-scroll'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure to build a trust</h1>
        <p>Our customer will give the right answer for trustable we serve
             with our genuine product quality and right on time delivery</p>
        <button className='btn'><Link to='Products' smooth={true} offset={-250} duration={500}>Explore more
        </Link> <img src={black_arrow}></img></button>
      </div>
    </div>
  )
}

export default Hero
