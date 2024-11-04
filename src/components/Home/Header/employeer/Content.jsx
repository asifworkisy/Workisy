import React from 'react'
import { Link } from 'react-router-dom';
import "./content.css"
export default function Content() {
  return (
    <div className='content'>
      <Link className='link' to="buy-online">Buy online</Link>
      <Link className='link'>Naukari Hairing Suite </Link>
      <Link className='link'>Employeer Login</Link>
      
    </div>
  )
}
