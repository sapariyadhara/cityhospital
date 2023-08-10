import { addDepartmentData, deleteDepartmentData, getDepartmentData, updateDepartmentData } from "../../common/apis/department.api";
import * as  ActionType from '../ActionTypes'
import { setAlert } from "../slice/alertSlice";

export const getData = () => (dispatch) => {
    try {
        getDepartmentData()
            .then((response) => dispatch({ type: ActionType.GET_DEPARTMENT, payload: response.data }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const addData = (data) => (dispatch) => {
    console.log(data);
    try {
        addDepartmentData(data)
            .then((response) => {
                dispatch(setAlert({ text: "Add Data", color: 'success' }))
                dispatch({ type: ActionType.ADD_DEPARTMENT, payload: response.data })
            })
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const deleteData = (id) => (dispatch) => {
    try {
        deleteDepartmentData(id)
            .then(
                dispatch(setAlert({ text: "Delete Data", color: 'success' })),
                dispatch({ type: ActionType.DELETE_DEPARTMENT, payload: id })
            )
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}

export const updateData = (data) => (dispatch) => {
    try {
        updateDepartmentData(data)
            .then(
                dispatch(setAlert({ text: "Update Data", color: 'success' })),
                dispatch({ type: ActionType.UPDATE_DEPARTMENT, payload: data })
                )
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
    }
}