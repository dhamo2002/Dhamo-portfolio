import React from 'react'
import {Link} from 'react-scroll'
import './navbar.css'

const navBar = () => {
  return (
    <div className='top__bar'>
        <div className='left__bar'>
            <h1>Port<span>folio</span></h1>
        </div>
        <div className='right__bar'>
            <Link to='home' smooth={true} duration={500}>
                <h4>Home</h4>
            </Link>
            <Link to='about' smooth={true} duration={500}>
                <h4>About Me</h4>
            </Link>
            <Link to='skills' smooth={true} duration={500}>
                <h4>My Skills</h4>
            </Link>
            <Link to='activity' smooth={true} duration={500}>
                <h4>My Activites</h4>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
                <h4>Contact Me</h4>
            </Link>
            
        </div>
    </div>
  )
}

export default navBar