import React, {useContext, useEffect, useState } from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import Products from '../../components/products/Products';
import Footer from '../../components/footer/Footer';
import {BiFilter} from "react-icons/bi";
import {ImCross} from "react-icons/im";
import {FiSearch} from "react-icons/fi";
import { LoginContext } from '../../context/LoginContext';
import Login from '../login/Login';
import { State, City }  from 'country-state-city';


export default function Home() {

  // States and contexts
  const [isOpen,setIsOpen] = useState(false);
  const [filterState,setFilterState] = useState([]);
  const [filterCities,setFilterCities] = useState([]);
  const [selectedState,setSelectedState] = useState({name:"",selected:false});
  const [selectedCity,setSelectedCity] = useState({name:"",selected:false});
  const {isLoginFormOpen} = useContext(LoginContext);

  // Effetcs

  useEffect(()=>{
    setFilterState(
      State.getStatesOfCountry('IN').map(
        (val)=>{
          return {name:val.name,code:val.isoCode}
        }
      )
    );
  },[])

  useEffect(()=>{
    selectedState.selected && setFilterCities(City.getCitiesOfState('IN',selectedState.code).map((val)=>{ return val.name}));
  },[selectedState]);

  // Event handlers

  function handleFilterButton(){
    setIsOpen(!isOpen);
  }
  
  function handleInputStateChange(e){
    setSelectedState({name:e.target.value,selected:false});
    setSelectedCity({name:"",selected:false});
  }

  function handleInputCityChange(e){
    setSelectedCity({name:e.target.value,selected:false});
  }


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
                   <input className='filterStateInput' value={selectedState.name} placeholder='Select State' onChange={handleInputStateChange}></input>
                   <ul className='filterStateDropdown'>
                    {
                      filterState
                      .filter(
                        (val)=>{
                          return val.name.toLowerCase().startsWith(selectedState.name.toLowerCase());
                        }
                      )
                      .map(
                          (val,index)=>{
                          return <li key={index} className='filterStateDropdownItem' onClick={()=>setSelectedState({...val,selected:true})} >{val.name}</li>
                        }
                      )
                    }
                   </ul>
                   <FiSearch className='filterStateInputSearch'/>
                </div>

                <div className='filterCity' >
                    <input className='filterCityInput' value={selectedCity.name} placeholder='Select City' onChange={handleInputCityChange}></input>
                    <ul className='filterCityDropdown'>
                    {
                      selectedState.selected &&
                      filterCities
                      .filter((val)=>val.toLowerCase().startsWith(selectedCity.name.toLowerCase()))
                      .map((val,index)=>{
                        return <li key={index} className='filterCityDropdownItem' onClick={()=>setSelectedCity({name:val,selected:true})} >{val}</li>
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
