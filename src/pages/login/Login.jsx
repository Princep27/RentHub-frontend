import './login.css';
import {RxCross2} from "react-icons/rx";
import { Link } from 'react-router-dom';
export default function Login(){
    return (
        <>
            <div className="loginFormWrapper">
                <div className="loginForm">
                    <Link to="/" style={{textDecoration:'none'}}>
                    <RxCross2 className='loginFormCross'/>
                    </Link>

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