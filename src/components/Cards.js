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
                                src='https://i.ibb.co/gzGTRHw/wlh.png'
                                text='WLH Grandes Alturas is a website with information about the company, I built the whole website '
                                path='/wlh'
                            />
                         

                            <CardItem
                                src='https://i.ibb.co/0VWFWHK/covid19.png'
                                text='COVID 19 web site that shows the data of the covid 19 in el salvador and in central america '
                                path='/covid19sv'
                            />
                            <CardItem
                                src='https://i.ibb.co/W0fR0xn/casatic.png'
                                text='CASA TIC web site'

                                path='/'
                            />

                        </ul>
                        <ul className='mb-5 md:flex'>
                            <CardItem
                                src='https://i.ibb.co/VCjLbL6/marktechj.png'
                                text='Marktech website'

                                path='/'
                            />

                            <CardItem
                                src='https://i.ibb.co/Tc09mPG/Copia-de-Copia-de-on-the-rocks.png'
                                text='OntheRocks website'

                                path='/'
                            />
                            <CardItem
                                src='https://raw.githubusercontent.com/briancodex/react-website-v1/master/public/images/img-3.jpg'
                                text='nothing'

                                path='/'
                            />

                        </ul>
                    </div>
                </div>
            </div>
         

        </>
    );
}

export default Cards;