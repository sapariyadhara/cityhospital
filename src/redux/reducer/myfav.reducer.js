import * as  ActionType from '../ActionTypes'

const initial = {
    fav : [] ,
    loading: false,
    error: null,
}

export const favReducer = (state = initial , action) => {
    // console.log(action , state);
    switch(action.type){
        case ActionType.ADD_TO_FAV:
            let item = state.fav.some((v) => v.pid === action.payload.pid)
            console.log(item);
            if(item){
                let index =  state.fav.findIndex((v) => v.pid === action.payload.pid)
              
            } else {
                state.fav.push(action.payload)
                
            }
            console.log(item , state);
            return {
                fav :state.fav ,
                error : null ,
                loading : false
            }
        case ActionType.REMOVE_TO_FAV :
            return{
                fav : state.fav.filter((v) => v.pid !== action.payload),
                error : null ,
                loading : false
            }
        default:
            return state

    }
}