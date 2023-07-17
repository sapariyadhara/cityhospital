
import * as ActionType from '../ActionTypes'

const initstate = {
    count : 0
}

 export const counterReducer = (state = initstate , action) => {
    console.log(action)
    switch(action.type){
        case ActionType.INCREMENT_COUNTER : 
        return {
            count : state.count + 1 
        }

        case ActionType.DECREMENT_COUNTER :
            return {
                count : state.count - 1
            }
        
        default :
            return state 
    };
}