import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useDarkMode from '../hook/useDarkMode';

function Navbar() {
  const [colorTheme , setTheme] = useDarkMode();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar bg-white dark:bg-black'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://i.ibb.co/YRyW8Zk/LOGOBE.png" className="h-10" alt="" />
           
          </Link>
          
          <button  className="navbar-icon   mt-2" onClick={() => setTheme(colorTheme)}>
                <svg xmlns="http://www.w3.org/2000/svg " class="h-8 w-8 dark:text-white text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </button >
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times dark:text-white' : 'fas fa-bars dark:text-white'} />
          </div>
          <ul className={click ? 'nav-menu active bg-white dark:bg-black' : 'nav-menu' } >
          <li className='nav-item text-yellow-500 bg-white dark:bg-black'>
              <Link
                to='/'
                className='nav-links  font-bold md:text-8xl '
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item text-yellow-500 bg-white dark:bg-black md: '>
              <Link to='/about' className='nav-links  font-bold md:text-8xl' onClick={closeMobileMenu}>
              About me
              </Link>
            </li>
            <li className='nav-item text-yellow-500 bg-white dark:bg-black'>
              <Link
                to='/projects'
                className='nav-links  font-bold md:text-8xl '
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item text-yellow-500 bg-white dark:bg-black'>
              <Link
                to='/contact'
                className='nav-links  font-bold md:text-8xl'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item text-yellow-500 bg-white dark:bg-black'>
              <Link
                to='/blog'
                className='nav-links  font-bold md:text-8xl'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>

          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
