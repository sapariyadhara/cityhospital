import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const initState = {
    isloading: false,
    apt: [],
    error: null,
}

export const aptAdd = createAsyncThunk(
    'appoinment/fetch',

    async (data) => {
        console.log('data', data)
        try {
            const docRef = await addDoc(collection(db, "appoinment"), data)
            return {
                id: docRef.id,
                ...data,

            }
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const aptgetData = createAsyncThunk(
    '/appoinment/getall',
    async () => {
        // console.log('getdata', data)
        const querySnapshot = await getDocs(collection(db, "appoinment"));
        console.log('querySnapshot',querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log('querySnapshot',doc.data());
            
            return doc.data;
        });
    }
)

export const appoinmentSlice = createSlice({
    name: 'appoinment',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(aptAdd.fulfilled, (state, action) => {
                console.log('in add1',action.payload);
                state.apt = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(aptgetData.fulfilled, (state , action) => {
                console.log('in add2',action);
                state.apt = []
                state.isloading = false
                state.error = null
            })
    }
})

export default appoinmentSlice.reducer