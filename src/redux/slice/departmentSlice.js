import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDepartmentData, deleteDepartmentData, getDepartmentData, updateDepartmentData } from "../../common/apis/department.api"

const initState = {
    isloading : false ,
    depart : [] ,
    error: null,
}

export const fetchDepartments = createAsyncThunk(
    'department/fetch',
    async () => {
        let response = await getDepartmentData()
        return response.data;
    }
)

export const addDepartments = createAsyncThunk(
    'department/add',
    async (data) => {
        let response = await addDepartmentData(data)
        return response.data
    }
)

export const deleteDepartments = createAsyncThunk(
    'department/delete',
    async (id) => {
        let response = await deleteDepartmentData(id)
        return response.id
    }
)

export const updatedepartments = createAsyncThunk(
    'department/update',
    async (data) => {
        let response = await updateDepartmentData(data)
        return response.data
    }
)

export const isloadingData = createAsyncThunk(
    'department/loading'
)

export const departmentSlice = createSlice({
    name : 'department',
    initialState : initState ,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchDepartments.pending , (state , action) => {
            if(fetchDepartments.pending){
                state.isloading = true
            } else {
                state.isloading = false
            }
           
            state.error = null
            console.log(state.isloading ,action)    
        })
            .addCase(fetchDepartments.fulfilled , (state , action) => {
                console.log(action);
                    state.depart = action.payload
            })
            .addCase(addDepartments.fulfilled , (state , action) => {
                state.depart = state.depart.concat(action.payload)
            })
            .addCase(deleteDepartments.fulfilled , (state , action) => {
                state.depart = state.depart.filter((v) => v.id !== action.payload)
            })
            .addCase(updatedepartments.fulfilled , (state , action) => {
                let udata = state.depart.map((v) => {
                    if(v.id ===  action.payload.id){
                        return action.payload
                    } else {
                        return v
                    }
                })
                state.depart=udata

            })
    }
})

export default departmentSlice.reducer