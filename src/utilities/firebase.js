import { getAuth, GoogleAuthProvider, signInWithPopup , onIdTokenChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref , set, update} from 'firebase/database';
import {useState, useEffect} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBSbk4ByGtiUodJbSSO09wHHbUL2Co_OU8",
    authDomain: "adapt-nu.firebaseapp.com",
    projectId: "adapt-nu",
    storageBucket: "adapt-nu.appspot.com",
    messagingSenderId: "712381547582",
    appId: "1:712381547582:web:783d55ac3c94943aa97d6f"
  };

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
  };

  export const setData = (path, value) => (
    set(ref(database, path), value)
  );

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };

export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};

export const editData = (path, value) => (
  update(ref(database,path), value)
);