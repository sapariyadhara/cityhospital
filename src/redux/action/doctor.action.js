import { addDoctorsData, deleteDoctorData, getDoctorsData, updateDoctorData } from '../../common/apis/doctors.api'
import * as  ActionType from '../ActionTypes'

export const getData = () => (dispatch) => {
  try {
    dispatch(loadingData(true))
    setTimeout(function () {
      getDoctorsData()
        .then((response) => dispatch({ type: ActionType.GET_DOCTOR, payload: response.data }))
        .catch((error) => dispatch(errorData(error)))
      // fetch("http://localhost:3004/doctor")
      // .then((response) => {
      //   if(response.ok){
      //     return response.json()
      //   } 
      //   throw new Error('Something went wrong');
      // })
      // .then((data) => dispatch({type : ActionType.GET_DOCTOR , payload : data}))
      // .catch((error) => dispatch(errorData(error)))
    }, 3000)
  } catch (error) {
    console.log(error);
  }

}

export const addDoctor = (data) => (dispatch) => {
  console.log(data);
  try {
    addDoctorsData(data)
      .then((response) => dispatch({ type: ActionType.ADD_DOCTOR, payload: response.data }))
      .catch((error) => console.log(error))
    // fetch("http://localhost:3004/doctors", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }

    // )
    // .then((response) => response.json())
    // .then((data) => dispatch({type : ActionType.ADD_DOCTOR , payload : data}) )
    // .catch((error) => console.log(error))
  } catch (error) {
    console.log(error);
  }
}

export const deletDoctor = (id) => (dispatch) => {
  try {
    deleteDoctorData(id)
      .then(dispatch({ type: ActionType.DELET_DOCTOR, payload: id }))
      .catch((error) => console.log(error))
    // fetch("http://localhost:3004/doctors/" + id, {
    //   method: "DELETE"
    // })
    //   .then(dispatch({ type: ActionType.DELET_DOCTOR, payload: id }))
    //   .catch((error) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}

export const updateData = (data) => (dispatch) => {
  try {
    updateDoctorData(data)
      .then(dispatch({ type: ActionType.UPDATE_DOCTOR, payload: data }))
      .catch((error) => console.log(error))
    // fetch("http://localhost:3004/doctors/" + data.id, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(dispatch({ type: ActionType.UPDATE_DOCTOR, payload: data }))
    //   .catch((error) => console.log(error))
  } catch (error) {
    console.log(error);
  }
}


export const loadingData = (status) => (dispatch) => {
  console.log(status)
  dispatch({ type: ActionType.LOADING_DOCTOR, payload: status })
}

export const errorData = (errorMsg) => (dispatch) => {
  console.log(errorMsg);
  dispatch({ type: ActionType.ERROR_DOCTOR, payload: errorMsg })
}
