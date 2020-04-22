import React, { Component } from 'react';

import './item-add-form.css'
export default class ItemAddFrom extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
    }

    render() {
        return ( <
            form className = 'item-add-form d-flex'
            onSubmit = { this.onSubmit } >
            <
            input type = "text"
            className = 'form-control'
            onChange = { this.onLabelChange }
            placeholder = 'Что делаем ?' /
            >
            <
            button className = 'btn btn-outline-secondary' >
            Ракета <
            /button>

            <
            /form>
        );

    };

};