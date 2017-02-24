import React from 'react'
import ReactDOM from 'react-dom'

export default class ListItem extends React.Component {
    toggleCompleted = () => {
        const { todo } = this.props

        var toggleTodo = {
            ...todo,
            completed: !todo.completed
        }

        this.props.toggleCompleted(toggleTodo)
    }

    render() {
        const { todo } = this.props
        let textClass = todo.completed ? 'selected-todo-text' : 'todo-text'

        return (
            <div className='todo' onClick={this.toggleCompleted}>
                <h3 className={textClass}>{`${todo.text}`}</h3>
            </div>
        )
    }
}