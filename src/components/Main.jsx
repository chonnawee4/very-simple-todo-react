import React from 'react'
import ReactDOM from 'react-dom'
import Controller from './Controller'
import ListView from './ListView'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: '1',
                    text: 'Coding',
                    completed: false
                },
                {
                    id: '2',
                    text: 'Go to 7-11',
                    completed: false
                }
            ]
        }
    }

    handleInputText = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                todo
            ]
        })
    }

    handleToggle = (toggleTodo) => {
        var newTodos = this.state.todos.map(todo => {
            if (todo.id === toggleTodo.id) {
                return toggleTodo
            } 
            return todo
        })

        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className='main'>
                <div className='container'>
                    <Controller className='controller' todos={this.state.todos} inputText={this.handleInputText}/>
                    <ListView todos={this.state.todos} didToggle={this.handleToggle}/>
                </div>
            </div>
        )
    }
}