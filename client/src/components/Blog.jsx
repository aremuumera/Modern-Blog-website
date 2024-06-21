
import React from 'react'
import BlogUi from './BlogUi'

const Blogs = () => {
  return (
    <div>
        <div className='px-4 py-24 bg-black mx-auto '>
            <div className="text-white text-center">
                <h1 className='text-5xl   text- lg:text-7xl leading-snug font-[900] pb-[30px]'>Our blog Page</h1>
            </div>
        </div>
        

        {/* all blogs Container */}
        <div className="w-full max-auto lg:px-[80px] sm:px-[30px] px-[15px] pb-[100px]">
            <BlogUi />
        </div>
    </div>
  )
}

export default Blogs
