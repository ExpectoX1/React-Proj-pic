//progress bar while uploading images
import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar= ({progress})=>
{   
    // the ones inside [] are dependancies for the function
    return(
        <div><progress value={progress} max={100}/></div>
    );
}

export default ProgressBar;