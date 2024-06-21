
import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6"



const BlogCards = ({blogData, currentPage, selectCategory, pageSize}) => {

    const filteredBlogs = blogData
    .filter((blog) => !selectCategory || blog.category === selectCategory )
    .slice((currentPage -1) *pageSize, currentPage * pageSize);



  return (
    <div className="w-full">
        <div className='grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 items-center gap-8'>
            {
                filteredBlogs.map((blog) => (
                    <Link to={`/blogs/${blog.id}`} key={blog.id} className=' shadow-lg rounded cursor-pointer'>
                    <div className="">
                            <img src={blog.image} alt="" className='w-full'/>
                    </div>
                    <div className="p-5">
                        <h3 className="mt-4 mb-2 font-bold hover:text-mainBlack1  cursor-pointer ">
                            {blog.title}
                        </h3>
                        <p className='mb-2 text-sm  text-gray-500 '><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                        <p className='text-sm '>Published:{blog.published_date}</p>
                    </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default BlogCards

