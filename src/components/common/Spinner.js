import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} />
  </View>
);

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

Spinner.propTypes = {
  size: PropTypes.string
};

Spinner.defaultProps = {
  size: 'large'
};

export { Spinner };
