import React from "react";

function HelloHeader(props) {
    const {name, age, weight, height, hederColor} = props;
    const job = 'developer'
    const kid = 5;
    return (
        <div>
            <h1 style={{color:hederColor}}> HELLOOOOOO! {name} {age} years old !!!!! </h1>
            <SubHeader height={height} weight={weight} />
        </div>
    )
};


const addOne = () => {
    return 1+1;

}
const SubHeader = ({height, weight, job}) => {
    return(
        <h3 style={{ color: 'red' }}> you are {height} cm tall and around {weight} kg and working as {job}</h3>
    )
}

export default HelloHeader