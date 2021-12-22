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
import {log} from "util";


function App() {
    // const [value, setValue] = useState<number>(0)
    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(0)

    let initialState = {
        value: 0,
        minValue: 0,
        maxValue: 0
    }

    const [state, dispachValue] = useReducer(CounterReducer, initialState)
    let [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            dispachValue(changeValueAC(newValue))
            // setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(state.value))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('minValue', JSON.stringify(state.minValue))
    }, [state])

    useEffect(() => {
        let minValueAsString = localStorage.getItem('minCounterValue')
        if (minValueAsString) {
            let newValue = JSON.parse(minValueAsString)
            dispachValue(setMinValueAC(newValue))
            // setMinValue(newValue)
        }
    }, [])

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxCounterValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            dispachValue(setMaxValueAC(newValue))
            // setMaxValue(newValue)
        }
    }, [])

    const Preset = () => {
        console.log('set on')
        if (state.maxValue - state.minValue !== 0 || state.maxValue - state.minValue > 0) {
            localStorage.setItem('minCounterValue', state.minValue.toString())
            localStorage.setItem('maxCounterValue', state.maxValue.toString())
            console.log(state.value)
            dispachValue(addValueAC(state.minValue, state.maxValue))

            // setValue(minValue)
            // setMinValue(minValue)
            // setMaxValue(maxValue)
        } else {
            setError(true)
        }
    }

    const changeCount = () => (state.minValue < state.maxValue && state.value < state.maxValue)
        ? dispachValue(changeValueAC(state.value + 1))
        // setValue(value + 1)
        : setError(true)

    const resetCount = () => {
        console.log('reset')
        localStorage.clear()
        dispachValue(resetValueAC())
        // setValue(0)
        // setMinValue(0)
        // setMaxValue(0)
    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.valueAsNumber)
        console.log(state.maxValue)
        console.log('change max')
        dispachValue(setMaxValueAC(e.currentTarget.valueAsNumber))
        // setMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(state.minValue)
        console.log('change min')
        dispachValue(setMinValueAC(e.currentTarget.valueAsNumber))
        // setMinValue(e.currentTarget.valueAsNumber)
    }


    return (
        <div className="App">
            <Setter
                // setMinValue={onChangeInputMin} setMaxValue={onChangeInputMax}
                Preset={Preset} minValue={state.minValue}
                maxValue={state.maxValue} onChangeInputMax={onChangeInputMax} onChangeInputMin={onChangeInputMin}
                value={state.value}
            />
            <Counter value={state.value} changeCount={changeCount} resetCount={resetCount} error={error} minValue={0}
                     maxValue={state.maxValue}
            />
        </div>
    );
}

export default App;