import React, {Component} from 'react';
import AppHeader from './components/app-header/app-header';
import TodoList from './components/todo-list/todo-list';
import SearchPanel from './components/search-panel/search-panel';
import './index.css';
import ItemAddForm from './components/item-add-form/item-add-form';


export default class App extends Component {
    maxId = 1023;

    state = {
        todoData: [
            {label: "Drink Coffe", important: false, id:1},
            {label: "Make Awesome App", important: true, id:2},
            {label: "Have a Lunch", important: false, id:3}
        ],
        term: '',
        filter: 'all',

    }
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);

            const before = todoData.slice(0, idx)
            const after = todoData.slice(idx + 1)

            const newArray = [...before, ...after]
            return {
                todoData: newArray
            }
        })
    }
    
    addItem = (text) => {
        if (!(text === "")) {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({ todoData }) => {

            const newArr = [...todoData, 
                newItem]
            return {
                todoData: newArr
            }
        }
        )
    };
    }
    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }
    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    onSearchChange = (term) => {
        this.setState({term})
    };
    render() {
        const { todoData, term, filter } = this.state;

        const visibleitems = this.filter
        (this.search(todoData, term), filter);
        
        return(
            <div className="index">
                <AppHeader />
                <SearchPanel 
                onSearchChange={this.onSearchChange}/>
                <TodoList
                 todos={visibleitems}
                 onDeleted={this.deleteItem}/>
                 <ItemAddForm 
                 onItemAdded={this.addItem}/>
            </div>
        )
    }
}