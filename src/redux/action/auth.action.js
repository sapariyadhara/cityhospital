import * as ActionType from '../ActionTypes'

export const signupRequest = (data) => (dispatch) => {
        dispatch({type : ActionType.SINGUP_REQUEST , payload : data})
}