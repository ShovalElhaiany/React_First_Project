import React from "react";

function HelloHeader(props) {
    const {name, age, weight, height, headerColor} = props;
    const job = "developer";
    const kids = 2;
    return (
        <div>
            <h1 style={{color:headerColor}}> HELLOOOOOOO {name} {age} years old !!!! </h1>
            <SubHeader height={height} weight={weight} job = {job}/>
        </div>
    )
};

const addOne = () => {
    return 1+1;
}

const SubHeader = ({height, weight, job}) => {
    return (
        <h3 style={{ color: "red"}}>you are {height} cm tall and around {weight} kg  and working as {job}</h3>
    )
}

export default HelloHeader