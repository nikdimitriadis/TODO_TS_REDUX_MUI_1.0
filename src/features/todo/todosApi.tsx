import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../../Interfaces/todoInteface'

export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        todos: builder.query<Todo[], void>({
            query: () => '/products',
            providesTags: ['Todo']
        }),
        addTodo: builder.mutation<void, Todo>({
            query: todo => ({
                url: '/products',
                method: "POST",
                body: todo
            }),
            invalidatesTags: ['Todo']
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Todo']
        })
    })
})

export const { useTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = todosApi