import {createSlice} from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'users',
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    reducers:{}
})
export const userSliceReducer=userSlice.reducer