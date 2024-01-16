// Code Keypad Component Here
import React from "react";
import EyesOnMe from "./EyesOnMe";

function Keypad (){

        function handleChange(event){
            console.log("Entering password...");

        }
    return (
        <div>
            <input 
            type="password"
            placeholder="Enter password"
            onChange={handleChange}

            />

        </div>
    )
}

export default Keypad;