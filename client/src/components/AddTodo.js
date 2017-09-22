import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo, fetchTodos, deleteCompleted } from '../actions';

class AddTodo extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;

    return (
      <div>
        <input
          type="text"
          style={{ margin: 0 }}
          id={field.name}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="inputValidate">{touched ? error : ''}</div>
      </div>
    );
  }

  onFormSubmit(value) {
    const { reset } = this.props;
    const title = value.addTodo;
    const date = new Date().toLocaleString();
    const todo = {
      title,
      date
    };

    this.props
      .addTodo(todo)
      .then(reset)
      .then(() => this.props.fetchTodos());
  }

  handleDeletingCompleted() {
    this.props.deleteCompleted().then(() => this.props.fetchTodos());
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <div className="input-field col s12">
          <form>
            <Field
              name="addTodo"
              placeholder="Add A New Todo"
              component={this.renderField}
            />
            <button
              className="col s6 btn waves-effect waves-light"
              type="submit"
              onClick={handleSubmit(value => this.onFormSubmit(value))}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
            <button
              className="col s6 btn waves-effect waves-light"
              type="button"
              onClick={() => this.handleDeletingCompleted()}
            >
              Remove Completed
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {

//   }
// }

function validate(values) {
  const errors = {};

  if (!values.addTodo) {
    errors.addTodo = 'Please enter a todo to add.';
  }

  return errors;
}

AddTodo = reduxForm({
  form: 'addTodo',
  validate
})(AddTodo);

export default connect(null, { addTodo, fetchTodos, deleteCompleted })(AddTodo);
