import React from 'react'

import "./service.css"
import { Link } from 'react-router-dom'
export default function Service() {
  return (
    <div className='service'>
      <div className='s-one'>
            <div>
                <p>Popular categories</p>
                <Link className='p'>Text resume</Link>
                <Link className='p'>Visual resume</Link>
                <Link className='p'>Resume critique</Link>
            </div>
            <div>
              <p>Find Jobs</p>
              <Link className='p'>Jobs4u</Link>
              <Link className='p'>Prority applicant</Link>
              <Link className='p'>Contact us</Link>
            </div>

      </div>

        <div>
              <div>
                <p>Get recruiter's attention</p>
                <Link className='p'>Resume display</Link>
              </div>
              <div>
                <p>Monthly subscriptions</p>
                <Link className='p'>Basic & premium plans</Link>
              </div>
        </div>

        <div  className='s-two'>
            <p>Free resume resources</p>
           <Link className='p'>Resume quality score</Link>
           <Link className='p'>Resume samples</Link>
           <Link className='p'>Job letter samples</Link>
        </div>

    </div>
  )
}
