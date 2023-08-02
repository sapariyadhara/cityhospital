import { combineReducers } from "redux";
import { doctorReducer } from "./doctor.reducer";
import { medicineReducer } from "./medicine.reducer";
// import { cartReducer } from "./cart.reducer";
import { favReducer } from "./myfav.reducer";
import counterReducer from "../slice/counterSlice";
import counter1Reducer from "../slice/countter1Slice";
import cartReducer from "../slice/cartSlice";
import departmentSlice from "../slice/departmentSlice";
import departmentReducer from "../slice/departmentSlice";
// import { departmentReducer } from "./department.reducer";


export const rootReducer = combineReducers({
    Counter : counterReducer ,
    Doctor : doctorReducer ,
    Medicine : medicineReducer,
    cart : cartReducer,
    myfav : favReducer,
    counter1 : counter1Reducer,
    department : departmentReducer
})