import React from "react";


type ButtonType = {
    callback: () => void
    name: string
    value: number
    minValue: number
    maxValue: number
}
export const Button = ({callback, name, ...props}: ButtonType) => {

    return (
        <button className={
            (props.value === props.minValue && name === 'Inc' || props.value === props.maxValue && name === 'Inc'
                || props.value === props.minValue && name === 'Reset'
                || props.value !== 0 && name === 'Get'

            ) ? 'disabled' : ''
        }
                onClick={(e) => callback()}>{name}</button>
    )
}