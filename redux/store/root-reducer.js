import {combineReducers} from "@reduxjs/toolkit";
import exampleReducer from "../slices/example";


//register all reducers here
export const rootReducer = combineReducers({
    example: exampleReducer,

});