import React, {useState} from "react";


type SetterPropsType = {
    setMaxValue: (maxValie: number) => void
    setMinValue: (maxValie: number) => void
}
export const Setter = (props: SetterPropsType) => {
    const [count1, setCount1] = useState()


    return (
        <div className="first">
            <input type='number' onChange={(e) => {
                props.setMaxValue(e.currentTarget.valueAsNumber)
            }}/>
            <input type='number' onChange={(e) => {
                props.setMinValue(e.currentTarget.valueAsNumber)
            }}/>

            <div className="third">
                <button>Get</button>
            </div>
        </div>
    )
}