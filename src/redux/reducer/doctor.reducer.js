import * as  ActionType from '../ActionTypes'

const init = {
    loading : true ,
    dData : {},
    error : ''

}

export const doctorReducer = (state = init, action) => {
    console.log(action.paylord , 'hh');
    switch (action.type) {
        case ActionType.GET_DOCTOR :
            return {
                   dData : state.action.paylord,               
            }
        default :
        return state
    }

   
  
}
// console.log(init.dData , 'sdvs');