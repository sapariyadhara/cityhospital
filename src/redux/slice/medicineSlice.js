import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";


const initState = {
    isloading: false,
    medic : [],
    error: null,
}

export const addMedicData = createAsyncThunk(
    'medicine/add',
    
    async (data) => {
        console.log('data', data)
        let idata = { ...data }
        try {
            const storage = getStorage();
            let rNo = Math.floor(Math.random() * 100000)
            const storageRef = ref(storage, 'medicine-img/' + rNo + "_" + data.mediImg.name);

            await uploadBytes(storageRef, data.mediImg).then(async (snapshot) => {
                console.log('Uploaded a blob or file!');
                await getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        console.log(url);
                        idata = { ...data, mediImg: url, MprecName: rNo + "_" + data.mediImg.name }
                        const docRef = await addDoc(collection(db, "medicine"), idata)
                        console.log(docRef);
                        idata = {
                            id: docRef.id,
                            ...data,
                            mediImg: url,
                            MprecName: rNo + "_" + data.mediImg.name
                        }
                    })
            });
            return idata;
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
) 

export const getMedicData = createAsyncThunk(
    'medicine/getall',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "medicine"));
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

export const deleteMedicData = createAsyncThunk(
    'medicine/delete',
    async (data) => {
        try {
            const medicRef = ref(storage, 'medicine-img/' + data.MprecName);
            // Delete the file img
            deleteObject(medicRef).then(async () => {
                await deleteDoc(doc(db, "medicine", data.id));
            })
        } catch (e) {
            console.error("Error deleteing document: ", e);
        }
        return data.id
    }
)

export const updateMedicData = createAsyncThunk(
    'medicine/update',
    async (data) => {
        try {
            if (typeof data.mediImg === 'string') {
                console.log("image not change");
                const medicRef = doc(db, "medicine", data.id);
                await updateDoc(medicRef, data);
                return data
            } else {
                let idata = { ...data }
                console.log("image change");
                const medicRef = ref(storage, 'medicine-img/' + data.MprecName);
                await deleteObject(medicRef).then(async () => {
                    let rNo = Math.floor(Math.random() * 100000)
                    const storageRef = ref(storage, 'medicine-img/' + rNo + "_" + data.mediImg.name);

                    await uploadBytes(storageRef, data.mediImg).then(async (snapshot) => {
                        console.log('Uploaded a blob or file!');
                        await getDownloadURL(snapshot.ref)
                            .then(async (url) => {
                                console.log(url);
                                idata = { ...data, mediImg: url, MprecName: rNo + "_" + data.mediImg.name }
                                const medicRef = doc(db, "medicine", data.id);
                                await updateDoc(medicRef, idata)
                                idata = {
                                    ...data,
                                    mediImg: url,
                                    MprecName: rNo + "_" + data.mediImg.name
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
            console.error("Error deleteing document: ", e);
        }
    }
)

export const medicinefirebaseSlice = createSlice({
    name: 'medicine',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addMedicData.fulfilled, (state, action) => {
                state.medic = state.medic.concat(action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(getMedicData.fulfilled, (state, action) => {
                console.log(action);
                state.medic = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(deleteMedicData.fulfilled, (state, action) => {
                state.medic = state.medic.filter((v) => v.id !== action.payload)
                state.isloading = false
                state.error = null
            })
            .addCase(updateMedicData.fulfilled, (state, action) => {
                let uData = state.medic.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
                state.medic = uData
                state.isloading = false
                state.error = null
            })
    }
})

export default medicinefirebaseSlice.reducer