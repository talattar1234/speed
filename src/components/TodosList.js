import React from 'react';
import { connect } from 'react-redux';
import { getVisibleTodos } from '../selectors/todosSelector';
import Todo from "../components/Todo";
import {
        removeTodo as removeTodoLogic,
        openNewTodoModal as openNewTodoModalLogic,
        openEditTodoModal as openEditTodoModalLogic
    } from '../logics/todosLogic';

class TodosList extends React.Component {
    handleEditTodo = (id) => {
        openEditTodoModalLogic({id})
    }

    handleRemoveTodo = (id) => {
        removeTodoLogic(id)
    }
    
    addTodo = () => {
        openNewTodoModalLogic();
    }

    render() {
        return(
        <div className="todo-list">
            <h2 className="todo-list__header">{this.props.title}</h2>
            <div className="todo-list__actions"> 
                <div 
                    className="todo-list__add-button"
                    onClick={this.addTodo}>
                        + Add TODO
                </div>
            </div>

            <div className="todo-list__all-items">
            {
                this.props.todos.map((todo)=>(
                <Todo
                 key={todo.id}
                 todo={todo}
                 onRemoveTodo={this.handleRemoveTodo}
                 onEditTodo = {this.handleEditTodo}
                />
                    
                
            ))
            }
            </div>
            
        </div>)
    }

}
TodosList.defaultProps = {
    headerText: 'Items'
}

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state)
  };
};
export default connect(mapStateToProps)(TodosList);
