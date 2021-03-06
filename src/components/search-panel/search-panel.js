import React, { Component } from 'react'

import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        return ( <
            input className = "form-control search-input"
            placeholder = 'ШО, Ищем ?'
            value = { this.state.tem }
            onChange = { this.onSearchChange }
            / >

        );
    }
};