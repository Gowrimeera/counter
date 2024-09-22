import { useState } from "react"
import "./style.css"
function Counter(){
    var[count,setCount]=useState(0)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div className="counter">
            <div className="counter-1">
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button className="radiant-button" onClick={increment}>Increment</button>
        <button className="radiant-button" onClick={decrement}>decrement</button>
        </div>
        </div>
    )
}


export default Counter