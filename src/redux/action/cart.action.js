import * as  ActionType from '../ActionTypes'

export const addToCart = (id) => (dispatch) => {
    dispatch({type : ActionType.ADD_TO_CART , payload : {pid : id , qty : 1}})
}

export const incCartQty = (id) => (dispatch) => {
    dispatch({type : ActionType.INC_CART , payload : id})
}

export const decCartQty = (id) => (dispatch) => {
    dispatch({type : ActionType.DEC_CART , payload : id})
}

export const deleteToCart = (data) => (dispatch) => {
    dispatch({type : ActionType.REMOVE_TO_CART , payload : data})
}