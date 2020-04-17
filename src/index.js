import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel/search-panel';
import IItemStatusFilter from './components/item-status-filter/item-status-filter';
import './index.css'




const App = () => {

    const todoData = [
        { label: 'Drink Cofee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Drink Bear', important: false, id: 3 },
    ]


    return ( <
        div > <
        AppHeader / >
        <
        IItemStatusFilter / >
        <
        SearchPanel / >

        <
        TodoList todos = { todoData }
        / > < /
        div >
    )
}


ReactDOM.render( < App / > ,
    document.getElementById('root'));