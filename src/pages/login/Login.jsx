import { useContext } from 'react';
import './login.css';
import {RxCross2} from "react-icons/rx";
import { LoginContext } from '../../context/LoginContext';
export default function Login(){
    const {setIsLoginFormOpen} = useContext(LoginContext);
    return (
        <>
            <div className="loginFormWrapper">
                <div className="loginForm">
                    <RxCross2 className='loginFormCross' onClick={()=>setIsLoginFormOpen((x)=>!x)}/>

                    <h3>ACCOUNT LOGIN</h3>

                    <div>Enter your email</div>
 
                    <input type="email" className='loginInputBar' name="email" id="email" />

                    <div>Enter password</div>

                    <input type="password" className="loginInputBar" name="password" id="password" />

                    <button type="submit" className='loginSubmitButton'>LogIn</button>
                </div>
            </div>
        </>
    )
}