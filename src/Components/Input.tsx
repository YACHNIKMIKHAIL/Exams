import React from "react";

type InputType={
    callback:(e:any)=>void
    value:number
    minValue?:number
}
export const Input=(props:InputType)=>{
    return <input type="number" onChange={props.callback} value={props.value} min={0}/>
}