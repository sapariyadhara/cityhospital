import { combineReducers } from "redux";
import {  counterReducer } from './counter.reducer'
import { doctorReducer } from "./doctor.reducer";
import { medicineReducer } from "./medicine.reducer";
import { cartReducer } from "./cart.reducer";
import { favReducer } from "./myfav.reducer";


export const rootReducer = combineReducers({
    Counter : counterReducer ,
    Doctor : doctorReducer ,
    Medicine : medicineReducer,
    cart : cartReducer,
    myfav : favReducer
})