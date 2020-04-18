import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import IItemStatusFilter from '../item-status-filter';
import './app.css'




const App = () => {

    const todoData = [
        { label: 'Drink Cofee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Drink Bear', important: false, id: 3 },
    ]


    return ( <
        div className = 'Main' > <
        AppHeader / >
        <
        div className = 'SearchAndItem' >
        <
        IItemStatusFilter / >
        <
        SearchPanel / >
        <
        /div> <
        TodoList todos = { todoData }
        / > < /
        div >
    )
};

export default App;