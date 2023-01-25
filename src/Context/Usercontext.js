import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "../../src/firebase/firebase.init";
export const Authcontext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const Usercontext = ({ children }) => {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(true);
  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginuser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googlesignup = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  const googlelogin = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };
  const emailverification = () => {
    setloading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const forgetpassword = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const updateinformation = (name) => {
    setloading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    createuser,
    loginuser,
    googlesignup,
    googlelogin,
    logout,
    emailverification,
    forgetpassword,
    updateinformation,
    loading,
  };
  return (
    // <Authcontext.Provider value={Authinfo}>{children}</Authcontext.Provider>
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Usercontext;
