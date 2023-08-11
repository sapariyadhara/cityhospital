import * as ActionType from '../ActionTypes'

export const signupRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.SINGUP_REQUEST , payload : data})
}

export const emailVarification = () => (dispatch) => {
        dispatch({type : ActionType.EMAIL_VARIFICATION})
}

export const authError = (data) => (dispatch) => {
        dispatch({type : ActionType.AUTH_ERROR , payload : data})
}

export const loginRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.LOGIN_REQUEST , payload : data})
}

export const loggedIn = (data) => (dispatch) => {
        dispatch({type : ActionType.LOGGED_IN , payload : data})
}

export const logOut = (data) => (dispatch) => {
        dispatch({type : ActionType.LOGOUT, payload:data })
}

export const forgotPassRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.FORGOTPASS_REQUEST , payload : data})
}