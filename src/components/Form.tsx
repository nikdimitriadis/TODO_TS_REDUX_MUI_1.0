import React, { useRef } from "react";
import { useAddTodoMutation } from "../features/todo/todosApi";


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';







const Form = () => {
    const todoRef = useRef<HTMLInputElement>(null)

    const [addTodo] = useAddTodoMutation()


    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        if (todoRef.current!.value.length < 1) {
            return;
        } else {
            const createTodo = {
                text: todoRef.current!.value,
                id: Date.now().toString()
            }
            await addTodo(createTodo)
            todoRef.current!.value = '';
        }

    }



    return <>
        <Paper
            elevation={2}
            component="form"
            onSubmit={submitHandler}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="write your todo"
                inputRef={todoRef}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit"
                sx={{ p: '10px' }}
                color="primary">
                <SendIcon />
            </IconButton>
        </Paper>
    </>
}

export default Form;