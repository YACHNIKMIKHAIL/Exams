import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {Input} from "./Input";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/Store";
import {ValueType} from "./State/CounterReducer";


type SetterPropsType = {
    Preset: () => void
    onChangeInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeInputMin: (e: ChangeEvent<HTMLInputElement>) => void
}
export const Setter = (props: SetterPropsType) => {

    const value = useSelector<rootReducerType, ValueType>(state => state.counter)
    return (
        <div className="first">
            <Input callback={props.onChangeInputMax} value={value.counter.maxValue} minValue={value.counter.maxValue}/>
            <Input callback={props.onChangeInputMin} value={value.counter.minValue}/>
            <div className="third">
                <Button callback={props.Preset} name={'Get'} value={value.counter.value} maxValue={value.counter.maxValue}
                        minValue={value.counter.minValue}
                />
            </div>
        </div>
    )
}