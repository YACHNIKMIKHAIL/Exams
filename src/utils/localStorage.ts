import {ValueType} from "../Components/State/CounterReducer";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('allValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state:ValueType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('allValue', serializedState);
    } catch {
        // ignore write errors
    }
};

