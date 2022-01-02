import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";
import {
    addValueAC, changeValueAC,
    resetValueAC,
    setMaxValueAC,
    setMinValueAC,
    ValueType
} from "./Components/State/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./Components/State/Store";


function App() {

    const state = useSelector<rootReducerType, ValueType>(state => state.counter)
    const dispatch = useDispatch()

    const [initial, setInitial] = useState<boolean>(false)
    let [error, setError] = useState<boolean>(false)

    useEffect(() => {
        // dispatch(setValuesToLCTC())
    }, [])

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         dispatch(changeValueAC(newValue))
    //     }
    //     let minValueAsString = localStorage.getItem('minValue')
    //     if (minValueAsString) {
    //         let newValue = JSON.parse(minValueAsString)
    //         dispatch(setMinValueAC(newValue))
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newValue = JSON.parse(maxValueAsString)
    //         dispatch(setMaxValueAC(newValue))
    //     }
    //     setInitial(true)
    // }, [])

    // useEffect(() => {
    //     if (initial) {
    //         localStorage.setItem('counterValue', JSON.stringify(state.value))
    //         localStorage.setItem('minValue', JSON.stringify(state.minValue))
    //         localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    //     }
    // }, [state])


    const Preset = () => {
        console.log('set on')
        if (state.counter.maxValue - state.counter.minValue !== 0 || state.counter.maxValue - state.counter.minValue > 0) {
            // localStorage.setItem('minValue', state.minValue.toString())
            // localStorage.setItem('maxValue', state.maxValue.toString())
            dispatch(addValueAC(state.counter.minValue, state.counter.maxValue))
        } else {
            setError(true)
        }
    }
    const changeCount = () => (state.counter.minValue < state.counter.maxValue && state.counter.value < state.counter.maxValue)
        ? dispatch(changeValueAC(state.counter.value + 1))
        : setError(true)
    // const changeCount = () => (state.minValue < state.maxValue && state.value < state.maxValue)
    //     ? dispatch(changeValueAC(state.value + 1))
    //     : setError(true)

    const resetCount = () => {
        localStorage.clear()
        dispatch(resetValueAC())
    }
    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(e.currentTarget.valueAsNumber))
    }
    const onChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(e.currentTarget.valueAsNumber))
    }


    return (
        <div className="App">
            <Setter
                Preset={Preset}
                onChangeInputMax={onChangeInputMax}
                onChangeInputMin={onChangeInputMin}
            />
            <Counter
                changeCount={changeCount}
                resetCount={resetCount}
                error={error}
            />
        </div>
    );
}

export default App;