import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
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
      <nav className='navbar bg-black'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://i.ibb.co/YRyW8Zk/LOGOBE.png" className="h-14 " alt="" />
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu' } >
            <li className='nav-item'>
              <Link to='/about' className='nav-links text-yellow-500' onClick={closeMobileMenu}>
              About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links text-yellow-500'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item text-yellow-500'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
