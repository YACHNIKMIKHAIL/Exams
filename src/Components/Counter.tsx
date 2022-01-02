import React from "react";
import {Button} from "./Button";
import {Display} from "./Dislpay";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/Store";
import {ValueType} from "./State/CounterReducer";

type CounterType = {
    changeCount: () => void
    resetCount: () => void
    error: boolean
}
export const Counter = ({changeCount, resetCount, error, ...props}: CounterType) => {

    const value = useSelector<rootReducerType, ValueType>(state => state.counter)

    return (
        <div className="first">
            <Display error={error} count={value.counter.value}/>

            <div className="third">
                <Button callback={changeCount} name={'Inc'} value={value.counter.value} minValue={value.counter.minValue}
                        maxValue={value.counter.maxValue}
                />
                <Button callback={resetCount} name={'Reset'} value={+value} minValue={value.counter.minValue}
                        maxValue={value.counter.maxValue}
                />
            </div>
        </div>
    )
}
