import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";


function App() {
    const [value, setValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
//(Number(localStorage.getItem("counterValue")))
    //(Number(localStorage.getItem("minCounterValue")))
    //(Number(localStorage.getItem("maxCounterValue")))
    let [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        let minValueAsString = localStorage.getItem('minCounterValue')
        if (minValueAsString) {
            let newValue = JSON.parse(minValueAsString)
            setMinValue(newValue)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxCounterValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
    }, [])

    const Preset = () => {
        if (maxValue - minValue !== 0 || maxValue - minValue > 0) {
            localStorage.setItem('minCounterValue', minValue.toString())
            localStorage.setItem('maxCounterValue', maxValue.toString())
            setValue(minValue)
            setMinValue(minValue)
            setMaxValue(maxValue)
        } else {
            setError(true)
        }
    }

    const changeCount = () => (minValue < maxValue && value < maxValue) ? setValue(value + 1) : setError(true)

    const resetCount = () => {
        localStorage.clear()
        setValue(0)
        setMinValue(0)
        setMaxValue(0)
    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        // debugger
        setMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.valueAsNumber)
    }


    return (
        <div className="App">
            <Setter setMinValue={setMinValue} setMaxValue={setMaxValue} Preset={Preset} minValue={minValue}
                    maxValue={maxValue} onChangeInputMax={onChangeInputMax} onChangeInputMin={onChangeInputMin}
                    value={value}
            />
            <Counter value={value} changeCount={changeCount} resetCount={resetCount} error={error} minValue={0}
                     maxValue={maxValue}
            />
        </div>
    );
}

export default App;