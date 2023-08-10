import { addDoctorsData, deleteDoctorData, getDoctorsData, updateDoctorData } from '../../common/apis/doctors.api'
import * as  ActionType from '../ActionTypes'
import { setAlert } from '../slice/alertSlice'

export const getData = () => (dispatch) => {
  try {
    dispatch(loadingData(true))
    setTimeout(function () {
      getDoctorsData()
        .then((response) => dispatch({ type: ActionType.GET_DOCTOR, payload: response.data }))
        .catch((error) => dispatch(errorData(error)))
    }, 2000)
  } catch (error) {
    console.log(error);
  }

}

export const addDoctor = (data) => (dispatch) => {
  console.log(data);
  try {
    addDoctorsData(data)
      .then((response) => {
        dispatch(setAlert({ text: "Add Data", color: 'success' }))
        dispatch({ type: ActionType.ADD_DOCTOR, payload: response.data })}
      )
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error);
  }
}

export const deletDoctor = (id) => (dispatch) => {
  try {
    deleteDoctorData(id)
      .then(
        dispatch(setAlert({ text: "Delete Data", color: 'error' })),
        dispatch({ type: ActionType.DELET_DOCTOR, payload: id })
        )
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}

export const updateData = (data) => (dispatch) => {
  try {
    updateDoctorData(data)
      .then(
        dispatch(setAlert({ text: "Update Data", color: 'success' })),
        dispatch({ type: ActionType.UPDATE_DOCTOR, payload: data })
        )
      .catch((error) => console.log(error))
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
