import { useAppSelector } from "../app/hooks";
import TodoItem from "./TodoItem";

import List from '@mui/material/List';


const Todolist = () => {
    const seeTodos = useAppSelector((state) => state.todo.todos)
    return <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: "0", marginTop: "2rem" }}>
            {seeTodos.map((todo) => (<TodoItem key={todo.id} text={todo.text} id={todo.id} />))}
        </List>
    </>
}

export default Todolist;