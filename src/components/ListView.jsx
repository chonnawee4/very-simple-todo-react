import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from './ListItem'

export default class ListView extends React.Component {

    handleItemToggle = (todo) => {
        this.props.didToggle(todo)
    }

    renderListItem = () => {
        const { todos } = this.props
        return todos.map(todo => <ListItem key={todo.id} todo={todo} toggleCompleted={this.handleItemToggle}/>)
    }

    render() { 
        return (
            <div className='todo_container'>
                {this.renderListItem()}
            </div>
        )
    }
}