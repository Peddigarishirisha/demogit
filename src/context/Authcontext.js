import { createContext, useContext, useEffect, useState } from 'react';
import { auth,db } from '../firebase';

import {
    createUserWithEmailAndPassword,
   
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from 'firebase/auth';
  import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user,setuser]=useState({})

    function signUp(email, password) {
      
        createUserWithEmailAndPassword(auth, email, password);
setDoc(doc(db,'user',email),{
    savedShow:[]

})

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