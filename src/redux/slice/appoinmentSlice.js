import { createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
    isloading: false,
    apt: [],
    error: null,
}

export const aptAdd = createAsyncThunk(
    'appoinment/fetch',

    async () => {
       
    }

)