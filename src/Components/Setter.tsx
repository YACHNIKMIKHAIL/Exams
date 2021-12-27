import React, {ChangeEvent, useState} from "react";
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
            <Input callback={props.onChangeInputMax} value={value.maxValue} minValue={value.maxValue}/>
            <Input callback={props.onChangeInputMin} value={value.minValue}/>
            <div className="third">
                <Button callback={props.Preset} name={'Get'} value={value.value} maxValue={value.maxValue}
                        minValue={value.minValue}
                />
            </div>
        </div>
    )
}