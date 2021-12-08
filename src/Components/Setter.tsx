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
    // const [count1, setCount1] = useState()


    return (
        <div className="first">
            {/*<input type='number' onChange={(e) => {*/}
            {/*    props.setMaxValue(e.currentTarget.valueAsNumber)*/}
            {/*}}/>*/}
            {/*<input type='number' onChange={(e) => {*/}
            {/*    props.setMinValue(e.currentTarget.valueAsNumber)*/}
            {/*}}/>*/}
            <Input callback={props.onChangeInputMax} value={props.maxValue}/>
            <Input callback={props.onChangeInputMin} value={props.minValue}/>
            <div className="third">
                <Button callback={props.Preset} name={'Get'}/>
            </div>
        </div>
    )
}