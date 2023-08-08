import * as ActionType from '../ActionTypes'

const init = {
    user : null,
    isloading : false ,
    error : null
}

export const authReducer = (state = init , action) => {
    console.log(action);
    switch(action.type){
        case ActionType.SINGUP_REQUEST :
            return{
                ...state
            }
        default :
        return state
    }
}