import React from "react";

type ButtonType = {
    callback: () => void
    name: string
}
export const Button = ({callback, name, ...props}: ButtonType) => {

    return (
        <button onClick={(e)=>callback()}>{name}</button>
    )
}