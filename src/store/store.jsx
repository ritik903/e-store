
import { configureStore } from "@reduxjs/toolkit"
import jsonData from "../store/createSlice"


const store = configureStore({
    reducer: {
        jsonData: jsonData,
    }

})
export default store

