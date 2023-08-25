import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const initState = {
    isloading: false,
    department: [],
    error: null
}

export const adddptData = createAsyncThunk(
    'department/add',
    async (data) => {
        console.log(data);
        let idata = { ...data }
        try {
            const storage = getStorage();
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'department-img/' + rNo + data.dpartimg.name);
            await uploadBytes(storageRef, data.dpartimg).then(async(snapshot) => {
                console.log('Uploaded a blob or file!');
              await  getDownloadURL(snapshot.ref)
                    .then( async (url) => {
                        idata = { ...data , dpartimg : url , departName :  rNo + data.dpartimg.name}
                        const docRef = await addDoc(collection(db, "department"), idata)
                        idata = {
                            id: docRef.id,
                            ...data,
                            dpartimg : url ,
                            departName :  rNo + data.dpartimg.name
                        }
                    });
            });
          
          return idata  
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {

        }
    }
)

export const getdptData = createAsyncThunk(
    'department/getall',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "department"));
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            return data;
        } catch (e) {
            console.error("Error geting document: ", e);
        }

    }
)

export const deletedptData = createAsyncThunk(
    'department/delete',
    async (id) => {
        try {
            await deleteDoc(doc(db, "department", id));
            return id
        } catch (e) {
            console.error("Error deleteing document: ", e);
        }
    }
)

export const updatedtpData = createAsyncThunk(
    'department/update',
    async (data) => {
        try {
            const washingtonRef = doc(db, "department", data.id);

            // Set the "capital" field of the city 'DC'
            await updateDoc(washingtonRef, {
                ...data
            });
            return data
        } catch (e) {
            console.error("Error deleteing document: ", e);
        }
    }
)

export const departmentfirebaseSlice = createSlice({
    name: 'department',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(adddptData.fulfilled, (state, action) => {
                state.department = state.department.concat(action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(getdptData.fulfilled, (state, action) => {
                console.log(action);
                state.department = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(deletedptData.fulfilled, (state, action) => {
                state.department = state.department.filter((v) => v.id !== action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(updatedtpData.fulfilled, (state, action) => {
                let uData = state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
                state.department = uData
                state.isloading = false
                state.error = null
            })
    }
})

export default departmentfirebaseSlice.reducer