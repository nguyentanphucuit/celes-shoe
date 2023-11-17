import { storage } from "@/firebaseConfig";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useEffect, useState } from "react";

const useImageStorage = (...args: string[]) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const imageListRef = ref(storage, args.join("/"));

  useEffect(() => {
    setLoading(false);
    getDownloadURL(imageListRef)
      .then((url) => {
        setData(url);
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

  return { data, loading };
};
const uploadImageStorage = (
  path: string,
  files: any,
  setImage: any,
  setProgress: any
) => {
  const imageListRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(imageListRef, files);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImage(downloadURL);
        console.log("File available at", downloadURL);
      });
    }
  );
};

const deleteImageStorage = (path: string, files: any) => {
  const imageListRef = ref(storage, path);
  deleteObject(imageListRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
};

export { useImageStorage, uploadImageStorage };
