import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderTodos() {
    if (!this.props.todos) {
      return (
        <tr className="loader">
          <td className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </td>
        </tr>
      );
    }

    return this.props.todos.reverse().map(todo => {
      return (
        <tr key={todo._id}>
          <td>
            <div>
              <i className="material-icons">check_box_outline_blank</i>
            </div>
          </td>
          <td>
            <p>
              <span className='todoTitle'>{todo.title}</span>
              <br />
              {todo.date}
            </p>
          </td>
          <td>
            <div className='right'>
              <i className="material-icons">edit</i>
              <i className="material-icons">delete</i>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <table>
            <tbody>{this.renderTodos()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);
