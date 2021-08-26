import React from 'react'
import { Link } from 'react-router-dom'



function Me() {
    return (
        <>
            <div class="text-center mt-20 c-first dark:bg-dark">
                <div class="md:flex  ">
                    <div class="flex-1 ">
                        <img src="https://i.ibb.co/4fQ3yjQ/me.png" alt="" class="w-72 mb-6 md:w-96 rounded-full border-yellow-400 border-4 m-auto wow animate__animated animate__fadeInLeft" />
                    </div>
                    <div class="pl-4 pr-4 md:flex-1 m-auto  md:text-justify  dark:text-white">
                        <h1 class="text-5xl  md:text-8xl mb-5" >HI <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/waving-hand_1f44b.png" alt="" className="w-11 text-center  md:w-20 inline wow animate__animated animate__shakeX " /> I am </h1>
                        <h1 class="text-6xl  md:text-8xl   mb-5 ">Bryan Escobar </h1>
                        <h1 class=" md:text-3xl">web development and pupusas lover</h1>
                        <Link to='/about'>
                        <button class="px-10 py-3 mt-4 text-base border-yellow-300 text-black  dark:border-white   dark:text-yellow-400 border-2 rounded-3xl hover:bg-yellow-400 dark:  dark:hover:text-black hover:border-black   dark:hover:bg-yellow-500  dark:hover:border-yellow-500" >About me</button>
                        </Link>
                    </div>
                </div>
            </div>

            <svg width="100%" height="100%" viewBox="0 0 1602 261" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <rect x="-49.1526" y="0.208191" width="1669.64" height="12.4318" transform="rotate(8.5348 -49.1526 0.208191)" fill="#FFB803" />
            </svg>




        </>
    )
}

export default Me
