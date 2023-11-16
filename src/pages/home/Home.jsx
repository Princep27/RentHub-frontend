import React, { useEffect, useState } from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import Products from '../../components/products/Products';
import Footer from '../../components/footer/Footer';
import {BiFilter} from "react-icons/bi";
import { Outlet } from 'react-router-dom';
import { Button, Container, Modal } from 'react-bootstrap';
import StateCitySelector from '../../components/stateCitySelector/StateCitySelector';


export default function Home() {
  // States and contexts
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState,setSelectedState] = useState({name:"",selected:false});
  const [selectedCity,setSelectedCity] = useState({name:"",selected:false});
  // Event handlers

  function handleFilterButton(){
    setIsOpen(!isOpen);
  }

  return (
    <>
        <div >
          <Header/>
          <div className='homeWrapper'>
            <div className='heading'>
              <p>Recent</p>
              <div className='homeProductFilterButton' onClick={handleFilterButton}>Filter<BiFilter/></div>
            </div>
            <div className='productWrapperTop'>
                <Products/>
            </div>
          </div>
        </div>
        
          <Modal show={isOpen} onHide={()=>{setIsOpen(false)}} centered>
          <div style={{backgroundColor:'#B9C9BC'}}>
          <Modal.Header closeButton>
            <h4>
              Filter
            </h4>
          </Modal.Header>

          <Container fluid className="p-4">
            <StateCitySelector
              selectedCity={selectedCity}
              selectedState={selectedState}
              setSelectedCity={setSelectedCity}
              setSelectedState={setSelectedState}
            /> 
            <div className="d-flex w-100 justify-content-center mb-4">
              <Button 
                style={{
                  backgroundColor:'#0A3E33', 
                  border:'none',
                }}
                onClick={()=>{setIsOpen(false)}}
              >apply</Button>
            </div>
            </Container>
          </div>
          </Modal>
        <Footer/>
        <Outlet/>
    </>
  )
}
