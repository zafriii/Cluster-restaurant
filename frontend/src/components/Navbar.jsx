// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './navbar.css'
// import { IoIosCart } from "react-icons/io";
// import { useMenu } from '../context/Context';

// function Navbar() {

//   const {total_item} = useMenu();

//   return (
//     <>
//     <div className="navbar">
//         <div className="nav-logo">
//             <h1>Cluster</h1>
//         </div>

//         <div className="nav-links">
//             <NavLink to='/'>Home</NavLink> 
//             <NavLink to='/about'>About</NavLink> 
//             <NavLink to='/contact'>Contact</NavLink> 
//             <NavLink to='/menu'>Menu</NavLink>
//             <NavLink to='/cart'><IoIosCart className='nav-icon'/>
//                 <span>{total_item}</span>
//             </NavLink> 
//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar 



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { IoIosCart } from 'react-icons/io';
import { useMenu } from '../context/Context';

function Navbar() {
  const { total_item } = useMenu();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>Cluster</h1>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
        <NavLink to="/products" onClick={toggleMenu}>
          Menu
        </NavLink>
        <NavLink to="/cart" onClick={toggleMenu}>
          <IoIosCart className="nav-icon" />
          <span>{total_item}</span>
        </NavLink>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>
    </div>
  );
}

export default Navbar;


