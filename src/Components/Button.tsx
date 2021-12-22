import React, {useState} from "react";

type ButtonType = {
    callback: () => void
    name: string
    value: number
    minValue: number
    maxValue: number
}
export const Button = ({callback, name, ...props}: ButtonType) => {
    const isInc = name === 'Inc'
    const isRes = name === 'Reset'
    const isGet = name === 'Get'
    let valueAsString = localStorage.getItem('counterValue')

    let  IncButton = (props.value === props.maxValue || (props.value <= 0 || props.value > props.maxValue))
        ? 'disabled'
        : ''

    const ResButton = (props.value === props.maxValue && valueAsString !== "0" ) ? '' : 'disabled'
    const Button = isInc ? IncButton : isGet ? '' : isRes ? ResButton : 'disabled'


    return (
        <button className={Button}
                onClick={(e) => callback()}>{name}</button>
    )
}