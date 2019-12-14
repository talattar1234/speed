import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getVisibleTodos } from '../selectors/todosSelector';
import Todo from "../components/Todo";
import {
        removeTodo as removeTodoLogic,
        openNewTodoModal as openNewTodoModalLogic,
        openEditTodoModal as openEditTodoModalLogic
    } from '../logics/todosLogic';

const TodosList = (props)=> {
    const handleEditTodo = (id) => {
        openEditTodoModalLogic({id})
    }

    const handleRemoveTodo = (id) => {
        removeTodoLogic(id)
    }
    
    const addTodo = () => {
        openNewTodoModalLogic();
    }
    const { todos } = useSelector(state => ({
     
            todos: getVisibleTodos(state)
      }));
    
        return(
        <div className="todo-list">
            <h2 className="todo-list__header">{props.title}</h2>
            <div className="todo-list__actions"> 
                <div 
                    className="todo-list__add-button"
                    onClick={addTodo}>
                        + Add TODO
                </div>
            </div>

            <div className="todo-list__all-items">
            {
                todos.map((todo)=>(
                <Todo
                 key={todo.id}
                 todo={todo}
                 onRemoveTodo={handleRemoveTodo}
                 onEditTodo = {handleEditTodo}
                />
                    
                
            ))
            }
            </div>
            
        </div>)
    }


TodosList.defaultProps = {
    headerText: 'Items'
}


export default TodosList;
