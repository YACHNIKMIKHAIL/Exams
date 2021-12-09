import React from "react";


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

    const IncButtom = (props.value === props.maxValue || (props.value < 0 || props.value > props.maxValue))
        ? ''
        : 'disabled'
    const ResButtom = (props.minValue === 0) ? 'disabled' : ''
    const Buttom = (isInc ? IncButtom : isGet) ? '' : isRes ? ResButtom : 'disabled'


    return (
        <button className={Buttom}
                onClick={(e) => callback()}>{name}</button>
    )
}