import * as  ActionType from '../ActionTypes'

export const getData = () => (dispatch) => {
  try{
    fetch("http://localhost:3004/doctors")
    .then((response) => response.json())
    .then((data) => dispatch({type : ActionType.GET_DOCTOR , payload : data}))
    .catch((error) => console.log(error))
  } catch (error) {
      console.log(error);
  }
 
}

export const addDoctor = (data) => (dispatch) => {
  console.log(data);
  try{
    fetch("http://localhost:3004/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
   
    )
    .then((response) => response.json())
    .then((data) => dispatch({type : ActionType.ADD_DOCTOR , payload : data}) )
    // .catch((error) => console.log(error))
  } catch (error) {
      console.log(error);
  }
}

export const deletDoctor = (id) => (dispatch) => {
  try{
    fetch("http://localhost:3004/doctors/" + id , {
      method : "DELETE"
    } )
    .then(dispatch({type : ActionType.DELET_DOCTOR , payload : id}))
    .catch((error) => console.log(error))
  } catch(error) {
    console.log(error)
  }
}

export const updateData = (data) => (dispatch) => {
  try{
      fetch("http://localhost:3004/doctors/" + data.id ,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(dispatch({type : ActionType.UPDATE_DOCTOR , payload : data}))
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error);
  }
}
