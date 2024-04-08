import React from 'react'
import './About.css'
import Aboutimg from '../../assets/watertank.jpeg'
import play_icon from '../../assets/playicon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={Aboutimg} className='about-img'></img>
        <img src={play_icon} className='play-icon'></img>
      </div>
      <div className="about-right">
        <h3>About us</h3>
        <h2>Deliverying with trust of 1000 customers</h2>
        <p>helloo this is and overview of the project with dummy data will put orginal as per 
          the clients needs this about us section on the right 
        </p>
        <p>
          we will be keeping text about company how it started ,how it works and what customers mean to 
          the company with future goal for the company 
        </p>
      </div>
    </div>
  )
}

export default About
