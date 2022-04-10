import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

import { TodoSlice,Todo } from '../../Interfaces/todoInteface';

const initialState: TodoSlice = {
    todos: [],
}


export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) =>{
            // edw mporw na exw asc & des sto 1o case push px sto 2o unshift
            state.todos.unshift(action.payload)
        },
        removeTodo: (state, action: PayloadAction<string>) =>{
            state.todos = state.todos.filter(todo => todo.id !==action.payload)
        },
        reverseTodo: (state, action: PayloadAction<string>) =>{
            switch (action.payload){
                case 'asc':
                    state.todos = state.todos.sort((a,b)=>{
                        let idA = +a.id;
                        let idB= +b.id;
                      return idA - idB
                    } )
                    break;
                case 'des':
                    state.todos = state.todos.sort((a,b)=>{
                        let idA = +a.id;
                        let idB= +b.id;
                      return idB - idA
                    } )
                    break;
            }
        }
    }
})

export const {addTodo,removeTodo,reverseTodo} = todosSlice.actions;

export const selectCount = (state: RootState) => state.todo.todos

export default todosSlice.reducer