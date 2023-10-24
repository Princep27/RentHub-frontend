import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai";
import { useRef } from 'react';
import { Form, FormControl, Stack } from 'react-bootstrap';

import "./header.css";
import { Link } from 'react-router-dom';

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
        <Stack direction="horizontal" className='px-3 pt-2' gap={3} style={{flex:'1'}}>
          <GiHamburgerMenu className='h3' onClick={handleClick}/>
          <div className="h2">
            RentHub    
          </div>
        </Stack>

        {/* this searchbar is hidden when screen size is less than sm breakpoint */}

        <div className='d-md-block d-none m-auto px-5' style={{flex:'3'}}>
          <Form className='position-relative'>
            <FormControl 
            type="text"
            placeholder="Search"
            style={{
              backgroundColor:'#D4E2D4',
              border:'2px solid gray', 
              borderRadius:'25px',
              width:'100%',
              height:'32px'
            }}
            />
            <div
              style={{
                position:'absolute',
                top:'0px',
                right:'0px',
                height:'32px'
              }}
            >
              <CiSearch className='mt-1 me-2' style={{fontSize:'24px'}}/>
            </div>
          </Form>
        </div>

        <div className='headerRight'>
          <Link to="/login" className='loginIcon' style={{textDecoration:'none',color:'black'}}>
            Login
          </Link>
        </div>

      </div>

      <div className='d-md-none d-block mb-3'>
        <Form className='position-relative w-75 ms-4'>
          <FormControl 
          type="text"
          placeholder="Search"
          style={{
            backgroundColor:'#D4E2D4',
            border:'2px solid gray', 
            borderRadius:'25px',
            width:'100%',
            height:'32px'
          }}
          />
          <div
            style={{
              position:'absolute',
              top:'0px',
              right:'0px',
              height:'32px'
            }}
          >
            <CiSearch className='mt-1 me-2' style={{fontSize:'24px'}}/>
          </div>
        </Form>
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
