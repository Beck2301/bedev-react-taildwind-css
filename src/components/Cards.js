import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (

        <>

            <h1 class="wow animate__animated animate__fadeInDown   mb-9 font-bold rounded-lg  tracking-widest  text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 text-center mt-2" >MY PROJECTS </h1>
            <div className=' dark:text-white'>
                <div className='flex flex-col items-center md:max-w-screen-xl w-11/12 m-auto '>
                    <div className='relative' >

                        <ul className='mb-5 md:flex '>
                            <CardItem
                                src='https://i.ibb.co/VCjLbL6/marktechj.png'
                                text='MARKTECH is an unfinish prototype of an online gamer store '
                                className="wow animate__animated animate__fadeInLeft flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8  "
                                path='/marktech'
                            />



                            <CardItem
                                src='https://i.ibb.co/0VWFWHK/covid19.png'
                                text='COVID 19 web site that shows the data of the covid 19 in El Salvador and in central america '
                                className="wow animate__animated animate__fadeInLeft flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8  "
                                path='/covid19sv'
                            />
                            <CardItem
                                src='https://i.ibb.co/Tc09mPG/Copia-de-Copia-de-on-the-rocks.png'
                                text=' ON THE ROCKS is a website under development where you can get information about the company'
                                className="wow animate__animated animate__fadeInLeft flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8  "
                                path='/on-the-rocks'
                            />


                        </ul>
                        <ul className='mb-5 md:flex'>
                            <CardItem
                                src='https://i.ibb.co/gzGTRHw/wlh.png'
                                text='WLH Grandes Alturas is a website with information about the company, I built the whole website '
                                className="wow animate__animated animate__fadeInUp flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8  "
                                path='/wlh'
                            />
                            {/* <CardItem
                                src='https://i.ibb.co/W0fR0xn/casatic.png'
                                text='CASA TIC web site'

                                path='/casa-tic'
                            />
                       */}


                            <li className='wow animate__animated animate__fadeInUp flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8 '>
                            {/* eslint-disable-next-line  */}
                                <a className='flex flex-col w-full shadow-2xl rounded-2xl overflow-hidden no-underline ' href="https://codepen.io/beck2301" target="_blank">

                                    <figure className='cards__item__pic-wrap relative w-full  pt-16 overflow-hidden' >
                                        <img
                                            className='cards__item__img'
                                            alt=''
                                            src='https://i.ibb.co/C9sgSmF/logos.png'
                                        />
                                    </figure>
                                    <div className='p-5'>
                                        <h5 className='dark:text-white'>In my CodePen you will find some small but interesting projects'</h5>
                                    </div>
                                </a>

                            </li>

                        </ul>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Cards;