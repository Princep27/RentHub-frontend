import React, {useContext, useEffect, useState } from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import Products from '../../components/products/Products';
import Footer from '../../components/footer/Footer';
import {BiFilter} from "react-icons/bi";
import {ImCross} from "react-icons/im";
import {FiSearch} from "react-icons/fi";
import {states,cities} from "../../data.js";
import { LoginContext } from '../../context/LoginContext';
import Login from '../login/Login';

export default function Home() {

  const [isOpen,setIsOpen] = useState(false);
  const [filterState,setFilterState] = useState([]);
  const [filterCities,setFilterCities] = useState([]);
  const [selectedState,setSelectedState] = useState("");
  const [selectedCity,setSelectedCity] = useState("");
  const {isLoginFormOpen} = useContext(LoginContext);

  function handleFilterButton(){
    setIsOpen(!isOpen);
    setFilterState(states);
    setFilterCities(cities.top);
  }

  function handleInputStateChange(e){
    let temp = states.filter(state => state.toLowerCase().startsWith(e.target.value.toLowerCase()));
    setFilterState(temp);
    setSelectedState(e.target.value);
  }

  function handleInputCityChange(e){
    let temp = cities[selectedState] && cities[selectedState].filter(city => city.toLowerCase().startsWith(e.target.value.toLowerCase()));
    setFilterCities(temp);
    setSelectedCity(e.target.value);
  }

  useEffect(()=>{
    setFilterCities(cities[selectedState]);
  },[selectedState]);

  return (
    <>
        <div style={{opacity:isOpen || isLoginFormOpen?'0.5':'1'}}>
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
        
          {/* login popup */}
          { isLoginFormOpen && <Login/> }

          <div className='filterSideBar' style={isOpen?{visibility:'visible',right:'0vw'}:{visibility:'hidden',right:'-100vw'}}>
             <div className='homeFilterInputFieldWrapper'>
                <ImCross className='filterSideBarCross' onClick={handleFilterButton}/>


                <div className='filterState' >
                   <input className='filterStateInput' value={selectedState} placeholder='Select State' onChange={handleInputStateChange}></input>
                   <ul className='filterStateDropdown'>
                    {
                      setFilterState && filterState.map((val,index)=>{
                        return <li key={index} className='filterStateDropdownItem' onClick={()=>setSelectedState(val)} >{val}</li>
                      })
                    }
                   </ul>
                   <FiSearch className='filterStateInputSearch'/>
                </div>

                <div className='filterCity' >
                    <input className='filterCityInput' value={selectedCity} placeholder='Select City' onChange={handleInputCityChange}></input>
                    <ul className='filterCityDropdown'>
                    {
                      filterCities && filterCities.map((val,index)=>{
                        return <li key={index} className='filterCityDropdownItem' onClick={()=>setSelectedCity(val)} >{val}</li>
                      })
                    }
                    </ul>
                    <FiSearch className='filterCityInputSearch'/>
                </div>

             </div>
          </div>
        <Footer/>
    </>
  )
}
