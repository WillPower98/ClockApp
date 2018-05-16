import React, { Component } from 'react';
import ClockFace from './ClockFace';
import { View, StyleSheet } from 'react-native';


export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ClockFace/>
      </View>
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
