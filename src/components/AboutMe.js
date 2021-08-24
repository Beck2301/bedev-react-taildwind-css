import React from 'react'
import './Cards.css';
function AboutMe() {
    return (
        <>
            <div class="text-center mt-20 c-first dark:bg-dark">
                <div class="md:flex  ">
                    <div class="flex-1 m-auto">
                        <img src="https://i.ibb.co/S794LRQ/be.png" alt="" class=" w-72 mb-6 md:w-96  rounded-lg border-yellow-400 border-b-4 m-auto wow animate__animated animate__fadeInLeft" />
                    </div>
                    <div class="pl-4 pr-4 md:flex-1 m-auto  md:text-left dark:text-white">
                        <h1 class="wow animate__animated animate__fadeInDown   mb-9 font-bold rounded-lg  tracking-widest  text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600" >ABOUT ME </h1>

                        <h1 class="text-5xl  md:text-5xl " >Who I am? </h1>

                        <p className="md:w-11/12 md:text-xl  mt-5 mb-5 wow animate__animated animate__fadeInRight ">My name is <b className="text-yellow-500" >Bryan Escobar</b>, I am a person who loves challenges and does not give up easily. Very detailed, I never stop learning, easy to socialize and deal with people, web developer and lover from frontend world.</p>

                        <h1 class="text-5xl md:text-5xl flex-initial mb-4 wow animate__animated animate__fadeInRight"  >Academic training and courses </h1>
                        {/* 
                        <div class="md:flex">
                            <div class="p-5 md:pr-5 pb-10 w-full md:w-1/2 wow animate__animated animate__fadeInUp  ">
                                <div class=" dark:bg-black dark:border-yellow-300 border-2   rounded-lg shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer">
                                    <img src="https://i.ibb.co/fF2ccz8/logo-udb-transparente.png" alt="" class="rounded-t-lg  w-32 m-auto p-2" />
                                    <div class="p-5 border-t-2 border-yellow-500">
                                        <h2 class="font-bold mb-2 text-2xl text-black text-center dark:text-white">Computer Engineering Technician
                                        </h2>
                                        <p class="mb-2 text-center">Universidad Don Bosco El Salvador</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5 md:pl-5  w-full md:w-1/2 wow animate__animated animate__fadeInUp  ">
                                <div class=" dark:bg-black dark:border-yellow-300 border-2 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer">
                                    <img src="https://i.ibb.co/nP7CQfX/Dise-o-sin-t-tulo-removebg-preview.png" alt="" class="rounded-t-lg  w-32 m-auto p-2" />
                                    <div class="p-3 border-t-2 border-yellow-500">
                                        <h2 class="font-bold mb-2 text-2xl dark:text-white text-center">Course Web development usign C# ASP.Net with .NetFramework
                                        </h2>
                                        <p class="mb-2 text-center"> Cámara Salvadoreña de Tecnologías de la Información y Comunicaciones (CASATIC) </p>
                                    </div>
                                </div>
                            </div>
                        </div>

 */}









<div className=' dark:text-white'>
                <div className='flex flex-col md:max-w-screen-xl w-11/12 m-auto '>
                    <div className='relative' >
                        <ul className='mb-5 md:flex '>
                            <div className='flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8 dark:border-yellow-500 border-2  transform transition duration-500 hover:scale-105 cursor-pointer'>
                                <div className='flex flex-col w-full shadow-2xl rounded-2xl overflow-hidden no-underline' >

                                    <figure className='relative w-full  overflow-hidden border-yellow-500 border-b-2' >
                                        {/* eslint-disable-next-line */}
                                        <img
                                            className='w-1/3 text-center content-center m-auto  '
                                            alt=''
                                            src="https://i.ibb.co/4WDv4cJ/1-removebg-preview.png"
                                        />
                                    </figure>
                                    <div className='px-2 py-2 text-center'>
                                    <h5 className='dark:text-white  font-bold text-2xl'>Computer Engineering Technician</h5>
                                    <br/>
                                        <h5 className='dark:text-white'>Universidad Don Bosco El Salvador</h5>
                                    </div>
                                </div>

                            </div>


                            <div className='flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8  '>
                                <div className='flex flex-col w-full shadow-2xl rounded-2xl overflow-hidden no-underline dark:border-yellow-500 border-2  transform transition duration-500 hover:scale-105 cursor-pointer'  >

                                    <figure className=' relative w-full   overflow-hidden border-yellow-500 border-b-2' >
                                        {/* eslint-disable-next-line */}
                                        <img
                                            className='w-1/3 text-center content-center m-auto '
                                            alt=''
                                            src="https://i.ibb.co/19Q9qXh/2-removebg-preview.png"
                                        />
                                    </figure>
                                    <div className='px-2   py-2 text-center'>
                                        <h5 className='dark:text-white font-bold text-2xl'>Course Web development usign C# ASP.Net with .NetFramework</h5>
                                        <br/>
                                        <h5 className='dark:text-white'>Cámara Salvadoreña de Tecnologías de la Información y Comunicaciones (CASATIC)</h5>


                                    </div>
                                </div>

                            </div>


                        </ul>


                    </div>
                </div>
            </div>

                    </div>
                    

                </div>
            </div>

          
        </>
    )
}

export default AboutMe
