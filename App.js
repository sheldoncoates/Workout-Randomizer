import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeTabNavigation from './src/Navigation/TabNavigation';

export default class App extends React.Component {
  static router = HomeTabNavigation.router;
  render() {
    return (
      <HomeTabNavigation navigation={this.props.navigation}/>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.5)',
    backgroundColor: null,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

