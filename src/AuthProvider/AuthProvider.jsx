
import {  createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    // REGISTER
    const createUser=(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login
    const userLogin = (email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
    }
    // Google
    const googleLogin=()=>{
        return signInWithPopup(auth, provider)
    }

    // logOut
    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            // console.log("state captured",currentUser?.email);
            if (currentUser?.email) {
                const user= {email:currentUser?.email}
                axios.post('https://management-server-site-7.onrender.com/jwt',user,{withCredentials: true})
                 .then(res =>{
                //   console.log("login token",res.data);
                
                  setLoading(false)
                 })
            }
            else{
                axios.post('https://management-server-site-7.onrender.com/logout',{},{withCredentials: true})
                .then(res =>{
                 console.log("logout",res.data);
                 setLoading(false)
                })
            }
           
        }); 
            
          
            return ()=>{
                unsubscribe()
            }
    },[])

    // dark Light theme
      
      const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

      useEffect(() => {
          localStorage.setItem("theme", theme);
          document.body.className = theme; 
      }, [theme]);
  
      const toggleTheme = () => {
          setTheme(theme === "light" ? "dark" : "light");
      };

    const userInfo={
        user,
        setUser,
        createUser,
        loading,
        userLogin,
        googleLogin,
        logOut,
        toggleTheme,theme,
        setTheme,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;