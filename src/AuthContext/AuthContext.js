import React, { createContext } from 'react';
import { getAuth,signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const UserContext=createContext(); 
const auth=getAuth(app);

const AuthContext = ({children}) => {


const handleGoogleLogin=(Provider)=>{
    return signInWithPopup(auth,Provider);
}

    const user={name:'Muhib'};
    const info={user,handleGoogleLogin};
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;