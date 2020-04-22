import React from 'react';
import './app-header.css'




const AppHeader = ({ toDo, done }) => {
    return ( <
        div className = "app-header d-flex" >
        <
        h1 > Чем сегодня заняться ? < /h1>  <
        h2 > { toDo } -
        Осталось, { done } -
        Сделано < /h2> < /
        div >
    );
};
export default AppHeader;