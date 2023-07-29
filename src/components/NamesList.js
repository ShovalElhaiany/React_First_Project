import React, {useState} from "react";


const NamesList = ({namesList}) => {
    const [people, setPeople] = useState(
        {firstName: "guy", age:47}
    )

    return (
        <div>
            {people.map( (firstName, age) => <h1>{firstName} is {age} yo</h1>)}
        </div>
    )
        
    
}

export default NamesList;