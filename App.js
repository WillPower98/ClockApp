import React, { Component } from 'react';
import ClockFace from './ClockFace';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import clockAppReducer from './reducers';

const store = createStore(clockAppReducer)

export default class app extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ClockFace/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
 
  container:{
    backgroundColor: 'black',
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }})
