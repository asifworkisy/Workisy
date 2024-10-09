import React from 'react'

import "./company.css"
import { Link } from 'react-router-dom'
export default function Companies() {
  return (
    <div className='company'>
        <div>
            <p>Explore categories</p>
            <Link className="p">Unicorn</Link>
            <Link className="p">MNC</Link>
            <Link className="p">Startup</Link>
            <Link className="p">Product based</Link>
            <Link className="p">internet</Link>
        </div>
        <div>
            <p>Explore collectioins</p>
           <Link className='p'>Top companies</Link>
           <Link className='p'>IT companies</Link>
           <Link className='p'>Fintech companies</Link>
           <Link className='p'>Sponsered companies</Link>
           <Link className='p'>Featred compaines</Link>
        </div>
        <div>
            <p>Research companies</p>
           <Link className='p'>Interview questions</Link>
           <Link className='p'>Company salaries</Link>
           <Link className='p'>Company reviews</Link>
           <Link className='p'>Salary Calculator</Link>
        </div>

    </div>
  )
}
