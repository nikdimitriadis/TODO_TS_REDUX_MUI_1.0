import { /*useAppDispatch,*/ useAppSelector } from "../app/hooks";
import { useDeleteTodoMutation } from "../features/todo/todosApi";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

const TodoItem: React.FC<{ text: string, id: string }> = ({ text, id }) => {
    const [deleteTodo] = useDeleteTodoMutation()
    const deleteHandler = async () => {
        await deleteTodo(id)
    }

    const mode = useAppSelector(state => state.mode.checked)

    return <><ListItem
        sx={{ backgroundColor: `${mode ? "#1e1e1e " : null}` }}
        disableGutters
        secondaryAction={
            <IconButton onClick={deleteHandler}>
                <DeleteOutlineIcon />
            </IconButton>
        }
    >
        <ListItemText primary={text} />
    </ListItem></>
}

export default TodoItem;