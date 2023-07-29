import React, { useState } from "react";

const RedHeader = ({redHeader, secondHeader}) => {
    const [header, setHeader] = useState("first header")
    const [color, setColor] = useState("black")

    function changeHeader(event){
        setHeader(event.target.value)
    }
    
    function changeColor(){
        setColor(header)
    }

    return (
        <div>
            <h1 style={{ color: color}}>
                {header}
            </h1>
            <input type={"text"} onChange={changeHeader} />
            <button onClick={ changeColor}/>
            <h2>
               {secondHeader}
            </h2>
        </div>
    )
}

export default RedHeader;