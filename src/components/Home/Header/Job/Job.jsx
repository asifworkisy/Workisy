import React from 'react'

import "./job.css"
import { Link } from 'react-router-dom'
export default function Job() {
  return (
    <div className='jobs'>
        <div>
            <p>Popular categories</p>
           
            <Link className='p' to="/jobDetailes">It jobs</Link>
            <Link className='p'>Sales jobs</Link>
            <Link className='p'>Marketing jobs</Link>
            <Link className='p'>Data Science jobs</Link>
            <Link className='p'>HR jobs</Link>
            <Link className='p'>Engineering jobs</Link>

        </div>
        <div>
            <p>Jobs in demand</p>
        
            <Link className='p'>Frehser jobs</Link>
            <Link className='p'>MNC jobs</Link>
            <Link className='p'>Remote jobs</Link>
            <Link className='p'>Work from home jobs</Link>
            <Link className='p'>Walk-in jobs</Link>
            <Link className='p'>Part-time jobs</Link>
        </div>
        <div>
            <p>Jobs by location</p>
            <Link className='p'>Jobs in Delhi</Link>
            <Link className='p'>Jobs in Mumbai</Link>
            <Link className='p'>Jobs in Bangalore</Link>
            <Link className='p'>Jobs in Hyderabad</Link>
            <Link className='p'>Jobs in Chennai</Link>
            <Link className='p'>Jobs in Pune</Link>
        </div>

    </div>
  )
}
