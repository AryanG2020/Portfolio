import React from 'react';
import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";



const NavBar = () => {
  return <nav className='mb-15 flex items-center justify-between py-6 hover:animate-pulse transition-all duration-300 ease-in-out'>
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-12 h-12" src={logo} alt="" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
    <a href="https://www.linkedin.com/in/aryan-gurubacharya" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-purple-600  hover:rotate-12 hover:scale-150 hover:shadow-purple-600 transition-all duration-300 ease-in-out"/>
      </a>
      
        <a href="https://github.com/AryanG2020" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-purple-600 hover:rotate-12 hover:scale-150 hover:shadow-purple-600 transition-all duration-300 ease-in-out"/>
        </a>
       
    </div>
    
  </nav>
    
  
}

export default NavBar
