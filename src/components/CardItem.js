import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='flex flex-1 mr-4 ml-4 rounded-xl md:mb-2  mb-8 '>
        <Link className='flex flex-col w-full shadow-2xl rounded-2xl overflow-hidden no-underline' to={props.path}>
          
          <figure className='cards__item__pic-wrap relative w-full  pt-16 overflow-hidden' >
           {/* eslint-disable-next-line */}
            <img
              className='cards__item__img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='p-5'>
            <h5 className='dark:text-white'>{props.text}</h5>
          </div>
        </Link>
        
      </li>
      
      
    </>
  );
}
export default CardItem;
