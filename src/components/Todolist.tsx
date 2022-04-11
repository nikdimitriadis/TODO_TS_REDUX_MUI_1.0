import { useTodosQuery } from "../features/todo/todosApi";
import TodoItem from "./TodoItem";
import List from '@mui/material/List';


const Todolist = () => {

    const { data, isLoading, error, isSuccess } = useTodosQuery()

    return <>
        {error ? <h2>error! :/</h2> : isLoading ? <h2>is loading..</h2> : isSuccess ? <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: "0", marginTop: "2rem" }}>
            {data.map((todo) => (<TodoItem key={todo.id} text={todo.text} id={todo.id} />))}
        </List> : null}
    </>
}

export default Todolist;