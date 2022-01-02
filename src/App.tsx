import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";
import {
    addValueAC,
    changeValueAC,
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

    let [error, setError] = useState<boolean>(false)

    const Preset = () => {
        console.log('set on')
        if (state.counter.maxValue - state.counter.minValue !== 0 || state.counter.maxValue - state.counter.minValue > 0) {
            dispatch(addValueAC(state.counter.minValue, state.counter.maxValue))
        } else {
            setError(true)
        }
    }
    const changeCount = () => (state.counter.minValue < state.counter.maxValue && state.counter.value < state.counter.maxValue)
        ? dispatch(changeValueAC(state.counter.value + 1))
        : setError(true)

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