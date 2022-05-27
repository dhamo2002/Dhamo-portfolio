import React from 'react'
import './about.css'
import { Element } from 'react-scroll'

const About = () => {
  return (
      <Element className="about" to="about">
        <div className='about_me'>
        <h1>
            About Me
        </h1>
        <h2>_______</h2>
        <p>
        An Enthustiatic student from B.E.Mechanical engineering ,Government College 
of Technology of Batch 2023 having keen interest in, 
Website Designing, and Graphic Designing.
 I'm an avid learner and creative thinker who likes to learn new stuffs 
every now and then. I like myself to be equipped to 
the current trend and enhancing my skills is both Mechanical Engineering and IT field to fit in this fast moving world.
        
        </p>
        </div>
      </Element>
  )
}

export default About