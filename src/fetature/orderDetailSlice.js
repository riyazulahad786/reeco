import { createSlice } from "@reduxjs/toolkit";


export const orderDetail = createSlice({
    name:"orderDetail",
    initialState:{
        orders:[],
        loading:false,
        error:null,
    }
})

export default orderDetail.reducer;