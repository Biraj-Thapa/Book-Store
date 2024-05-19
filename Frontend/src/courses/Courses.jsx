import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from "../../public/list.json"

const Courses = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Course/>
        </div>
     
        <Footer/>
    </div>
  )
}

export default Courses