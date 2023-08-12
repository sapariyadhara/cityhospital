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

export const logOutRequest = () => (dispatch) => {
        dispatch({type : ActionType.LOGOUT_REQUEST })
}

export const loggedOut = () => (dispatch) => {
        dispatch({type : ActionType.LOGGED_OUT })
}

export const forgotPassRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.FORGOTPASS_REQUEST , payload : data})
}