export type ValueType = {
    value: number
    minValue: number
    maxValue: number
}
const CounterReducer = (state: ValueType, action: ActionType) => {
switch (action.type){
    case 'ADD_VALUE':
        return {...state,
            value: action.payload.minValue,
            minValue:action.payload.minValue,
            maxValue: action.payload.maxValue
        }
    case 'CHANGE_VALUE':
        return {...state,
            value:action.payload.actualValue
        }
    case 'RESET_VALUE':
        return {...state,
            value:0,
            minValue: 0,
            maxValue: 0
        }
    case 'SET_MAX_VALUE':
        return {...state,
            maxValue: action.payload.maxValue
        }
    case 'SET_MIN_VALUE':
        return {...state,
            minValue: action.payload.minValue
        }
    default:
        return state
}

};
type ActionType = addValueAcType|changeValueAcType|resetValueAcType|setMaxValueAcType|setMinValueAcType

type addValueAcType = ReturnType<typeof addValueAC>
export const addValueAC = (minValue: number, maxValue: number) => {
    return {
        type: 'ADD_VALUE',
        payload:
            {minValue: minValue, maxValue: maxValue}
    } as const
}

type changeValueAcType = ReturnType<typeof changeValueAC>
export const changeValueAC = (actualValue:number) => {
    return {
        type: 'CHANGE_VALUE',
        payload:
            {actualValue:actualValue}
    } as const
}

type resetValueAcType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => {
    return {
        type: 'RESET_VALUE'
    } as const
}

type setMaxValueAcType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue:number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload:{
            maxValue:maxValue
        }
    } as const
}

type setMinValueAcType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (minValue:number) => {
    return {
        type: 'SET_MIN_VALUE',
        payload:{
            minValue:minValue
        }
    } as const
}

export default CounterReducer;