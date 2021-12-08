import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";


function App() {
    const [value, setValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if ('counterValue') {
            if (typeof valueAsString === "string") {
                let newValue = JSON.parse(valueAsString)
                setValue(newValue)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        let minValueAsString = localStorage.getItem('minCounterValue')
        if ('minCounterValue') {
            if (typeof minValueAsString === "string") {
                let newValue = JSON.parse(minValueAsString)
                setMinValue(newValue)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('minCounterValue', JSON.stringify(value))
    }, [minValue])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxCounterValue')
        if ('maxCounterValue') {
            if (typeof maxValueAsString === "string") {
                let newValue = JSON.parse(maxValueAsString)
                setMaxValue(newValue)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxCounterValue', JSON.stringify(value))
    }, [maxValue])

    const Preset = () => {
        if (maxValue - minValue !== 0 || maxValue - minValue > 0) {
            setValue(minValue)
            setMinValue(minValue)
            setMaxValue(maxValue)
        }
    }


    const incHandler = () => {
        console.log(value)
        setValue(value + 1)
    }
    // const del = () => {
    //     localStorage.clear()
    // }

    // let start = 0
    // let finish = 5

    // let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    const changeCount = () => (minValue < maxValue && value < maxValue) ? setValue(value + 1) : setError(true)

    const resetCount = () => {
        localStorage.clear()
        setValue(0)
        // setMinValue(0)
        // setMaxValue(0)
    }


    return (
        <div className="App">
            <Setter setMinValue={setMinValue} setMaxValue={setMaxValue} Preset={Preset} minValue={minValue}
                    maxValue={maxValue}/>
            <Counter count={value} changeCount={changeCount} resetCount={resetCount} error={error}/>
            {/*<button onClick={() => Preset(minValue, maxValue)}>Preset</button>*/}
            {/*<button onClick={del}>clear</button>*/}
        </div>
    );
}

export default App;
