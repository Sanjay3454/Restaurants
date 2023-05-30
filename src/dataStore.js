import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer/rReducer";



//CREATE REDUCER 
const reducer = combineReducers({
    reducer1:restReducer
})

//create middleware
const middleware=[thunk]

//create store                       reducer,middlware
const store = createStore(reducer,applyMiddleware(...middleware))

export default store

