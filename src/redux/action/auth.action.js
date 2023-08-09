import * as ActionType from '../ActionTypes'

export const signupRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.SINGUP_REQUEST , payload : data})
}

export const loginRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.LOGIN_REQUEST , payload : data})
}

export const forgotPassRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.FORGOTPASS_REQUEST , payload : data})
}