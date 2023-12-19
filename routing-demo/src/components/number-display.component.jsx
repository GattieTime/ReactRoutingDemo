import React from "react";

const NumberDisplayComponent = (props)=>{
    return(
        <div>
            <p>I'm here to display a number:</p>
            <h1>{props.dispNum}</h1>
        </div>
    )
}

export default NumberDisplayComponent;