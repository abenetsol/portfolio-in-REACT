// import React, {useState} from 'react'
// import {Button} from './Button'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// import dropdown from './dropdown.png'
// import close from './close.png'
import '../pages/Homepage.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
function Navbar(){
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    return(
        <>

        <nav className='navbar'>
            <div className='menu-icon' onClick={handleClick}>
            {click ? 
            <img src={close} alt='dropdown'/>
            : <img src={dropdown} alt='dropdown'/>
            }           
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to='/' 
        className='nav-link' 
        onClick={closeMobileMenu}>
        <div className="frame-div">
        <b className="home"><a className="navLink" href="/Contact">HOME</a></b>
      </div>
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/' 
        className='nav-link' 
        onClick={closeMobileMenu}>
        <div className="frame-div1">
        <b className="home"><a className="navLink" href="/Contact">ABOUT</a></b>
      </div>
        </Link>
        </li>
        <li className='nav-item'>
            <Link
            to='/' 
            className='nav-link' 
            onClick={closeMobileMenu}>
            <div className="frame-div2">
            <b className="home"><a className="navLink" href="/Contact">PROJECTS</a></b>
            </div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link
            to='/' 
            className='nav-link' 
            onClick={closeMobileMenu}>
            <div className="frame-div3">
            <b className="home"><a className="navLink" href="/Contact">CERTIFICATIONS</a></b>
            </div>
            </Link>
        </li>
        <li className='nav-item'>
            <Link>
            <div className="frame-div4">
            <b className="home"><a className="navLink" href="/Contact">CONTACT</a></b>    
            </div>  
            </Link>
        </li>
      
      </ul>
      </div>
      </nav>  
        </>
    )
}
export default Navbar;

//             {/* <nav className='navbar'>
//                <Link to='/'
//                className='navbar-logo'
//                >
//                 EPIC
//                 </Link>
//                 <div className='menu-icon' onClick={handleClick}>
//                     {click ? 
//                     <img src={close} alt='dropdown'/>
//                     : <img src={dropdown} alt='dropdown'/>
//                     }
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className='nav-item'>
//                         <Link to='/' 
//                         className='nav-link' 
//                         onClick={closeMobileMenu}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/services' 
//                         className='nav-link' 
//                         onClick={closeMobileMenu}>
//                             Services
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/contact-us' 
//                         className='nav-link' 
//                         onClick={closeMobileMenu}>
//                             Contact Us
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/certifications' 
//                         className='nav-link' 
//                         onClick={closeMobileMenu}>
//                             Certifications
//                         </Link>
//                     </li>
//                     </ul>
//                     <Button/>
//                 </div>
//             </nav> */}