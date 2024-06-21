
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './PageCategory';
import SideBar from './sideBar';

const BlogUi = () => {

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12  // blogs per page
    const [selectCategory, setSelectCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs/?page=${currentPage}&limit=${pageSize}`;

            // modifying the url
            if(selectCategory){
                url += `&category=${selectCategory}`
            }

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setBlogs(data);
        }

        fetchBlogs()
    }, [currentPage, pageSize, selectCategory])

    const handlePageChange = (PageNumber) => {
        setCurrentPage(PageNumber);
        window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    }

    const handleCategoryChange = (category) => {
        setSelectCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }
    console.log(blogs);
  return (
    <div>
    {/* CATEGORY SECTION */}
    <div className="">
        <h1><CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} selectCategory={selectCategory} /></h1>
    </div>

   
    
    
    <div className="flex flex-col lg:flex-row gap-12">
        {/* blogCards section */}
        <BlogCards blogData={blogs} currentPage={currentPage} selectCategory={selectCategory} pageSize={pageSize} />
    
         {/* sideBar section */}
        <div className="">
            <SideBar />
        </div>
    </div>

    {/* pagination section */}
    <div>
        <Pagination onPageChange={handlePageChange} blogData={blogs} currentPage={currentPage} selectCategory={selectCategory} pageSize={pageSize} />
    </div>
    </div>
  )
}

export default BlogUi
