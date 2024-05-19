import React from 'react'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!</span> :)</h1>
            <p className='mt-12 '>Discover a world of knowledge with Book Haven's Courses section! Our app offers a diverse array of educational courses designed to ignite your passion for learning and help you achieve your goals. From literature and creative writing to business and technology, our expertly curated courses are taught by industry professionals and renowned authors.</p>
            <button className= ' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </div>
    </div>
    </>
    
  )
}

export default Course