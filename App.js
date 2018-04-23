import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import moment from "moment";

export default class clockApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: moment().format("LTS"),
      text: ''
    };
  }
  componentDidMount() {
    setTimeout(() => {
			this.setState({
				time: moment().format("LTS"),
			});
		}, 1000);
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
          style={styles.input}
          placeholder = "Please Enter A Date"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.timeOutput}>
					{this.state.time}
				</Text>
        <Text style={styles.dateOutput}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   input:{
     color: 'steelblue',
     height: 40,
     fontSize: 40,
   },
   dateOutput:{
     fontSize: 40,
     color: 'steelblue',
   },

   timeOutput:{
     padding: 10,
     fontSize: 50,
     color: 'steelblue',
   },

   container:{
     //backgroundColor: 'black',
     padding: 10,
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-between',
     alignItems: 'center',
   }
 })