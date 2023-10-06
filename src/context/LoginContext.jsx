import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({children}){
    const [isLoginFormOpen,setIsLoginFormOpen] = useState(false);
    return(
        <LoginContext.Provider
            value={
                {
                    isLoginFormOpen,
                    setIsLoginFormOpen
                }
            }
        >
            {children}
        </LoginContext.Provider>
    )
}

