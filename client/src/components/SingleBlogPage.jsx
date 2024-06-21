
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser} from 'react-icons/fa6'
import SideBar from './sideBar';
const SingleBlogPage = () => {

const data = useLoaderData();
console.log(data);
const {title, image, category, author, published_date, reading_time, content  } = data[0];

  return (
    <div>
      {/* <div className='px-4 py-24 bg-black mx-auto '>
            <div className="text-white text-center">
                <h1 className='text-5xl   text- lg:text-7xl leading-snug font-[900] pb-[30px]'>Single blog Page</h1>
            </div>
        </div> */}

        <div className="flex lg:px-[80px] sm:px-[30px] px-[15px] flex-col md:flex-row  gap-20 mx-auto my-12">
            {/* blog details */}
            <div className="max-w-7xl mx-auto my-12">
                <div className="lg:w-3/4 mx-auto">
                    <img src={image} alt="" className='w-full mx-auto rounded ' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-mainBlack1 '>{title}</h2>
                <p  className='mb-3 text-mainBlack1'><FaUser className='inline-flex items-center mr-2 '/>{author} | {published_date}</p>
                <p  className='mb-3 text-mainBlack1'><FaClock className='inline-flex items-center mr-2 '/>{reading_time}</p>
                <p className=' text-mainBlack1 mb-6 text-base'>{content}</p>
                <div className="text-base text-mainBlack1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cum, adipisci earum perspiciatis dignissimos consectetur sapiente eveniet facere eos quae quo, voluptatem repellendus doloribus? Laboriosam facere molestias nisi pariatur laborum.</p><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa explicabo ipsum minus soluta reiciendis incidunt. Expedita voluptatibus veritatis assumenda odio! Blanditiis harum repudiandae nobis vel porro animi possimus voluptate expedita ullam accusamus earum esse maiores distinctio explicabo, odio quos rerum non ducimus, aperiam iusto amet repellendus. Voluptatum, quos exercitationem.</p><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo impedit, fugit aliquam labore eveniet optio soluta porro neque, officiis dicta eum sit odio atque praesentium dolore, qui eius culpa iusto consectetur natus. Eum ducimus, nemo eius itaque tempora soluta beatae esse reiciendis laboriosam, repellat delectus minus, optio unde nesciunt. Aperiam!</p><br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, consectetur enim? Quibusdam dignissimos in eveniet tempore necessitatibus excepturi soluta est veritatis quasi harum ratione quos voluptate totam magnam, minima cupiditate omnis et laborum laudantium recusandae quod a earum ut dolor. Deserunt eligendi, cumque rem officiis neque repellat voluptates iusto nulla?</p><br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, consectetur enim? Quibusdam dignissimos in eveniet tempore necessitatibus excepturi soluta est veritatis quasi harum ratione quos voluptate totam magnam, minima cupiditate omnis et laborum laudantium recusandae quod a earum ut dolor. Deserunt eligendi, cumque rem officiis neque repellat voluptates iusto nulla?</p><br/>
                </div>
            </div>

            {/* sideBar section */}
            <div className="w-full max-w-[400px]">
                <SideBar />
            </div>
        </div>
    </div>
  )
}

export default SingleBlogPage
