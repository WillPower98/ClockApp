import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'

function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek+1];
  }
  
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: this.props.date,
    };
}

    render() {
      return (
        <View styke={{justifyContent: 'space-around'}}>
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        }}>
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
          </View>
      <Text style={styles.dateOutput}>
            {getDayOfWeek(this.state.date)+" "+this.state.date}
      </Text>
      <Text style={styles.dateOutput}>
          {this.props.time}
        </Text>
        </View>
      );
    }
  }
  
  export default Clock;

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
   })
  
   