import * as  ActionType from '../ActionTypes'

export const addToCart = (id) => (dispatch) => {
    dispatch({type : ActionType.ADD_TO_CART , payload : {pid : id , qty : 1}})
}

export const incCartOty = (id) => (dispatch) => {
    dispatch({type : ActionType.INC_CART , payload : id})
}