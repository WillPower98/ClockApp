import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import moment from "moment";
import DatePicker from 'react-native-datepicker'

function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek+1];
}


class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: moment().format("LTS"),
      date: "1999-12-31"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        time: moment().format("LTS")
      });
    }, 1000);
  }

  render(){
    return(
        <Text style={styles.timeOutput}>
			    {this.state.time}
		    </Text>
    )
  }
}

class CalenderPrompt extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: "1999-12-31"
    };
  }
  

  render(){
    return(
      <DatePicker 
            style={styles.dateInput}
            date = {this.state.date}
            mode = "date"
            placeholder = "Select Date"
            format = "YYYY-MM-DD"
            minDate = "1900-01-01"
            maxDate = "2100-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange = {(date) => {this.setState({date: date})}}
          />
    )
  }
}

class DateOutput extends Component{
  constructor(props){
    super(props);
    this.state = {
      dates: ""
    }
  }

  render(){
    return(
      <Text style={styles.dateOutput}>
          {getDayOfWeek(4)+" "+6}
      </Text>
    )
  }
}

export default class clockFace extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <CalenderPrompt/>
        <Clock/>
        <DateOutput/>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   dateInput:{
     width: 200,
   },

   dateOutput:{
     fontSize: 30,
     color: 'steelblue',
   },

   timeOutput:{
     padding: 10,
     fontSize: 50,
     color: 'steelblue',
   },

   container:{
     backgroundColor: 'black',
     padding: 10,
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems: 'center',
   }
 })

 