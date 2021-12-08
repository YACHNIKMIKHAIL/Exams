import React from "react";

type ButtonType = {
    callback: () => void
    name: string
    // count: number
    // minValue: number
    // maxValue: number
}
export const Button = ({callback, name, ...props}: ButtonType) => {

    return (
        <button onClick={(e)=>callback()}>{name}</button>
    )
}