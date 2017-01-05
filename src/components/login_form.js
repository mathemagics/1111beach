import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { loginAttempt } from '../actions/index';

// const FIELDS = {
//   username: {
//     type: 'input',
//     label: 'Username',
//   },
//   password: {
//     type: 'input',
//     label: 'Password',
//   },
// };

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.loginAttempt();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input />
      </form>
    );
  }
}

export default reduxForm(
  {
    form: 'LoginForm',
    fields: ['username', 'password'],
  },
  null,
  { loginAttempt })(LoginForm);
