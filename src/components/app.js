import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import LoginForm from './login_form';
import { logout } from '../actions';
import Header from './header';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCqjnXf8ZYouadnYQ-kxheCsTroK8gntVY',
      authDomain: 'beach-2510b.firebaseapp.com',
      databaseURL: 'https://beach-2510b.firebaseio.com',
      storageBucket: 'beach-2510b.appspot.com',
      messagingSenderId: '545063390416',
    };
    firebase.initializeApp(config);
  }
  render() {
    const { authenticated } = this.props;
    return (
      <div className="app">
        <Header authenticated={authenticated} signOut={this.props.logout} />
        <LoginForm />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  const { authenticated } = auth;
  return { authenticated };
}

export default connect(mapStateToProps, { logout })(App);
