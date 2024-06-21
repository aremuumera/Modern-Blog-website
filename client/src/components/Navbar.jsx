import React, { useState } from 'react'
import Home from '../Pages/Home'
import { NavLink } from 'react-router-dom'

// react-icons
import { FaBars, FaDribbble, FaFacebook, FaInstagram, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from './Modal';


const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
        const [isModalOpen, setIsModalOpen] = useState(false);

     const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
     }
    //nav items
    const navItems = [
        {path: '/', link:"Home"},
        {path: '/about', link:"About"},
        {path: '/blogs', link:"Blog"},
        // {path: '/contact', link:"Contact"},
        // {path: '/services', link:"Services"},
    ]

    //modal details
    const openModal = () =>{
        setIsModalOpen(true);
    }

    const closeModal = () =>{
        setIsModalOpen(false);
    }

  return (
    <div>
      <header className='bg-[#242424] h-full  py-[3px] text-white'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className="text-4xl font-bold text-white ">Fin<span className='text-[#676767]'>ch</span></a>

            {/* nav items */}
            <ul className='md:flex gap-[20px] text-[1.2rem] hidden'>
                {
                    navItems.map(({path, link})=> 
                        <li className='text-white hover:text-[#676767] ' key={path}>
                            <NavLink className={({ isActive }) => {
                                return isActive ? "active"  : "text-white";
                            }} 
                            to={path}
                            >
                            {link}
                            </NavLink>
                        </li>
                    )
                }
            </ul>

            {/* menu items */}
            <div className="text-white lg:flex gap-4 items-center hidden">
                <a href="/" className="hover:text-[#4f4f4f] text-[1.2rem]"><FaFacebook /></a>
                <a href="/" className="hover:text-[#4f4f4f] text-[1.2rem]"><FaDribbble /></a>
                <a href="/" className="hover:text-[#4f4f4f] text-[1.2rem]"><FaTwitter /></a>
                <a href="/" className="hover:text-[#4f4f4f] text-[1.2rem]"><FaInstagram /></a>
                {/* <button onClick={openModal} className='bg-[#3f3f3f] px-6 py-2 font-medium rounded text-white hover:bg-white hover:text-[#676767] hover:border-2 hover:border-[#3f3f3f] transition-all duration-200 ease-in '>Login</button> */}
            </div>

                


            {/* mobile menu  */}
            <div className="md:hidden ">
                <button onClick={toggleMenu}  className='cursor-pointer text-white '>
                    {    
                        menuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                    }  
                </button>
            </div>
        </nav>

                        {/* modal component */}
                <div className="">
                    <Modal isOpen={isModalOpen}  onClose={closeModal} />
                </div> 
                
                    
        {/* menu items only for mobile */}
        <div className="">
            <ul className={`md:hidden gap-[20px] text-[1.2rem] block space-y-4 bg-[#3f3f3f] text-white px-4 py-6 mt-14 
             ${menuOpen ? "fixed top-5 left-0 w-full transition-all ease-out duration-[1500]" : " hidden " } `}>
                    {
                        navItems.map(({path, link})=> 
                            <li className='text-white' key={path}>
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>
                        )
                    }
                </ul>
        </div>
      </header>  
    </div>
  )
}

export default Navbar
