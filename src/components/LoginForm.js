import React, { Component } from 'react';
// import { Text } from 'react-native';

import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
