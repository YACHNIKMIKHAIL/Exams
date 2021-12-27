import {combineReducers, createStore} from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)