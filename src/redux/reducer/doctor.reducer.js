import * as  ActionType from '../ActionTypes'

const init = {
    dData : [],
    loading : false ,
    error : ''

}

export const doctorReducer = (state = init, action) => {
    // console.log(action , 'hh');

    switch (action.type) {
        case ActionType.LOADING_DOCTOR :
            return{
                dData : [],
                loading : true,
                error : ''
            }
            case ActionType.ERROR_DOCTOR :
                return{
                    dData : [],
                    loading : false,
                    error : action.payload
                }
        case ActionType.GET_DOCTOR :
            return {
                ...state,
                dData : action.payload,  
                loading : false,             
            }
        case ActionType.ADD_DOCTOR :
            return {
                ...state,
                dData : state.dData.concat(action.payload)
            }   
        case ActionType.DELET_DOCTOR :
            return {
                ...state,
                dData : state.dData.filter((v) => v.id != action.payload)
            } 
        case ActionType.UPDATE_DOCTOR :
            return {
                ...state,
                dData : state.dData.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    }  else {
                        return v
                    }
                })
            }
        default :
        return state
    }

   
  
}
// console.log(init.dData , 'sdvs');