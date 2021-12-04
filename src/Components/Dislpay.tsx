import React from "react";

type DisplayType={
    error:boolean
    count:number
}
export const Display=({error,count,...props}:DisplayType)=>{
    return(
        // <div className={error?'error':'second'}>{count}</div>

    <div className={error?'error':'second'}>
        {!error?count
        :<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzJKFQE5O_VBRCwfqzl5JyN0F5XybL0sCCw&usqp=CAU" alt=""/>}
    </div>
    )
}