import React from 'react'
import './HeroComponent.css'
import v1 from "./hehe1.mp4"
import i1 from "./coverimg.jpg"
function HeroComponent()
{
    return(
        <>
              <video autoPlay loop muted className="video">
              <source src={v1} type = "video/mp4" />
              </video>
              <div>
                <h1 className="hero-title">
                    Storing and Viewing Pictures Was Never Easier! </h1>
              </div> 
              
        </>
    );
    
}


export default HeroComponent;