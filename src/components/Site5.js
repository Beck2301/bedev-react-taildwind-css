import React from 'react'
import Footer from './Footer'
import { useEffect } from 'react'

function Site5() {
    useEffect(() => {
        window.scrollTo({ top: 0 })
        return () => { window.scrollTo({ top: 0 }) };
    }, [])
    return (
        

        <>
            <h1 class="wow animate__animated animate__fadeInDown  md:text-3xl md:my-14 m-5 font-bold rounded-lg  tracking-wider  text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 text-center" >ON THE ROCKS</h1>
            {/* eslint-disable-next-line */}
            <a href="https://beck2301.github.io/on-the-rocks/" target="_blank" className="">
                <div className="bg-white shadow-2xl container md:m-auto rounded-2xl mr-5 transform transition duration-500 hover:scale-105 cursor-pointer">
                    <img src="https://i.ibb.co/wzYs3NS/image.png" alt="" className="md:rounded-2xl md:mb-12" />
                </div>
            </a>

            <div className="bg-black " >
                <div className="flex items-center md:flex-row justify-center flex-col container m-auto   p-10 rounded-2xl" >
                    <div className="flex-1  text-center md:text-justify text-white  dark:text-white md:text-2xl">
                        <h1 className="wow animate__animated animate__fadeInLeft mb-5 md:mb-0 ">
                            ON THE ROCKS is a website under development where you can get information about the company, see its products, services and prices.</h1>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/gdv4HYh/12.png" alt="" className="m-auto wow animate__animated animate__fadeInRight  md:w-5/6" />
                    </div>
                </div>
                {/* https://i.ibb.co/mRGHTs5/11.png */}

            </div>
            <div className="md:px-28 py-11 flex items-center justify-center m-auto md:flex-row flex-col">
                <img src="https://i.ibb.co/SvxPY2k/10.png" alt="" className=" m-auto wow animate__animated animate__fadeInUp  md:w-14 flex-1 img-responsive" />
                    {/* eslint-disable-next-line  */}
                    <a href="https://beck2301.github.io/on-the-rocks/" target="_blank" className="flex-1 ">
                    
                    <button class="transition duration-500 ease-in-out  hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 p-9 shadow-lg md:text-5xl text-lg rounded-2xl dark:text-white text-black">
                       On The Rocks Website <i class="fas fa-link dark:text-white"></i>
                    </button>
                </a>
            </div>

            <Footer />
        </>
    )
}

export default Site5
