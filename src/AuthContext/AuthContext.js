import React, { createContext } from 'react';
export const UserContext=createContext(); 

const AuthContext = ({children}) => {

    const user={name:'Muhib'};
    const info={user};
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;