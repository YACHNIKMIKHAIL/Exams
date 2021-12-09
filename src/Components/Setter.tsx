import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import {Input} from "./Input";


type SetterPropsType = {
    setMaxValue: (maxValie: number) => void
    setMinValue: (maxValie: number) => void
    Preset: () => void
    minValue: number
    maxValue: number
    onChangeInputMax: (e:ChangeEvent<HTMLInputElement>) => void
    onChangeInputMin: (e:ChangeEvent<HTMLInputElement>) => void
    value:number
}
export const Setter = (props: SetterPropsType) => {
    return (
        <div className="first">
            <Input callback={props.onChangeInputMax} value={props.maxValue} minValue={props.minValue}/>
            <Input callback={props.onChangeInputMin} value={props.minValue}/>
            <div className="third">
                <Button callback={props.Preset} name={'Get'} value={props.value} maxValue={props.maxValue} minValue={props.minValue}
                />
            </div>
        </div>
    )
}