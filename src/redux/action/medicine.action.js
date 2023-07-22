import * as ActionType from '../ActionTypes'

export const getData = () => (dispatch) => {
    try{
        fetch(" http://localhost:3004/medicines")
            .then((response) => response.json())
            .then((data) => dispatch({type : ActionType.GET_MEDICINE , payload : data}))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}


export const addData = (data) => (dispatch) => {
    try{
        fetch(" http://localhost:3004/medicines/" ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data), 
        })
            .then((response) => response.json())
            .then((data) => dispatch({type : ActionType.ADD_MEDICINE , payload : data}))
            // .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const deteleData = (id) => (dispatch) => {
    try{
        fetch(" http://localhost:3004/medicines/" + id ,{
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(dispatch({type : ActionType.DELETE_MEDICINE , payload : id}))
            // .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}


export const updateData = (data) => (dispatch) => {
    try{
        fetch(" http://localhost:3004/medicines/" + data.id ,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data), 
        })
            .then((response) => response.json())
            .then((data) => dispatch({type : ActionType.UPDATE_MEDICINE , payload : data}))
            // .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

