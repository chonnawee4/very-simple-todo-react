import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Controller extends Component {
    handleOnClick = () => {
        const textField = this.refs.textField.value
        const todos = this.props.todos

        const todo = {
            id: todos.length + 1,
            text: textField,
            completed: false
        }
        if (textField) {
            this.props.inputText(todo)
            this.refs.textField.value = ''
        }
    }

    render() {
        return (
            <div>
                <h1 className='header-text'>Input View</h1>
                <input type='text' placeholder='Input text here' ref='textField'/>
                <button onClick={this.handleOnClick}>Submit</button>
            </div>
        )
    }
} 