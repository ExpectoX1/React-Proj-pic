// upload form to send the image link to firebase
import ProgressBar from './Progress';
import React, { useEffect, useRef, useState } from 'react';
import useStorage from '../hooks/useStorage';
const Uploadform=()=>{
    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);
    const types=['image/png','image/jpeg']; // the image datatype is stored in te=he following format on the browser
    const form = useRef(null);
    const {progress, error: uploadError} = useStorage(file) 

    

    const changeHandler=(e)=>{
        // initially the file will be stored with a undefined name
     //console.log("change occured");
     let selected=e.target.files[0];  // assign the files if uploaded 
     //console.log(selected);
     if(selected && types.includes(selected.type)){  // checks whether the type of the file from selected is belonging to the array "types"
            setFile(selected); // the file stored will be assigned to selected array
            setError(''); //if a corr
        }
     else
     {
         setFile(null); // if any other format is used
         setError("Please select an image file only(png/jpeg)");
         form.current.reset()
     }
    }

    useEffect(() => {
        if (progress === 100){
            setFile(null)
            form.current.reset();
        }
        
    })

    return(
        <>
        <form ref={form}>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{ error }</div>}  {/* the error is outputted inside the div with name error */}
                {file && <div >{file.name}</div>} {/* works if file exists, hence the &&*/}
                {file && <ProgressBar progress={progress}/>}  {/*progressbar isn't needed after upload so setfile to initial*/}
            </div>      
        </form>
        {uploadError ? <p>Error uploading file</p> : <></>}
        </>

    )
}

export default Uploadform;  