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
            <Display error={error} count={value.value}/>

            <div className="third">
                <Button callback={changeCount} name={'Inc'} value={value.value} minValue={value.minValue}
                        maxValue={value.maxValue}
                />
                <Button callback={resetCount} name={'Reset'} value={+value} minValue={value.minValue}
                        maxValue={value.maxValue}
                />
            </div>
        </div>
    )
}
