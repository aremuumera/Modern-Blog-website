
import React from 'react'

const Modal = ({isOpen, onClose}) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="modal-container">
          <div className="bg-[#222] text-center p-5 h-96 lg:w-[500px] rounded  shadow-md ">
            {/* modal content */}
            <h2 className="text-xl font-semibold mb-4 mt-6  uppercase">
              Please login here
            </h2>
            <form >
             {/* email */}
                <div className="">
                    <h2 htmlFor="email" className='text-left ml-[10px] pb-[5px] '>Email</h2>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className='w-full rounded-md border border-[#E0e0e0] bg-white py-3 px-6 text-base 
                    font-medium text-black outline-none focus:border-[#3340b4f1] focus:shadow-md'
                />
                </div>
                {/* password  */}
                <div className="pt-[30px]">
                    <h2 htmlFor="password" className='text-left ml-[10px] pb-[5px]'>Password</h2>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className='w-full rounded-md border border-[#E0e0e0] bg-white py-3 px-6 text-base 
                    font-medium text-black outline-none focus:border-[#3340b4f1] focus:shadow-md'
                />
                </div>
                <div className="pt-[30px]">
                    <button className='hover:shadow-md rounded-md px-[20px] py-[6px] bg-mainBlack1 hover:bg-black text-base font-semibold '>Login</button>
                </div>
            </form>
            {/* modal close */}
            <button className='bg-mainBlack1    hover:bg-black  text-'></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal
