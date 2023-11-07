import { useState, useEffect } from "react";

import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { ProductProps } from "@/types";

function useApiData(apiUrl: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiUrl]);

  return { data, loading, error };
}
function useApiDataFireStore(collectionName: string) {
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiRef = collection(db, collectionName);

  useEffect(() => {
    (async () => {
      await getDocs(apiRef)
        .then((response) => {
          setData(
            response.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
          );
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    })();
  }, [collectionName]);

  return { data, loading, error };
}

const addProductFireStore = async (
  collectionName: string,
  data: { [key: string]: any }
) => {
  const apiRef = collection(db, collectionName);
  await addDoc(apiRef, data);
};
const editProductFireStore = async (
  collectionName: string,
  data: { [key: string]: any },
  id: string
) => {
  const apiRef = doc(db, collectionName, id);
  await updateDoc(apiRef, data);
};
const deleteProductFireStore = async (collectionName: string, id: string) => {
  const apiRef = doc(db, collectionName, id);
  await deleteDoc(apiRef);
};

export {
  useApiData,
  useApiDataFireStore,
  addProductFireStore,
  editProductFireStore,
  deleteProductFireStore,
};
