import { useState } from 'react'

import './App.css'




const App = () => {
   
let [counter,setCounter] = useState(1)

const addValue = () => {
    if(counter < 20){
        setCounter(counter+1)
    }else{
        alert("You Not Add Value More Than 20")
    }
}

const removeValue = () => {
    if(counter > 0){
        setCounter(counter-1)
    }else{
        alert("You Not Remove Value after zero ")
    }
}

    return (
        <div>
                <h1>Chai Aur React -- Counter APP</h1>
                <h2>{counter}</h2>

                <button onClick={addValue}>Add +</button>
                <br />
                <br />
                <button onClick={removeValue}>Remove -</button>
        </div>
    )
}


export default App