import { useState, useEffect } from "react";

import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
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

export { useApiData, useApiDataFireStore };
