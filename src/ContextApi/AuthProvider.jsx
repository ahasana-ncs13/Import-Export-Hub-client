import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)

    const googleProvider = new GoogleAuthProvider();

    const googleUser =()=>{
        return signInWithPopup(auth , googleProvider)
    }

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logoutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
        })

        return ()=>{
            unsubscribe()
        }

    },[])

    const authInfo={
        user,
        googleUser,
        createUser,
        signInUser,
        logoutUser,
    }

    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;