import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { ReactNode, createContext, useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

interface GoogleAuthinterface {
  children: ReactNode
}

interface GoogleAuthentication {
  SignInwithGoogle: () => void,
  signed: boolean,
  user: User| null,
}

export const AuthContext = createContext({} as GoogleAuthentication)

export const AuthGoogleContext = ( { children }:GoogleAuthinterface  ) => {


  const [user, setUser] = useState<User | null>(null);

   useEffect(()=>{
     const loadStoreAuth = () => {
             const sessionToken = sessionStorage.getItem("@AuthAuthenticationGoogle: token") 
             const sessionUser = sessionStorage.getItem("@AuthAuthenticationGoogle: user") 

             if(sessionToken && sessionUser) {
               setUser(JSON.parse(sessionUser))
             }
     };

     loadStoreAuth()
   },[]);



  const SignInwithGoogle = () => {
    signInWithPopup( auth, provider).then((result) => {
      const credencial = GoogleAuthProvider.credentialFromResult(result)
      const token = credencial?.accessToken;
         
      const user = result.user;

      setUser(user);

      console.log(user);
      

        if(token) {
        sessionStorage.setItem("@AuthAuthenticationGoogle: token", token); 
       }

       if(user) {
        sessionStorage.setItem("@AuthAuthenticationGoogle: user", JSON.stringify(user));
       }
  
      
    }).catch((error) => {
       const errorCode = error.code;

       const errorMessage = error.message;

       const email = error.email;

       const credential = GoogleAuthProvider.credentialFromError(error)
    });
  }

  return (
    <AuthContext.Provider value={{ SignInwithGoogle, signed: !!user, user}}>
         {children}
    </AuthContext.Provider>
  )

}