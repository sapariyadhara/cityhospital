import * as  ActionType from '../ActionTypes'

export const increment = () => (dispatch) => {
    dispatch({type : ActionType.INCREMENT_COUNTER})
}

export const decrement = () => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER})
}

export const incrementIsOdd = () => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER})
}

export const incrementAsync = () => (dispatch) => {
    dispatch({type : ActionType.DECREMENT_COUNTER})
}