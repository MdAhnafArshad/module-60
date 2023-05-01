import React, { useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);


export const authContext = createContext(null);




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

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



    // Observe auth state change;
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        createUser,
        logUser,
        userLogOut,
        user,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;