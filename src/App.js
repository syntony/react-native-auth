import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyD-sABhm8fX0UrZgBgON1SE54zCGtgghtg',
  //     authDomain: 'authentication-53af0.firebaseapp.com',
  //     databaseURL: 'https://authentication-53af0.firebaseio.com',
  //     projectId: 'authentication-53af0',
  //     storageBucket: 'authentication-53af0.appspot.com',
  //     messagingSenderId: '1030809676458'
  //   });
  // }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
