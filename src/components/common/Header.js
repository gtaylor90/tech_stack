// Import libaries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
export { Header };
