import React, {useState} from "react";
import {Button} from "./Button";
import {Input} from "./Input";


type SetterPropsType = {
    setMaxValue: (maxValie: number) => void
    setMinValue: (maxValie: number) => void
    Preset: () => void
    minValue: number
    maxValue: number
    onChangeInputMax: (e:any) => void
    onChangeInputMin: (e:any) => void
}
export const Setter = (props: SetterPropsType) => {
    return (
        <div className="first">
            <Input callback={props.onChangeInputMax} value={props.maxValue}/>
            <Input callback={props.onChangeInputMin} value={props.minValue}/>
            <div className="third">
                <Button callback={props.Preset} name={'Get'}/>
            </div>
        </div>
    )
}