import React from "react";

type DisplayType = {
    error: boolean
    count: number
}
export const Display = ({error, count, ...props}: DisplayType) => {
    return (
        <div className={error ? 'error' : 'second'}>{count}</div>
    )
}