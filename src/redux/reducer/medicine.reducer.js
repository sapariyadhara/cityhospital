import * as ActionType from "../ActionTypes";

const init = {
  liading: false,
  medicineD: [],
  error: null,
};

export const medicineReducer = (state = init, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.GET_MEDICINE:
      return {
        ...state,
        medicineD: action.payload,
      };
    case ActionType.ADD_MEDICINE:
      return {
        ...state,
        medicineD: state.medicineD.concat(action.payload) ,
        error : null
      };
      case ActionType.DELETE_MEDICINE:
        return {
          ...state,
          medicineD: state.medicineD.filter((v) => v.id !== action.payload) ,
          error : null
        };
      case ActionType.UPDATE_MEDICINE:
        return {
          ...state,
          medicineD: state.medicineD.map((v) => {
            if(v.id === action.payload.id){
                return action.payload
            }   else {
                return v
            }
          }) ,
          error : null
        };
    
    default:
      return state;
  }
};
