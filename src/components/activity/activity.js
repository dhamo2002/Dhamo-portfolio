import React from 'react'
import './activity.css'
import { Element } from 'react-scroll'

const Activity = () => {
  return (
    <Element className='activity' id='activity'>
        <h1>My Activities</h1>
        <h2>_______</h2>
        <div className='activity_division'>
            <div className='co-curricular'>
                <h1>Co - curricular Activities</h1>
                <br />
                <br />
                <ul>
                    <li><b>Secretary</b> of <span>GCT ISHRAE</span><br />(2022-23)</li>
                    <li><b>Sergeant-at-arms</b> of <span>Rotaract Club of GCT Coimbatore</span><br />(2021-22)</li>
                    <li><b>Designer</b> of <span>The Literary and Debating Society of GCT</span><br />(2022-23)</li>
                    <li><b>Designer</b> of <span>Coding Club of GCT</span><br />(2021-22)</li>
                    <li><b>Designer</b> of <span>TEDxGCT</span><br />(2021-22)</li>
                </ul>
                <br />
                <br />
            </div>
            <div className='curricular-2'>
                <div className='accomplishment'>
                    <h1>Accomplishments</h1>
                    <br />
                    <br />
                    <ul>
                        <li>Conducted a Workshop(PIXELLENCE) in Graphic Designing and trained a group of people</li>
                        <li>Organished a Medical Camp as an Event Convenor in My college campus Conducted by RacGCT </li>
                        <li>Coordinated a team of 20 members in Rotaract Club of GCT Coimbatore for an year</li>
                    </ul>
                    <br />
                    <br />
                </div>
                <div className='others'>
                    <h1>Others</h1>
                    <br />
                    <br />
                    <ul>
                        <li>Freelancer in Graphic Designing</li>
                    </ul>
                    <br />
                    <br />
                </div>
            </div>
        </div>  
    </Element>
  )
}

export default Activity