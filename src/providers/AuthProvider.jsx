import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // টোকেন সেভ করার জন্য কমন ফাংশন
    const saveToken = (user) => {
        const loggedUser = { email: user?.email };
        fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedUser)
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('access-token', data.token);
            }
        });
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                saveToken(result.user);
                return result;
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                saveToken(result.user);
                return result;
            });
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                saveToken(result.user);
                return result;
            });
    };

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('access-token'); 
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = { user, createUser, signIn, logOut, googleSignIn, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;