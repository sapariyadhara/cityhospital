import * as ActionType from '../ActionTypes'

const init = {
    user: null,
    isloading: false,
    error: null
}

export const authReducer = (state = init, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.SINGUP_REQUEST:
        case ActionType.LOGIN_REQUEST:
        case ActionType.LOGOUT_REQUEST :
        case ActionType.SIGNIN_WITH_GOOGLE_REQUEST:
            return {
                user: null,
                isloading: true,
                error: null
            }
        case ActionType.EMAIL_VARIFICATION:
            return {
                user: null,
                isloading: false,
                error: null
            }
        case ActionType.AUTH_ERROR:
            return {
                user: null,
                isloading: false,
                error: action.payload
            }
        case ActionType.LOGGED_IN :
            return{
                user : action.payload,
                isloading : false,
                error  :null
            }
            case ActionType.LOGGED_OUT :
                return{
                    user : null,
                    isloading : false,
                    error  : null
                }
            case ActionType.FORGOTPASS_REQUEST :
                return{
                    user : action.payload,
                    isloading : false,
                    error  : null
                }
        default:
            return state
    }
}