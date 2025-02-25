import React from 'react'

// images
import dev from '../assets/Images/dev.png'

// components
import { Navbar } from '.'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

const Hero = () => {
  const token = localStorage.getItem("authTokens")

  if (token) {
    const decoded = jwtDecode(token)
    var user_id = decoded.user_id
  }
  return (
    <div className='flex flex-col  h-[100vh] z-20'>
      <Navbar />
      <section className='mt-24 lg:py-4  grid lg:grid-cols-2 lg:px-16 px-6 gap-4 '>
        <div className='flex flex-col gap-3 hero-holder'>
          <h1 className='lg:text-5xl text-4xl z-20 hero-h1'>DEVELOPER's QUIZ HUB</h1>
          <h1 className='z-20 text-sm lg:text-lg'>Welcome to Dev.Quiz - Where Knowledge Meets Code!
            Unlock your potential and test your coding prowess with Dev.Quiz, the ultimate destination for developers seeking intellectual challenges and skill enhancement.</h1>
          <div className='z-20 shadow text-xs lg:text-sm h-[60px] flex items-center justify-start bg-purple-100 rounded-xl px-4'><p>🏆 Compete, Learn, and Excel: Join our vibrant community of developers, put your knowledge to the test, and compete with like-minded individuals. </p></div>
          <div className='z-20 shadow text-xs lg:text-sm h-[60px] flex items-center justify-start bg-green-100 rounded-xl px-4'><p>💡 Are you up for the challenge? Start your quiz journey today at Dev.Quiz and take the first step towards becoming the developer you aspire to be.</p></div>
          {/* <div className='z-20 shadow text-xs lg:text-sm h-[60px] flex items-center justify-start bg-yellow-100 rounded-xl px-4'><p>🌐 Accessible Anywhere, Anytime: DeveloperQuiz.com is accessible from the comfort of your home, office, or wherever you may be. </p></div> */}
          {/* <div className='z-20 shadow text-xs lg:text-sm h-[60px] flex items-center justify-start bg-red-100 rounded-xl px-4'><p>👨‍💻 Developers, for Developers: Created by developers, for developers, our team understands your needs and aspirations. </p></div> */}
          { token === null && <Link to='/signup' style={{ width : 'max-content' }}><Button className='hero-btn hero-holder1' variant='contained'>Get Started</Button></Link> }
          {/* { token !== null && <Link to='/dashboard' style={{ width : 'max-content' }}><Button className='hero-btn hero-holder1' variant='contained'>Dashboard</Button></Link> } */}
          
        </div>
        <img className='drop-shadow-2xl' src={dev} alt="" />
      </section>
    </div>
  )
}

export default Hero