import React from 'react'
import Footer from './Footer'
import { useEffect } from 'react'

function Site4() {
    useEffect(() => {
        window.scrollTo({ top: 0 })
        return () => { window.scrollTo({ top: 0 }) };
    }, [])
    return (

        <>
            <h1 class="wow animate__animated animate__fadeInDown  md:text-3xl md:my-14 m-5 font-bold rounded-lg  tracking-wider  text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 text-center" >MARKTECH</h1>
            {/* eslint-disable-next-line */}
            <a href="https://beck2301.github.io/marktechsv/" target="_blank" className="">
                <div className="bg-white shadow-2xl container md:m-auto rounded-2xl mr-5 transform transition duration-500 hover:scale-105 cursor-pointer">
                    <img src="https://i.ibb.co/QQC8yCY/imagen-2021-08-23-180635.png" alt="" className="md:rounded-2xl md:mb-12" />
                </div>
            </a>

            <div className="bg-black " >
                <div className="flex items-center md:flex-row justify-center flex-col container m-auto   p-10 rounded-2xl" >
                    <div className="flex-1  text-center md:text-justify text-white  dark:text-white md:text-2xl">
                        <h1 className="wow animate__animated animate__fadeInLeft mb-5 md:mb-0 ">MARKTECH is an unfinish prototype of an online gamer store, realizada con Bootstrap, js, css and HTML. Full Responsive.</h1>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/MnR7vQG/7.png" alt="" className="m-auto wow animate__animated animate__fadeInRight  md:w-5/6" />
                    </div>
                </div>

            </div>
            <div className="md:py-28 flex items-center justify-center m-auto md:flex-row flex-col">
                <img src="https://i.ibb.co/z7r523n/Copia-de-Sin-t-tulo-3.png" alt="" className=" m-auto wow animate__animated animate__fadeInUp md:w-2/6" />
                <img src="https://i.ibb.co/GCth7cL/9.png" alt="" className="m-auto wow animate__animated animate__fadeInUp   md:w-2/6" />
            </div>

            <div className="text-white text-center p-10 ">
                     {/* eslint-disable-next-line  */}
                <a href="https://beck2301.github.io/marktechsv/" target="_blank" className="">
                    <button class="transition duration-500 ease-in-out  hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 p-12 shadow-2xl md:text-5xl text-lg rounded-2xl dark:text-white text-black">
                        Visit Marktech <i class="fas fa-link dark:text-white"></i>
                    </button>
                </a>
            </div>
            <Footer />
        </>
    )
}

export default Site4
