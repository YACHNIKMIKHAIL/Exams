import React, {useState} from "react";
import {Button} from "./Button";


type SetterPropsType = {
    setMaxValue: (maxValie: number) => void
    setMinValue: (maxValie: number) => void
    Preset :()=>void
    minValue: number
    maxValue: number
}
export const Setter = (props: SetterPropsType) => {
    // const [count1, setCount1] = useState()


    return (
        <div className="first">
            <input type='number' onChange={(e) => {
                props.setMaxValue(e.currentTarget.valueAsNumber)
            }}/>
            <input type='number' onChange={(e) => {
                props.setMinValue(e.currentTarget.valueAsNumber)
            }}/>

            <div className="third">
           <Button callback={props.Preset} name={'Get'} />
            </div>
        </div>
    )
}