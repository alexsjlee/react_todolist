import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

class AddTodo extends Component {
  renderField(field) {
    const { meta: {touched, error} } = field;

    return (
      <div>
        <input
          type='text'
          style={{margin: 0}}
          id={field.name}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className='inputValidate'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  render() {
    return(
      <div className='row'>
        <div className='input-field col s12'>
          <Field
            name='addTodo'
            placeholder='Add A New Todo'
            component={this.renderField}
          />
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {

//   }
// }

function validate(values) {
  const errors = {};

  if(!values.addTodo) {
    errors.addTodo = 'Please enter a todo to add.'
  }

  return errors;
}

AddTodo = reduxForm({
  form: 'addTodo',
  validate
})(AddTodo)

export default connect(null)(AddTodo);