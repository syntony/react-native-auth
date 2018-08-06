import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Card, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: undefined };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD-sABhm8fX0UrZgBgON1SE54zCGtgghtg',
      authDomain: 'authentication-53af0.firebaseapp.com',
      databaseURL: 'https://authentication-53af0.firebaseio.com',
      projectId: 'authentication-53af0',
      storageBucket: 'authentication-53af0.appspot.com',
      messagingSenderId: '1030809676458'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
  switch(this.state.loggedIn) {
    case true:
      return (
        <Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        </Card>
      );
    case false:
      return <LoginForm />;
    default:
      return (
        <Card>
          <CardSection>
            <Spinner />
          </CardSection>
        </Card>
      );
  }
}

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
