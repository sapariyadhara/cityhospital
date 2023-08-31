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
        let idata = { ...data }
        try {
            const storage = getStorage();
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'prescription/' + rNo + "_" + data.precfile.name);

            await uploadBytes(storageRef, data.precfile).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, precfile: url, precName: rNo + "_" + data.precfile.name }
                        const docRef = await addDoc(collection(db, "appoinment"), idata)
                        console.log(docRef);
                        idata = {
                            id: docRef.id,
                            ...data,
                            precfile: url,
                            precName: rNo + "_" + data.precfile.name
                        }
                        console.log(idata);
                    })
            });
            return idata;
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
            if (typeof data.precfile === 'string') {
                console.log("image not change");
                const aptRef = doc(db, "appoinment", data.id);
                await updateDoc(aptRef, data );
                return data
            } else {
                let idata = { ...data }
                console.log("image change");
                const aptRef = ref(storage, 'prescription/' + data.precName);
                await deleteObject(aptRef).then(async () => {
                    let rNo = Math.floor(Math.random() * 100000)
                    const storageRef = ref(storage, 'prescription/' + rNo + "_" + data.precfile.name);
    
                    await uploadBytes(storageRef, data.precfile).then(async (snapshot) => {
                        console.log('Uploaded a blob or file!');
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                idata = { ...data, precfile: url, precName: rNo + "_" + data.precfile.name }
                                const aptRef = doc(db, "appoinment", data.id);
                               await updateDoc( aptRef , idata)
                                idata = {
                                    ...data,
                                    precfile: url,
                                    precName: rNo + "_" + data.precfile.name
                                }
                                console.log(idata);
                            })
                    });
                })
                // console.log("delete img");
               
                return idata;
               
                //old img delete
                //new img
                //update new img and data
            }

        } catch (e) {
            console.error("Error adding document: ", e);
        }
       
    }

)

export const deleteAptData = createAsyncThunk(
    'appoinment/delete',
    async (data) => {
        console.log(data);

        try {
            const aptRef = ref(storage, 'prescription/' + data.precName);
            deleteObject(aptRef).then(async () => {
                await deleteDoc(doc(db, "appoinment", data.id));
            })


        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id
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