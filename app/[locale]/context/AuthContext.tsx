"use client";
import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { ToastInput, useToasts } from "@geist-ui/core";
import { alertMessage } from "@/constants";
import { useRouter } from "next/navigation";

const AuthContext = createContext({} as any);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { setToast } = useToasts();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    router.push("/admin");
  };
  const logOut = () => {
    signOut(auth);
  };
  const nativeSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed inß
        const user = userCredential.user;
        console.log(user);
        router.push("/admin");
        const type = "success" as ToastInput["type"];
        setToast({
          text: "Login successfully",
          type,
        });
      })
      .catch((error) => {
        const type = "error" as ToastInput["type"];
        setToast({
          text: error.message || "",
          type,
        });
      });
  };

  const createUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: "No name",
        })
          .then(() => {})
          .catch((error) => {});
        nativeSignIn(email, password);
        router.push("/admin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logOut, nativeSignIn, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
