import React from 'react'


import "./home.css"
import Header from '../Header/Header'
import Block1 from '../block1/Block1'
import Block2 from '../block2/block2'
import Footer from '../footer/footer'


export default function Homepage() {


  return (
   <div className='home'>
    <Header/>
    <Block1/>
    <Block2/>
    <Footer/>
   
   </div>
  )
}