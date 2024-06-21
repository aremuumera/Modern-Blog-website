
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
const Footer = () => {
  return (
    <div>
      <div className="bg-[#000]">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 ">
            <div>
                <div className='grid mb-8 lg:grid-cols-6' >

                    <div className='grid grid-cols-2 gap-5 row-gap lg:col-span-4 md:grid-cols-4 '> 
                        {/* category 1 */}
                        <div >
                            <p className="font-medium tracking-wide text-mainBlack1  ">
                                Category
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>News</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>World</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Games</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>References</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 2 */}
                        <div >
                            <p className="font-medium tracking-wide text-mainBlack1  ">
                                Services
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Web</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>E-commerce</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Portfolio</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 3 */}
                        <div >
                            <p className="font-medium tracking-wide text-mainBlack1  ">
                                Links
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Media</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Non-Profit</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Education</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Pojects</a>
                                </li>
                            </ul>
                        </div>

                        {/* category 4 */}
                        <div >
                            <p className="font-medium tracking-wide text-mainBlack1  ">
                                Business
                            </p>
                            <ul className='mt-2 space-y-2'>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Info</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Infopreneur</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Personal</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Wiki</a>
                                </li>
                                <li>
                                    <a href="/" className='text-[#fff] transition-colors duration-300 hover:text-mainBlack1 '>Forum</a>
                                </li>
                            </ul>
                        </div>   
                    </div>

                    {/* subscription */}
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5 ' >
                            <p className="font-medium tracking-wide text-[#fff] ">
                                Suscribe for Updates
                            </p>
                            <form className='flex gap-2'>
                                <input type="email" name='email' id='email'  className='flex-grow w-full h-12 px-4
                                mb-3 transition duration-200 bg0white border-gray-300 rounded shadow-sm
                                aspect-ratio md:mr-2 md:mb-0 focus:border-[#000] focus:outline-none '/>
                                <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-white hover:text-black focus:outline-none border '> 
                                    Suscribe
                                </button>
                            </form>
                            <p className='mt-4 text-sm text-white'>Suscribe to receive our latest Updates on all Categories, News, entertainment</p>
                    </div>

                </div>

                <div className=" text-white flex flex-col justify-between pt-5 pb-10 border-t border-mainBlack1 sm:flex-row">
                    <p className='text-sm text-mainBlack1 '>Copyright 2023 | All rights reserved.</p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a href="" className='text-mainBlack1 translation-all duration-300  hover:text-white  '><FaTwitter/> </a>
                        <a href="" className='text-mainBlack1 translation-all duration-300  hover:text-white  '><FaInstagram/> </a>
                        <a href="" className='text-mainBlack1 translation-all duration-300  hover:text-white  '><FaFacebook/> </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
