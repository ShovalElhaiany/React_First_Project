import React, {useState, useEffect} from "react";

const Board = () => {
    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
    const [xToPlay, setXToPlay] = useState(true);
    const [winner, setWinner] = useState();

    const handleClick = (i) => {
        if (squares[i]!=null){
            return;
        }
        let nextSquares = squares.slice()
        if (xToPlay){
            nextSquares[i] = 'x'
        }else{
            nextSquares[i] = 'o'
        }
        setSquares(nextSquares);
        setXToPlay(!xToPlay)
        
    }

    useEffect(()=>{
        if (winner!=null){
            alert("we have a winner");
            return;
        }
        console.log(squares);
        console.log(xToPlay)
        isGameOver();
        
    })

    const isGameOver = () => {
        for(let i=0; i<9; i+=3){
            if (squares[i] === squares[i+1] && squares[i+1] === squares[i+2] && squares[i]!= null ){
                setTheWinner(i);
                return;
            }
        }
        for(let i=0; i<3; i+=1){
            if (squares[i] === squares[i+3] && squares[i+3] === squares[i+6] && squares[i]!= null ){
                setTheWinner(i);
                return;
            }
        }

        if (squares[0] === squares[4] && squares[0] === squares[8] && squares[0]!= null ){
            setTheWinner(0);
            return;
        }

        if (squares[2] === squares[4] && squares[2] === squares[6] && squares[2]!= null ){
            setTheWinner(2);
            return;
        }

        function setTheWinner(i) {
            if (squares[i] === 'x') {
                setWinner('winner is x');
            } else {
                setWinner('winner is o');
            }
            
        }
    }
    const style = {
        "hight": "200px"
    }

    const reset = () => {
        setSquares ([null,null,null,null,null,null,null,null,null]);
        setWinner(null);
        setXToPlay(true);

    }

    return(
        <>
        {winner  ? 
            <div>
                <h1> {winner}</h1>
                <button onClick={()=>reset()}>New game?</button>
            </div> :
            <div>
                <div>
                    <Cell val={squares[0]} onclick={() => handleClick(0)} />
                    <Cell val={squares[1]} onclick={() => handleClick(1)} />
                    <Cell val={squares[2]} onclick={() => handleClick(2)}/>
                </div>
                <div>
                    <Cell val={squares[3]} onclick={() => handleClick(3)}/>
                    <Cell val={squares[4]} onclick={() => handleClick(4)} />
                    <Cell val={squares[5]} onclick={() => handleClick(5)}/>
                </div>
                <div>
                    <Cell val={squares[6]} onclick={() => handleClick(6)} />
                    <Cell val={squares[7]} onclick={() => handleClick(7)} />
                    <Cell val={squares[8]} onclick={() => handleClick(8)} />
                </div>
            </div>
        }
        </>
    )
}


const Cell = (props) => {
    let button_style = {
        "backgroundColor": "#ff7600",
        "border": "1px solid blue",
        "color": "#ff7600",
        "height": "100px",
        "width": "100px",
        "padding": "5px",
        "textAlign": "center",
        "textDecoration": "none",
        "fontSize": "30px",
        "display": "inline-block",
        "margin": "2px",
        "cursor": "pointer",
        "borderRadius": 5
      }

    const setCellVal = () =>{
        if (props.val == null){
            return "N";
        }
        button_style['color'] = "white";
        return props.val;
    }

    return(
        <button style={button_style} onClick={props.onclick} >{setCellVal()}</button>
    )   
}


export default Board;