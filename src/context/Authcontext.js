import { createContext, useContext, useEffect, useState } from 'react';
import { auth,db } from '../firebase';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user,setuser]=useState({})

    function signUp(email, password) {
       return  createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        return signOut(auth)

    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged (auth,(currentuser)=>{

            setuser(currentuser)
        })
        return()=>{
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{signUp,logIn,logOut,user}} >
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)

}