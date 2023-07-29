import React, { useState} from "react";

 function ShowPoll() {
    const [isShowGood, setIsShowGood] = useState("");
    function answer(val) {
        setIsShowGood(val);
    } 

    return (
        <div>
        <h2>Is show any good?</h2>
        <label>yes</label>
        <input type={"radio"} name="poll" value="yes" onClick={() => {answer(true)}}/>
        <label>no</label>
        <input type={"radio"} name="poll" value="yes" onClick={() => {answer(false)}}/>
              
        <Answers isGood={isShowGood}/>
        {/* {isShowGood ? <GoodShow/> : <BadShow/>} */}

        </div>
    )
}

function Answers({isGood}){
    let msg;
    
    return isGood==="yes" && <GoodShow/>

}

const GoodShow = () =>{
    return <h3 style={{color:"green"}}>YES</h3>
}

const BadShow = () =>{
    return <h3 style={{color:"red"}}>NO</h3>
}
    
export default ShowPoll;


// 1.
// if (condition) {
//     return <Comp1/>
// }else{
//     return <Comp2/>
// }

// 2.
// if (condition) {
//     msg = <Comp1/>
// }else{
//     msg = <Comp2/>
// }
// return msg;
// 3.
// {condition ? <Comp1/> : <Comp2/>}

// 4.
// return condition && <Comp1/>