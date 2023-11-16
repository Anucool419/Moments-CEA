import React from 'react'
import Logo from "../assets/nitlogo.jpg"



import {Link} from "react-router-dom"

import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'></div>
        <img src={Logo}/>
        <div className="rightside"></div>
      
      
        
      
      
    </div>
  )
}

export default Navbar
