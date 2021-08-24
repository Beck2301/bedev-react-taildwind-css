import React from 'react'
import Footer from './Footer'
function Site2() {
    return (

        <>
            <h1 class="wow animate__animated animate__fadeInDown  md:text-3xl md:my-14 m-5 font-bold rounded-lg  tracking-wider  text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 text-center" >COVID-19 El Salvador </h1>
            {/* eslint-disable-next-line */}
            <a href="https://beck2301.github.io/covid19/" target="_blank" className="">
                <div className="bg-white shadow-2xl container md:m-auto rounded-2xl mr-5 transform transition duration-500 hover:scale-105 cursor-pointer ">
                    <img src="https://i.ibb.co/rfknqR2/covid.png" alt="" className="md:rounded-2xl md:mb-12 m-auto " />
                </div>
            </a>

            <div className="bg-black " >
                <div className="flex items-center md:flex-row justify-center flex-col container m-auto   p-10 rounded-2xl" >
                    <div className="flex-1  text-center md:text-justify text-white  dark:text-white md:text-2xl">
                        <h1 className="wow animate__animated animate__fadeInLeft mb-5 md:mb-0 ">Covid-19 El Salvador is a site that consumes a public API with data on covid-19 in El Salvador and Central America.</h1>
                        <br/>
                        <h1 className="wow animate__animated animate__fadeInLeft mb-5 md:mb-0 ">This project was created by a good friend <a href="https://github.com/iamrivard" className="font-bold text-yellow-500">Erick Rivas</a> and I in 2020 when there was not much information about the cases in El Salvador and Central America.</h1>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/RbSM7MP/1.png" alt="" className="m-auto wow animate__animated animate__fadeInRight  md:w-5/6 " />
                    </div>
                </div>

            </div>
            <div className="md:py-28 flex items-center justify-center m-auto md:flex-row flex-col">
                <img src="https://i.ibb.co/ccPMwSh/2.png" alt="" className=" m-auto wow animate__animated animate__fadeInUp  md:w-2/6 " />
                <img src="https://i.ibb.co/f85Y9sZ/3.png" alt="" className="m-auto wow animate__animated animate__fadeInUp   md:w-2/6" />
            </div>
       
            <div className="text-white text-center p-10 m-auto wow animate__animated animate__fadeInLeft ">
                     {/* eslint-disable-next-line  */}
                <a href="https://beck2301.github.io/covid19/" target="_blank" className="">
                    <button class="transition duration-500 ease-in-out  hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 p-12 shadow-2xl md:text-5xl text-lg rounded-2xl dark:text-white text-black">
                        Visit Covid-19 El Salvador <i class="fas fa-link dark:text-white"></i>
                    </button>
                </a>
            </div>
            <Footer />
        </>
    )
}

export default Site2
