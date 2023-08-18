import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const initState = {
    isloading: false,
    apt: [],
    error: null,
}

export const aptAdd = createAsyncThunk(
    'appoinment/add',
  
    async (data) => {
        console.log('data', data)
       
        try {
            const storage = getStorage();
            const storageRef = ref(storage, 'prescription/' + data.precfile.name[0]);
            let idata = {data}
            await uploadBytes(storageRef, data.precfile).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, precfile: url }
                        const docRef = await addDoc(collection(db, "appoinment"),idata )
                        console.log(docRef);
                        idata = {
                            id: docRef.id,
                            ...data,
                            precfile: url
                        }
                        console.log(idata);
                    })
            });
         return idata ;
        //  console.log(idata);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

export const getAptData = createAsyncThunk(
    'appoinment/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "appoinment"));
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            return data;
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

)

export const upDateAptData = createAsyncThunk(
    'appoinment/update',
    async (data) => {
        try {
            const washingtonRef = doc(db, "appoinment", data);
            await updateDoc(washingtonRef, {
                ...data
            });
            return data
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

)

export const deleteAptData = createAsyncThunk(
    'appoinment/delete',
    async ( data) => {
        console.log(data);
        // console.log( 'prescription/' + data.precfile.name[0]);
        // try {
        //     const desertRef = ref(storage, 'prescription/' + data.precfile.name[0]);
        //     deleteObject(desertRef).then(async() => {
        //         // File deleted successfully
        //         await deleteDoc(doc(db, "appoinment", data.id));
        //     })
            
        //     return data.id
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }
    }

)

export const appoinmentSlice = createSlice({
    name: 'appoinment',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(aptAdd.fulfilled, (state, action) => {
                console.log('in add1', state, action.payload);
                state.apt = state.apt.concat(action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(getAptData.fulfilled, (state, action) => {
                console.log('in get', action);
                state.apt = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(deleteAptData.fulfilled, (state, action) => {
                console.log('in get', action);
                state.apt = state.apt.filter((v) => v.id !== action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(upDateAptData.fulfilled, (state, action) => {
                console.log('in get', action);
                let uData = state.apt.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v;
                    }
                })
                state.apt = uData
                state.isloading = false
                state.error = null
            })
    }
})

export default appoinmentSlice.reducer