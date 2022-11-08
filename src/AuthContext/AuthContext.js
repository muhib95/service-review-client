import React, { createContext, useEffect, useState } from 'react';
import { getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const UserContext=createContext(); 
const auth=getAuth(app);

const AuthContext = ({children}) => {
    
    const [user,setUser]=useState(null);
    // email pass login
const logIn=(email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  
  }
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    });
    return ()=>unSubscribe();
  
  },[])

  const logOut=()=>{
    return signOut(auth);
  }

const register=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const userUpdate=(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }
const handleGoogleLogin=(Provider)=>{
    return signInWithPopup(auth,Provider);
}

    
    const info={user,logIn,handleGoogleLogin,register,logOut,userUpdate};
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;