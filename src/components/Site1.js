import React from 'react'
import Footer from './Footer'
function Site1() {
    return (

        <>
            <h1 class="wow animate__animated animate__fadeInDown  md:text-3xl md:my-14 m-5 font-bold rounded-lg  tracking-wider  text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 text-center" >WLH GRANDES ALTURAS </h1>
            {/* eslint-disable-next-line */}
            <a href="https://wlhgrandesalturas.com" target="_blank" className="">
                <div className="bg-white shadow-2xl container md:m-auto rounded-2xl mr-5 transform transition duration-500 hover:scale-105 cursor-pointer">
                    <img src="https://i.ibb.co/vvjtzXG/Dise-o-sin-t-tulo-11.png" alt="" className="md:rounded-2xl md:mb-12" />
                </div>
            </a>

            <div className="bg-blue-dark " >
                <div className="flex items-center md:flex-row justify-center flex-col container m-auto   p-10 rounded-2xl" >
                    <div className="flex-1  text-center md:text-justify text-white  dark:text-white md:text-2xl">
                        <h1 className="wow animate__animated animate__fadeInLeft mb-5 md:mb-0 ">Wlh Grandes Alturas is a website in which I was in charge of designing, layout and programming.  Apply SEO to be searchable on Google I set up the site with your host in Vercel</h1>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/mRnhbg0/4.png" alt="" className="m-auto wow animate__animated animate__fadeInRight  md:w-5/6" />
                    </div>
                </div>

            </div>
            <div className="md:p-28 flex items-center justify-center m-auto md:flex-row flex-col">
            <img src="https://i.ibb.co/YDP38N4/6.png" alt="" className="m-auto wow animate__animated animate__fadeInUp  md:w-14 flex-1" />
           {/* eslint-disable-next-line */}
                <a href="https://wlhgrandesalturas.com" target="_blank" className="flex-1">
                    
                    <button class="transition duration-500 ease-in-out  hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 p-9 shadow-lg md:text-5xl text-lg rounded-2xl dark:text-white text-black">
                         WLH Grandes Alturas <i class="fas fa-link dark:text-white"></i>
                    </button>
                </a>
              
            </div>
            <Footer />
        </>
    )
}

export default Site1
