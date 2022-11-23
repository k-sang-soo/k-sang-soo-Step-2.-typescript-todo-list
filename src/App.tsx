import React from 'react';
import { GlobalStyle } from './StyledReset';
import ToDoList from './components/ToDoList';
import Time from './components/Time';

function App() {
    return (
        <>
            <GlobalStyle />
            <ToDoList />
            <Time />
        </>
    );
}

export default App;
