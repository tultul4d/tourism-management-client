import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

     


      const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password );
      }

    
      

      const signInUser = (email, password)  =>{
        setLoading(true)
        return signInWithEmailAndPassword  (auth, email, password)
      }
     const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
     }
     const singInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
     }
       

     const updateUserProfile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

     const logOut = () =>{
        setLoading(true);
      return  signOut(auth);
     }


      useEffect(() =>{
    const unSubscribe =     onAuthStateChanged(auth, currentUser =>{
        console.log('observing current user ', currentUser);
            setUser(currentUser);
            setLoading(false);
            

       } );

       return () =>{
           unSubscribe();
       }
      }, [])


     const authInfo = { user,
        loading,
         createUser, 
         signInUser,
         signInWithGoogle,
         singInWithGithub,
         updateUserProfile,
        logOut
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
 
AuthProvider.propTypes = {
    children: PropTypes.node
}