import { getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWPvg9GLeHlOAi5NAo58KIZF6rhCot26U",
  authDomain: "autentication-ad7df.firebaseapp.com",
  projectId: "autentication-ad7df",
  storageBucket: "autentication-ad7df.appspot.com",
  messagingSenderId: "1051011162918",
  appId: "1:1051011162918:web:16294480d4f87055b157e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)