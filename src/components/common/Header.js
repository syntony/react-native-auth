import React from 'react';
import { Platform, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    marginTop: Platform.select({
      ios: 20,
      android: 0
    })
  },
  textStyle: {
    fontSize: 20
  }
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired
};

export { Header };
