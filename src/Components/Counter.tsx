import React from "react";
import {Button} from "./Button";
import {Display} from "./Dislpay";

type CounterType={
    changeCount:()=>void
    resetCount:()=>void
    error:boolean
    value:number
    minValue:number
    maxValue:number
}
export const Counter=({value,changeCount,resetCount,error,...props}:CounterType)=>{
    return(
        <div className="first">
            <Display error={error} count={value}/>

            <div className="third">
                <Button callback={changeCount} name={'Inc'} value={value} minValue={props.minValue} maxValue={props.maxValue}
                />
                <Button callback={resetCount} name={'Reset'} value={value} minValue={props.minValue} maxValue={props.maxValue}
                />
            </div>
        </div>
    )
}
