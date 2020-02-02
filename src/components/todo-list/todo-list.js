import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ todos, onDeleted }) => {
    

    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li className="todoList_li" key={id}>
                <span>
                    <TodoListItem {...itemProps} 
                    onDeleted={() => onDeleted(id)}/>
                </span>
                
            </li>
        )
    });
    return (
        <ul className="todoList_ul">
            {elements}
        </ul>
    )
}

export default TodoList;