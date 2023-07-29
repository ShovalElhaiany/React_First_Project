import React, { Fragment, useState, useEffect } from "react";

const BlueHeader = () => {
    const [seconds, setSeconds] = useState(0)
    const [clicks, setClicks] = useState(0)
    const [color, setColor] = useState("blue")
    const [text, setText] = useState()

    const tick = () => {
        setSeconds((prevSeconds) => prevSeconds + 1)
    } 

    useEffect ( () => {
        const interval = setInterval(tick, 1000)
        return () => {
           clearInterval(interval); 
        }
    }, [] )

    useEffect ( () => {
        document.title = ` clicked ${clicks} times`
    },[])

   const clicked = () => {
        setClicks((prevClicks) => prevClicks +1)
   }

   useEffect ( () => {
        setColor(text)
   }, [clicks, text])


   function colorChange(event) {
        setText(event.target.value)
   }

    return (
        <>
            <h1 style={{ color: color}}> Blue Header</h1>
            <h2> seconds passed: {seconds}</h2>
            <input onChange={colorChange}/>
            <h3> clicks: {clicks}</h3>
            <button onClick={clicked}>click</button>
        </>
    )
}

export default BlueHeader;