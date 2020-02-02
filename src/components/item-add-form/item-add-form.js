import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label)
        return this.setState({
            label: ''
        })
    }
    render() {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input 
                onChange={this.onLabelChange} 
                type="text" placeholder="What Do You Need To Do?" 
                className="addItem"
                value={this.state.label}></input>
                <button className="sPanel_b searchPanel_button2">Add Item</button>
            </form>
        )
    }
}

