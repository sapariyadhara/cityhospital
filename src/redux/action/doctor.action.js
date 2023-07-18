import * as  ActionType from '../ActionTypes'

export const getData = () => (dispatch) => {
  fetch("http://localhost:3004/doctors")
    .then((response) => response.json())
    .then((data) => dispatch({type : ActionType.GET_DOCTOR , paylord : data}))
    .catch((error) => console.log(error))
};
