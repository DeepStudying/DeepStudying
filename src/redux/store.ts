import {configureStore} from "@reduxjs/toolkit"
import { PostType } from "../types/Post"
import stockReducer from "./postSlice"


export const store = configureStore({
    reducer: {
        posts: stockReducer 
    }
})

export type RootState = ReturnType<typeof  store.getState>