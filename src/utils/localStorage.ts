import {ValueType} from "../Components/State/CounterReducer";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('allValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);

        // const Value = localStorage.getItem('Value');
        // if (Value === null) {
        //     return undefined;
        // }
        // return JSON.parse(Value);
        //
        // const MaxValue = localStorage.getItem('MaxValue');
        // if (MaxValue === null) {
        //     return undefined;
        // }
        // return JSON.parse(MaxValue);
        //
        // const MinValue = localStorage.getItem('MinValue');
        // if (MinValue === null) {
        //     return undefined;
        // }
        // return JSON.parse(MinValue);

    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: ValueType) => {
    try {
        const serializedState = JSON.stringify(state);

        // const Value = JSON.stringify(state.counter.value);
        // const MaxValue = JSON.stringify(state.counter.maxValue);
        // const MinValue = JSON.stringify(state.counter.minValue);

        localStorage.setItem('allValue', serializedState);

        // localStorage.setItem('Value', Value);
        // localStorage.setItem('MaxValue', MaxValue);
        // localStorage.setItem('MinValue', MinValue);
    } catch {
        // ignore write errors
    }
};

