"use client";
import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { ToastInput, useToasts } from "@geist-ui/core";
import { alertMessage } from "@/constants";

const AuthContext = createContext({} as any);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setToast } = useToasts();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  const nativeSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // updateProfile(userCredential.user, {
        //   displayName: "Admin",
        // })
        //   .then(() => {
        //     // Profile updated!
        //     // ...
        //   })
        //   .catch((error) => {
        //     // An error occurred
        //     // ...
        //   });
      })
      .catch((error) => {
        const type = "error" as ToastInput["type"];
        setToast({
          text: error.message,
          type,
        });
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, nativeSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
