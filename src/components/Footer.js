import React from 'react'

function Footer() {
    return (
        <>
      <div className="h-0.5 bg-yellow-400"/>
        <div className=" bg-linear-pink-invert pb-12 ">
            <div className="mx-auto container pt-20  flex flex-col items-center justify-center">
                <div>
               <img src="https://i.ibb.co/YRyW8Zk/LOGOBE.png" alt="" className="w-24"/>
                </div>
                <div className="text-black flex flex-col md:items-center f-f-l pt-3 dark:text-white">
                    <a className="text-2xl text-center" href="https://www.bedev.me"  >bedev.me</a>
                    
                    <div className="my-6 text-base text-color f-f-l">
                        <ul className="md:flex items-center text-center">
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"> <a href="/">Home</a></li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0" ><a href="/about">About me</a></li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="/projects">Projects</a></li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Contact</li>
                            <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Blog</li>
                        </ul>
                    </div>
                    <div className="text-sm text-color mb-10 f-f-l">
                        <p> © 2021 All rights reserved</p>
                    </div>
                </div>
             
              
            </div>
        </div>
        </>
    )
}

export default Footer
