import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import modeReducer from '../features/todo/dlmSlice'

export const store = configureStore({
    reducer:{
        todo: todoReducer,
        mode: modeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
