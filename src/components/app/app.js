import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import IItemStatusFilter from '../item-status-filter';
import './app.css'
import ItemAddForm from '../item-add-form'




export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTOdoItem('Проснуться'),
            this.createTOdoItem('Выпить Чашку кофе'),
            this.createTOdoItem('Покурить')


        ]
    };

    createTOdoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {

        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id)

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]




            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTOdoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName] };

        return [...arr.slice(0, idx),
            newItem, ...arr.slice(idx + 1)
        ];


    }

    onToggleDone = (id) => {

        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };

        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };

        });
    };



    render() {
        const { todoData } = this.state;
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return ( <
            div > <
            AppHeader toDo = { todoCount }
            done = { doneCount }
            / > <
            div className = 'SearchAndItem' >
            <
            IItemStatusFilter / >
            <
            SearchPanel / >
            <
            /div> <
            TodoList todos = { todoData }
            onDeleted = {
                this.deleteItem
            }
            onToggleImportant = { this.onToggleImportant }
            onToggleDone = { this.onToggleDone }
            / >  <
            ItemAddForm onItemAdded = { this.addItem }
            / > < /
            div >
        )
    }

};