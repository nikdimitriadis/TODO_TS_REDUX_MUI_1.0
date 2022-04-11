import { configureStore } from "@reduxjs/toolkit";
import modeReducer from '../features/todo/dlmSlice'
import { todosApi } from "../features/todo/todosApi";

export const store = configureStore({
    reducer:{
        [todosApi.reducerPath]: todosApi.reducer,
        // todo: todoReducer,
        mode: modeReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(todosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
