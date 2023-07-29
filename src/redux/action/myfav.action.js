import * as  ActionType from '../ActionTypes'

export const addToFav = (id) => (dispatch) => {
    console.log(id);
    dispatch({type : ActionType.ADD_TO_FAV , payload : { pid : id , qty : 1}})
}