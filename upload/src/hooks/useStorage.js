// firebase storage sdk and commands
import { useState, useEffect } from "react";
// import { storage } from "../firebase/config";
import { app } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "firebase/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0); //progress bar
  const [error, setError] = useState(null); // error indicator
  const [url, setUrl] = useState(null);

  const uploadFile = async (file) => {
    if (file !== undefined && file !== null){
        console.log("creating ref here", `images/${file.name}`);
        
        
        const storage = getStorage(app);

        const imgRef = ref(storage, 'images/'+file.name);
        // console.log("done?", file.name);
        
        const uploadTask = uploadBytesResumable(imgRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            // handle progress
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
        }, (error) => {
            // ERROR
            console.log(error)
            setError(error)
        }, () => {
            // handle success
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                // make a call to express api
            });
        })
    }
    else {
        console.log("KLADGHALGHAGKHGKALGHAKLGHALG")
    }

  };

  // storage locations and details
  useEffect(() => {
    if (file){
        uploadFile(file);
    }
    // console.log(file)
  }, [file]);


  return { progress, error }; // 3 indicators while uploading the image
};
export default useStorage;
