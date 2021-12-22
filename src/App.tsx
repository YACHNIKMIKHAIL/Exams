import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";
import CounterReducer, {
    addValueAC,
    changeValueAC,
    resetValueAC,
    setMaxValueAC, setMinValueAC
} from "./Components/State/CounterReducer";


function App() {
    // const [value, setValue] = useState<number>(0)
    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(0)

    let state={
        value:0,
        minValue:0,
        maxValue:0
    }

    const [value,dispachValue]=useReducer(CounterReducer,state)
    let [error, setError] = useState<boolean>(false)

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //
    //         setValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])
    //
    // useEffect(() => {
    //     let minValueAsString = localStorage.getItem('minCounterValue')
    //     if (minValueAsString) {
    //         let newValue = JSON.parse(minValueAsString)
    //         setMinValue(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('maxCounterValue')
    //     if (maxValueAsString) {
    //         let newValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newValue)
    //     }
    // }, [])

    const Preset = () => {
        if (state.maxValue - state.minValue !== 0 || state.maxValue - state.minValue > 0) {
            localStorage.setItem('minCounterValue', state.minValue.toString())
            localStorage.setItem('maxCounterValue', state.maxValue.toString())
            dispachValue(addValueAC(state.minValue,state.maxValue))

            // setValue(minValue)
            // setMinValue(minValue)
            // setMaxValue(maxValue)
        } else {
            setError(true)
        }
    }

    const changeCount = () => (state.minValue < state.maxValue && state.value < state.maxValue)
        ? dispachValue(changeValueAC(state.value+1))
        // setValue(value + 1)
        : setError(true)

    const resetCount = () => {
        localStorage.clear()
        dispachValue(resetValueAC())
        // setValue(0)
        // setMinValue(0)
        // setMaxValue(0)
    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispachValue(setMaxValueAC(e.currentTarget.valueAsNumber))
        // setMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispachValue(setMinValueAC(e.currentTarget.valueAsNumber))
        // setMinValue(e.currentTarget.valueAsNumber)
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