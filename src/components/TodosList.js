import React from 'react';
import { connect } from 'react-redux';
import {getVisibleTodos} from '../selectors/todosSelector';
import Todo from "../components/Todo";
import {
        removeTodo as removeTodoLogic,
        openTodoModal as openTodoModalLogic} from '../logics/todosLogic';

class TodosList extends React.Component {
    handleEditTodo = (id) => {
        alert(id)
    }

    handleRemoveTodo = (id) => {
        removeTodoLogic(id)
    }
    
    addTodo = () => {
        openTodoModalLogic();
    }

    render() {
        return(
        <div>
            <button onClick={this.addTodo}>Add TODO</button>
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
            
        </div>)
    }

}
const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state)
  };
};
export default connect(mapStateToProps)(TodosList);
