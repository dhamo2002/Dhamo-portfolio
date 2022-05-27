import React from 'react'
import Myimg from '../../assets/dhamo_1.png'
import Myresume from '../../assets/Dhamodar.V_resume.pdf'
import { Element } from 'react-scroll'
import './home.css'
import Link from 'react-scroll/modules/components/Link'
import Type from './Type'


const Home = () => {
  return (
    <Element className='home' to='home'>
        <div className='image'>
            <img className='myimg' src={Myimg} alt="a pic of dhamo" />
        </div>
        <div className='content'>
            <h4>Hi there, <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></h4>
            <h1><span>I am </span>Dhamodar V</h1>
            <div style={{ color:'white', textAlign: "left" }}>
                <Type />
              </div>
            <div className='buttons'>
             <a
             href={Myresume}
             target="_blank">
               <button className="resume_button">Download CV</button>
             </a>
             <Link to='contact' smooth={true} duration={500}>
               <button className='contact_button'>Contact Me</button>
            </Link>
            </div>
        </div>

    </Element>

  )
}

export default Home
