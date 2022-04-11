// import { useState } from "react";
// import { useAppDispatch } from "../app/hooks";
// import { reverseTodo } from "../features/todo/todoSlice";


// MUI
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select /*,{ SelectChangeEvent }*/ from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



const Dropdown = () => {
    // const [value, setValue] = useState('des')
    // const dispatch = useAppDispatch();

    // const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     dispatch(reverseTodo(e.target.value))
    // }
    // const sortHandler = (e: SelectChangeEvent) => {
    //     setValue(e.target.value)
    //     dispatch(reverseTodo(e.target.value))
    // }

    return <>
        <Box sx={{ minWidth: 400, marginTop: "1rem" }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Sort</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    label="Age"
                // value={value}
                // onChange={sortHandler}
                >
                    <MenuItem value="des">Descending</MenuItem>
                    <MenuItem value="asc">Ascending</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </>


    // return <div>
    //     <label htmlFor="sort">Sort your todos: </label>
    //     <select id="sort" onChange={sortHandler}>
    //         <option value="des">Descending</option>
    //         <option value="asc">Ascending</option>
    //     </select>
    // </div>


}

export default Dropdown;