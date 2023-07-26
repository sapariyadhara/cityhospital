import * as  ActionType from '../ActionTypes'

const init = {
    items : [],
    error : null ,
    loading : false
}

export const cartReducer = (state = init , action) => {
    console.log(action , state);
    switch(action.type){
        case ActionType.ADD_TO_CART :
            let item = state.items.some((v) => v.pid === action.payload.pid)
            if(item){
                let index =  state.items.findIndex((v) => v.pid === action.payload.pid)
                state.items[index].qty++
            } else {
                state.items.push(action.payload)
            }
            console.log(item , state);
            return {
                items :state.items ,
                error : null ,
                loading : false
            }
        case ActionType.INC_CART :
            console.log(state.items , action.payload);
            let index = state.items.findIndex((v) => v.pid === action.payload)
            console.log(index);
            state.items[index].qty++
            return{
                items : state.items,
                error : null,
                loading : false
            }
        case ActionType.DEC_CART :
            let index1 = state.items.findIndex((v) => v.pid === action.payload)
            state.items[index1].qty--
            return{
                items : state.items,
                error : null,
                loading : false
            }
        case ActionType.REMOVE_TO_CART :
         
            return{
                items : state.items.filter((v) => v.pid !== action.payload.pid),
                error : null,
                loading : false
            }
               
             
           
        default :
            return state
    }
}