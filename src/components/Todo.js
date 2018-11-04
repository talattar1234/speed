import React from 'react';

class Todo extends React.Component{

    handleEditTodo = () => {
        this.props.onEditTodo(this.props.todo.id);
    }
    handleRemoveTodo = () => {
        this.props.onRemoveTodo(this.props.todo.id);
    }

    render(){
        return (
        <div className="todo">
            <div className="todo__details">
                <div>Description: {this.props.todo.description}</div>
                <div>CreatedAt : {this.props.todo.createdAt}</div>
            </div>
            
            <div className="todo__actions">
                <div onClick={this.handleEditTodo} className="todo__edit">edit</div>
                <div onClick={this.handleRemoveTodo} className="todo__remove" >remove</div>
            </div>
        </div>)
    }
}

export default Todo;