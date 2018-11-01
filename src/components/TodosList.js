import React from 'react';
import { connect } from 'react-redux';

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
    todos: Object.values(state.todos)
  };
};
export default connect(mapStateToProps)(TodosList);
