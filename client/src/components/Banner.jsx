import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import BannerImage from '../assets/Banner.jpg'; // Ensure the path is correct

const Banner = () => {
  return (
    <div className="relative bg-cover mb-[30px] bg-center bg-no-repeat h-[500px]" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative text-white text-center px-4 py-32 mx-auto z-20">
        <h1 className="text-3xl lg:text-7xl leading-snug font-extrabold pb-6">Welcome to our blog</h1>
        <p className="text-white mx-auto w-full lg:max-w-[900px] mb-5">
          Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from our helpful and tutorials.
        </p>
        <div>
          <Link to="/" className="font-medium inline-flex items-center hover:text-black py-[10px]">
            Learn more <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
