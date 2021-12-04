import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";


function App() {

    let start = 0
    let finish = 5

    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    const changeCount = () => (count < 5) ? setCount(count + 1) : setError(true)


    const resetCount = () => {
        setCount(0)
        setError(false)
    }


    return (
        <div className="App">
            <Counter count={count} changeCount={changeCount} resetCount={resetCount} error={error}/>
        </div>
    );
}

export default App;
