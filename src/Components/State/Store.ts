import {applyMiddleware, combineReducers, createStore} from "redux";
import CounterReducer from "./CounterReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../../utils/localStorage";


const rootReducer = combineReducers({
    counter: CounterReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})
