/* eslint-disable react-hooks/rules-of-hooks */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import auth from '../firebase';

const userAuthContext = createContext();
export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    };
    const googleSignIn = () => {
        return signInWithPopup(auth, new GoogleAuthProvider());
    };
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsub();
        };
    }, []);
    const values = useMemo(
        () => ({
            user,
            signUp,
            login,
            logout,
            googleSignIn
        }),
        [user]
    );
    return <userAuthContext.Provider value={values}>{children}</userAuthContext.Provider>;
};
export const useUserAuth = () => {
    return useContext(userAuthContext);
};
