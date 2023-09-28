import { configureStore } from "@reduxjs/toolkit";
import orderDetail  from "../fetature/orderDetailSlice";
export const store = configureStore({
    reducer:{
        app:orderDetail
    },
})