import {combineReducers} from "redux";
import {itemsSlice} from "./itemsSlice";

export const rootReducer = combineReducers({
    items: itemsSlice.reducer,
})