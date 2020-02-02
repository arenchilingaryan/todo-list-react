import React, { Component } from 'react';
import './todo-list-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExclamation } from '@fortawesome/free-solid-svg-icons';


export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }
    onLabelClick = () => {
        this.setState((done) => {
            return {
                done: !done.done
            }
        })
    }
    onImportantClick = () => {
        this.setState((important) => {
            return {
                important: !important.important
            }
        })
    }

    render() {
        let classNames = "TodoListItem"

        const { done, important } = this.state;
        if (done) {
            classNames += " done"
        }
        if (important) {
            classNames += " imp"
        }
        
        const { label, onDeleted } = this.props;
        
        return (
            <span className="todoListItemBox">
                <span className={classNames} onClick={this.onLabelClick}>{label}</span>
                <button onClick={onDeleted} className="TodoList_btn TodoList_btn_Trash">
                    <FontAwesomeIcon icon={faTrash} className="trash" />
                </button>
                <button onClick={this.onImportantClick} className="TodoList_btn TodoList_btn_important">
                    <FontAwesomeIcon icon={faExclamation} className="important" />
                </button>
            </span>
        )
    }
}