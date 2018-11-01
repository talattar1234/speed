import React from 'react';
import { connect } from 'react-redux';
import {getVisibleTodos} from '../selectors/todosSelector';

class TodosList extends React.Component {

    render() {
        return(
        <div>
            {
                this.props.todos.map((todo)=>(
                <div key={todo.id}>
                    {todo.id}
                </div>
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
