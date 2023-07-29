import React from "react";

const RedHeader = ({redHeader, secondHeader}) => {
    return(
        <div>
            <h1 style={{color: 'red'}}>
                {redHeader}
            </h1>
            <h2>
                {secondHeader}
            </h2>
        </div>
    )
}

export default RedHeader;