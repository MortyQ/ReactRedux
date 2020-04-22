import React, { Component } from 'react';


export default class ItemStatusFilter extends Component {

    render() {
        return ( <
            div className = 'btn-group' >
            <
            button type = 'button'
            className = 'btn btn-info' > Все < /button> <
            button type = 'button'
            className = 'btn btn-outline-secondary' > Активные < /button> <
            button type = 'button'
            className = 'btn btn-outline-secondary' > Сделанные < /button> < /
            div >
        )
    }

}