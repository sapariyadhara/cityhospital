import * as  ActionType from '../ActionTypes'

const init = {
    loading : false ,
    dData : [],
    error : ''

}

export const doctorReducer = (state = init, action) => {
    // console.log(action.payload , 'hh');
    switch (action.type) {
        case ActionType.GET_DOCTOR :
            return {
                ...state,
                dData : action.payload,               
            }
        default :
        return state
    }

   
  
}
// console.log(init.dData , 'sdvs');