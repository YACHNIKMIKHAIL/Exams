import React from "react";

type ButtonType = {
    callback: () => void
    name: string
    count: number

}
export const Button = ({callback, name, count, ...props}: ButtonType) => {

    return (
        <button className={(count === 0 && name === 'Reset' || count === 5 && name === 'Inc') ? 'disabled' : ''}
                onClick={callback}>{name}</button>
    )
}