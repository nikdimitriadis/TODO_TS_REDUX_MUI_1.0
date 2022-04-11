import React from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';
import DLM from './components/DLM';
// import Dropdown from './components/Dropdown';
import Form from './components/Form';
import Todolist from './components/Todolist';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';

function App() {
  const mode = useAppSelector(state => state.mode.checked)


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: `${mode ? "dark" : "light"}`,

        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper component="div" className='App' >
        <DLM />
        <Form />
        {/* <Dropdown /> */}
        <Todolist />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
