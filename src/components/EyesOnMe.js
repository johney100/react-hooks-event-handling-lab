// Code EyesOnMe Component Here
import React from "react";
import ReactDOM from 'react-dom';

function EyesOnMe(){

    function handleFocus(){
        console.log("Good!");
    }

    function handleBlur(){
        console.log("Hey! Eyes on me!");
    }

    return(
        <div>
            <button  text="Eyes on me" onFocus={handleFocus} onBlur={handleBlur}>Eyes on me </button>
        </div>

    )

}

export default EyesOnMe;