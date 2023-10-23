import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";
import { useRef } from 'react';


import "./header.css";
import { LoginContext } from '../../context/LoginContext';

export default function Header() {

  const [isOpen,setIsOpen] = useState(false);
  function handleClick(){
    console.log("clicked" + isOpen);
    setIsOpen(!isOpen);
  }
  const scrollRef = useRef(null);

  return (
    <div className='headerWrapper'>
      <div className='header'>
        <div className='headerLeft'>
          <GiHamburgerMenu className='headerHamburger' onClick={handleClick}/>
          <div className="title">
          RentHub    
          </div>
        </div>
        <div className='headerMid'>
          <input className='headerSearch' placeholder='Search Product' type="text">
          </input>
          <CiSearch className='iconSearch' />
        </div>
        <div className='headerRight'>
          <div className='loginIcon' >
            Login
          </div>
        </div>

      </div>

      <div className='subHeader'>
          <AiFillCaretLeft onClick={()=>{scrollRef.current.scrollLeft -= 100}}/>
          <ul className='optionsSubHeader my-auto ' ref={scrollRef}>
            <li>Book</li> 
            <li>Car</li>
            <li>Bike</li>
            <li>Tablet</li>
            <li>Room</li>
            <li>Camera</li>
            <li>Mobile</li>
            <li>Laptop</li>
            <li>Book</li> 
            <li>Car</li>
            <li>Bike</li>
            <li>Tablet</li>
            <li>Room</li>
            <li>Camera</li>
            <li>Mobile</li>
            <li>Laptop</li>
            <li>PC</li>
            <li>HomeAppliances</li>  
          </ul>
          <AiFillCaretRight onClick={()=>{scrollRef.current.scrollLeft += 100}}/>
      </div>

      <div className='sideBar' style={{left:isOpen?'0px':'-220px'}} >
          <RxCross2 className='sideBarCross' onClick={handleClick}/>
          <ul>
            <li>HomePage</li> 
            <li>ToLet</li>
            <li>Help</li>
            <li>Contact</li>
            <li>About</li>  
          </ul>
      </div>
    </div>
  )
}
