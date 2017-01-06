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

  onSubmit(props) {
    this.props.loginAttempt(props);
  }

  render() {
    const { fields: { username, password }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Please Sign in</h3>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className="form-control" {...username} />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" className="form-control" {...password} />
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        <button type="button" className="btn btn-primary">
          Forgot Password
        </button>
      </form>
    );
  }
}

// function validate(values) {
//
// }

export default reduxForm(
  {
    form: 'LoginForm',
    fields: ['username', 'password'],
  },
  null,
  { loginAttempt })(LoginForm);
