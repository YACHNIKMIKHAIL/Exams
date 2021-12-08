import React from "react";
import {Button} from "./Button";
import {Display} from "./Dislpay";

type CounterType={
    count:number
    changeCount:()=>void
    resetCount:()=>void
    error:boolean

}
export const Counter=({count,changeCount,resetCount,error,...props}:CounterType)=>{
    return(
        <div className="first">
            <Display error={error} count={count}/>

            <div className="third">
                <Button callback={changeCount} name={'Inc'} />
                <Button callback={resetCount} name={'Reset'} />
            </div>
        </div>
    )
}
