/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//console.disableYellowBox = true;

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomeScreen from './Scenes/MainPage'
import MainNavigation from './Navigation/Main'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainNavigation />
    );
  }
}
