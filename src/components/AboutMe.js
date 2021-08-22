import React from 'react'

function AboutMe() {
    return (
        <>
            <div class="text-center mt-20 c-first dark:bg-dark">
                <div class="md:flex  ">
                    <div class="flex-1 ">
                        <img src="https://i.ibb.co/S794LRQ/be.png" alt="" class="w-72 mb-6 md:w-96  rounded-lg border-yellow-400 border-b-4 m-auto wow animate__animated animate__fadeInLeft" />
                    </div>
                    <div class="pl-4 pr-4 md:flex-1 m-auto  md:text-justify  dark:text-white">
                        <h1 class="text-5xl  md:text-6xl mb-9 font-bold rounded-lg    text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600" >About me </h1>

                        <h1 class="text-5xl  md:text-6xl mb-5 font-bold" >Who i am? </h1>

                        <p className="md:w-11/12 md:text-2xl  mb-5 ">My nameis <b className="text-yellow-500">Bryan Escobar</b>, i am a person who loves challenges and does not give up easily. Very detailed, I never stop learning, easy to socialize and deal with people, web developer and lover of the frontend world.</p>

                        <h1 class="text-5xl  md:text-6xl mb-5 font-bold" >Academic training </h1>

                        <div class="container container  flex flex-wrap flex-col md:flex-row">
            
                            <div class="w-full lg:w-1/2 p-3">
                                <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-28 md:w-72  shadow shadow-lg  ">
                                    <img class="block h-auto w-full lg:w-auto  flex-none bg-cover bg-white md:p-2 p-10  " src="https://i.ibb.co/fF2ccz8/logo-udb-transparente.png" />
                                    <div class="bg-yellow-500 rounded-b lg:rounded-b-none lg:rounded-r  p-4 flex flex-col justify-between leading-normal">
                                        <div class="text-black font-bold text-xl mb-2 leading-tight">Computer Engineering Technician</div>
                                      
                                    </div>
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
