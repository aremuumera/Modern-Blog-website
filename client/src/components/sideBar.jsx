
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = () => {
     const [popularBlogs, setPopularBlogs] = useState([]);

        const scrollTop = () => {
            window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
        }
     useEffect(() => {

        fetch('http://localhost:5000/blogs')
            .then((response) => response.json())
            .then((data) => setPopularBlogs(data))
            .catch((error) => console.error('Error fetching blogs:', error));



     }, [])
  return (
    <div>
        <div>
            <h1 className='text-2xl font-semibold px-4'>Latest Blogs</h1>
            <div className="w-full max-w-[400px]">
                {
                    popularBlogs.slice(0, 4).map((blog) => 
                        <div className='my-5 border-b-2'  key={blog.id}>
                            <h4 className="font-medium mb-4 " >{blog.title}</h4>
                            <Link to={`/blogs/${blog.id}`} onClick={scrollTop} className='font-medium inline-flex items-center hover:text-mainBlack1  py-[10px]'>
                                Read more <FaArrowRight className='mt-1 ml-2 ' />
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>


        {/* popular Blogs */}

        <div>
            <h1 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h1>
            <div className="w-full max-w-[400px]">
                {
                    popularBlogs.slice(0, 5).map((blog) => 
                        <div className='my-5 border-b-2'  key={blog.id}>
                            <h4 className="font-medium mb-4 " >{blog.title}</h4>
                            <Link to={`/blogs/${blog.id}`} onClick={scrollTop} className='font-medium inline-flex items-center hover:text-mainBlack1  py-[10px]'>
                                Read more <FaArrowRight className='mt-1 ml-2 ' />
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar
