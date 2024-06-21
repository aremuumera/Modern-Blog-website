
import { list } from 'postcss'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Pagination = ({onPageChange, currentPage, selectChange, pageSize, blogData }) => {

    const totalPages = Math.ceil(blogData.length / pageSize);
    // console.log(totalPages)

        const renderPaginationLinks = () => {
            return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
                <li onClick={() => onPageChange(pageNumber)}  key={pageNumber}>
                   <button className={pageNumber === currentPage ? "activePagination text-white" : 'pageBtn'} >{pageNumber}</button>
                </li>
            ))
        }


  return (
    <div>
      <ul className='pagination my-8 flex-wrap  gap-4 w-full mx-auto shadow-lg rounded-[5px]  py-[15px] px-[10px]  bg-[#b9b9b9]'>
        <li className='px-[10px] py-[5px] rounded bg-mainBlack1 hover:bg-[#000] text-white hover:text-white '>
            <button className='inline-flex' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage == 1}><FaArrowLeft className='mt-1 mr-2 ' /> Prev </button>
        </li>
        <div className='sm:flex gap-1 hidden'>{renderPaginationLinks()}</div>
        <li className='px-[10px] py-[5px] rounded bg-mainBlack1 hover:bg-[#000] text-white hover:text-white '>
            <button className='inline-flex' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage == totalPages}>Next<FaArrowRight className='mt-1 ml-2 ' /></button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
