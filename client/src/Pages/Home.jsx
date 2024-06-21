

import React from 'react'
import Banner from '../components/Banner'
import Blogs from '../components/Blog'
import BlogUi from '../components/BlogUi'

const Home = () => {
  return (
    <div>
      <Banner />

      <div className=" w-full mx-auto lg:px-[60px] sm:px-[30px] px-[15px] pb-[30px]" >
          <BlogUi />
      </div>
    </div>
  )
}

export default Home
