import React from 'react'
import './skills.css'
import { Element } from 'react-scroll/modules'

import Sw from '../../assets/skill_icons/solidworks.png'
import Creo from '../../assets/skill_icons/creo.png'

import C from '../../assets/skill_icons/c.png'
import Cpp from '../../assets/skill_icons/cpp.png'
import Py from '../../assets/skill_icons/python.gif'

import Html from '../../assets/skill_icons/html.png'
import Css from '../../assets/skill_icons/css.png'
import Js from '../../assets/skill_icons/js.gif'
import React_icon from '../../assets/skill_icons/react.gif'

import Ps from '../../assets/skill_icons/ps.gif'
import Ai from '../../assets/skill_icons/ai.gif'





const Skills = () => {
  return (
    <Element className='skills' id='skills'>
        <h1>My Skills</h1>
        <h2>_______</h2>
        <div className='skill_division'>
            <div className='mech'>
                <h3>Cad Modelling:</h3>
                <br />
                <br />
                <img src={Sw} alt='solidworks icon' />
                <img src={Creo} alt='creo icon' />
                <br />
                <br />
            </div>
            <div className='programming_languaging'>
                <h3>Programming Languages:</h3>
                <br />
                <br />
                <img src={C} alt='c icon' />
                <img src={Cpp} alt='cpp icon' />
                <img src={Py} alt='python icon' />
                <br />
                <br />
            </div>
            <div className='web_language'>
             <h3>Front end:</h3>
                 <br />
                 <br />
                 <img src={Html} alt='html icon' />
                 <img src={Css} alt='css icon' />
                 <img src={Js} alt='javasricpt icon' />
                 <img src={React_icon} alt='react_gif' />
                 <br />
                 <br />
            </div>
            <div className='graphic_designing'>
                <h3>graphic_designing:</h3>
                <br />
                <br />
                <img src={Ps} alt='photoshop icon' />
                <img src={Ai} alt='Illustrator icon' />
                <br />
                <br />
            </div>
        </div>
    </Element>
  )
}

export default Skills