import React, { useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);


export const authContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //register an account or sign up ................
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in user/ login........................
    const logUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    // sign out or log out................................
    const userLogOut = () => {
        return signOut(auth);
    }

    //signIn with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }



    // Observe auth state change;
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        createUser,
        logUser,
        googleSignIn,
        userLogOut,
        user,
        loading,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;