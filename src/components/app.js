import React, { Component } from 'react';
import firebase from 'firebase';
import LoginForm from './login_form';

export default class App extends Component {
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
    return (
      <LoginForm />
    );
  }
}
